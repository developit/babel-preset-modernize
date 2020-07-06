const REGISTRY_HINT = 'webpackJsonp';

export default function({ types: t, template }) {
	function isWebpackRegistryContext(path) {
		// (window.webpackJsonp = window.webpackJsonp || [])
		if (t.isAssignmentExpression(path)) {
			// todo: this should also check the RHS
			return isWebpackRegistryContext(path.get('left'));
		}

		// window.webpackJsonp or self.webpackJsonp
		if (!t.isMemberExpression(path)) return false;

		const obj = path.get('object').resolve();
		if (!/^(window|top|self|globalThis)$/.test(getName(obj))) {
			return false;
		}

		// .webpackJsonp or ['webpackJsonp']
		return getName(path.get('property')) === REGISTRY_HINT;
	}

	/**
	 * Verify that a Path is a "bootstrap" function, which is Webpack's module registry and loader implementation.
	 * @param {import('@babel/core').NodePath<import('@babel/types').FunctionDeclaration>} path
	 */
	function isWebpackBootstrap(path) {
		const identifiers = {};
		path.get('body').traverse({
			MemberExpression(p) {
				// Detect extensions to Webpack's main namespace.
				// They're assignments to properties on a local binding, but we don't yet know which one.
				// We ignore nested functions, and only look at assignments.
				if (p.scope !== path.scope || !t.isAssignmentExpression(p.parent)) {
					return;
				}
				if (t.isIdentifier(p.node.object) && t.isIdentifier(p.node.property)) {
					let a = identifiers[p.node.object.name];
					if (!a) a = identifiers[p.node.object.name] = {};
					a[p.node.property.name] = p;
				}
			}
		});

		// Check if we found a binding with properties that signify a Webpack namespace object:
		for (const a in identifiers) {
			const v = identifiers[a];
			// Look for `__webpack_public_path__`, `__webpack_modules__` and an onerror handler:
			if (v.p && v.c && v.oe) {
				return true;
			}
		}

		return !!(identifiers.window && identifiers.window.webpackJsonp);
	}

	function resolveExpressionStatement(path) {
		if (t.isExpressionStatement(path)) {
			return resolveExpressionStatement(path.get('expression'));
		}
		if (t.isUnaryExpression(path) && path.node.operator === '!') {
			return resolveExpressionStatement(path.get('argument'));
		}
		return path;
	}

	function getName(path) {
		path = path.resolve();
		if (t.isIdentifier(path)) return path.node.name;
		return path.evaluate().value;
	}

	function reduceReferences(identifier, callback, accumulator) {
		if (!identifier) return accumulator;
		const identifiers = identifier.getOuterBindingIdentifierPaths();
		for (let name in identifiers) {
			const binding = identifiers[name].scope.bindings[name];
			const paths = binding.referencePaths;
			if (!binding.constant) {
				console.warn(`Expected constant binding: ${name}`);
			}
			for (let i = 0; i < paths.length; i++) {
				const path = paths[i];
				if (path !== identifier) {
					const r = callback(accumulator, paths[i], name);
					if (r !== undefined) accumulator = r;
				}
			}
		}
		return accumulator;
	}

	function parseModule(name, factory) {
		const module = {
			name,
			exports: {},
			defaultExport: undefined,
			exportIdentifiers: {},
			requires: [],
			references: 0,
			referenceModules: new Set(),
			factory,
			harmony: false
		};

		const [moduleObj, exportsObj, requireObj] = factory.get('params');

		reduceReferences(
			moduleObj,
			(refs, ref) => {
				const parent = ref.parentPath;
				const outer = parent.parentPath;

				// require.define() / require.register()
				// require.d() / require.r()
				if (t.isCallExpression(parent)) {
					namedExport(parent);
					//if (parent.get('arguments').length !== 3) return;
					//const nameNode = parent.get('arguments.1');
					//const getter = parent.get('arguments.2');
					//if (!t.isFunction(getter)) return;
					//const v = getter.get('body.body.0.argument');
					//return setExport(v, name, nameNode.evaluate().value);
				}

				// module.exports
				if (!t.isMemberExpression(parent)) {
					console.warn(`Not sure how to deal with ${parent.node.type} on "module".\n${parent.getSource()}`);
					return;
				}

				// module.exports.foo
				if (t.isMemberExpression(outer)) {
					return namedExport(outer);
				}

				// module.exports = 1
				if (!t.isAssignmentExpression(outer)) {
					// TODO this should de-opt the module's exports
					console.warn(`Expected module.exports assignment, but got ${outer.node.type}.\n${outer.getSource()}`);
					return;
				}

				// ensure we're actually setting the .exports property
				const property = getName(parent.get('property'));
				if (property !== 'exports') {
					console.warn(`Unexpected assignment to module[${property}].\n${parent.getSource()}`);
					return;
				}

				//namedExport(outer);
				// setExport(outer, name, 'default');

				// Explode m.exports = { a: 1, b: 2 }
				const value = outer.get('right');
				if (t.isObjectExpression(value) && value.evaluate().confident) {
					if (value.get('properties').every(p => t.isObjectProperty(p))) {
						// const key = t.isIdentifier(p.node.key) ? t.clone(p.node.key) : t.identifier;
						//console.log(outer.node, outer.parent);
						const names = [];
						const v = outer.replaceWithMultiple(
							value.get('properties').map(p => {
								// const computed = p.node.computed || p.node.key.computed || !t.isIdentifier(p.node.key);
								const key = t.isIdentifier(p.node.key)
									? t.clone(p.node.key)
									: t.identifier(p.get('key').evaluate().value);
								names.push(key.name);
								return t.assignmentExpression(
									'=',
									t.memberExpression(t.clone(outer.node.left), key),
									t.clone(p.node.value)
								);
							})
						);
						//console.log(v, outer, module);
						v.forEach((v, i) => {
							if (t.isExpressionStatement(v)) v = v.get('expression');
							// console.log('named export: ', v.node.left.property);
							// namedExport(v.get('left'));
							setExport(v.get('right'), name, names[i]);
						});
						return;
					}

					/*
					let props = {};
					value.get('properties').forEach(prop => {
						if (!t.isObjectProperty(prop)) { // todo: also check if computed?
							return props = null;
						}
						if (!props) return;
						const key = prop.get('key').evaluate().value;
						if (typeof key !== 'string' && typeof key !== 'number') {
							return props = null;
						}
						props[key] = prop.get('value');
					});
					if (props) {
						for (const prop in props) {
							setExport(props[prop], name, prop);
						}
						return;
					}
					*/
				}

				// TODO: this assumes an `=` AssignmentExpression.
				// If the assignment is side-effecting (`+=` etc), we cannot safely perform this operation.
				setExport(value, name, 'default');

				/*
				const prog = ref.scope.getProgramParent();
				const ident = prog.generateDeclaredUidIdentifier(name + '$default');
				//const binding = prog.bindings[ident.name]
				//binding.constant = true;
				//binding.constantViolations = [];
				//binding.clearValue();
				//binding.setValue(outer.get('right'));
				//console.log(binding);

				//console.log('CJS default export');
				outer.replaceWith(t.assignmentExpression(
					'=',
					t.clone(ident),
					t.cloneDeep(outer.node)
					//t.cloneDeep(outer.get('right').node)
				));

				module.exports.default = ref;
				module.defaultExport = ref;
				module.exportIdentifiers.default = ident;
				*/
			},
			[]
		);

		function namedExport(path) {
			// require.define() / require.register()
			// require.d() / require.r()
			if (t.isCallExpression(path)) {
				if (path.get('arguments').length !== 3) return;
				const nameNode = path.get('arguments.1');

				const getter = path.get('arguments.2');
				if (!t.isFunction(getter)) return;
				const v = getter.get('body.body.0.argument');

				// While we're here, convert export binding getters into arrow functions:
				// TODO: make an option?
				getter.replaceWith(t.arrowFunctionExpression([], v.node));

				return setExport(v, name, nameNode.evaluate().value);
			}

			if (!t.isMemberExpression(path)) {
				console.warn(`Not sure how to deal with ${path.node.type} on "module".\n${path.getSource()}`);
				return;
			}

			const parent = path.parentPath;
			if (!t.isAssignmentExpression(parent)) {
				console.warn(`Expected exports[] assignment, but got ${parent.node.type}.\n${parent.getSource()}`);
				return;
			}

			const property = getName(path.get('property'));
			if (!property) {
				console.warn(`Dynamic exports are not supported.\n${path.getSource()}`);
				return;
			}

			if (property === '__esModule') {
				module.harmony = true;
			}

			setExport(parent, name, property);
		}

		// Expose an export on the module and create a hoisted identifier
		function setExport(parent, moduleName, exportName) {
			const prog = parent.scope.getProgramParent();
			const ident = prog.generateDeclaredUidIdentifier('_' + moduleName + '$' + exportName);
			parent.replaceWith(t.assignmentExpression('=', t.clone(ident), t.clone(parent.node)));

			//parent.scope.crawl();
			module.exports[exportName] = parent;
			module.exportIdentifiers[exportName] = ident;
			if (exportName === 'default') module.defaultExport = parent;
		}

		reduceReferences(
			exportsObj,
			(refs, ref) => {
				namedExport(ref.parentPath);
			},
			[]
		);

		factory.scope.crawl();

		reduceReferences(requireObj, (refs, ref) => {
			const parent = ref.parentPath;
			if (t.isMemberExpression(parent)) {
				const prop = getName(parent.get('property'));
				if (/^(r|d|register|define)$/.test(prop)) return;

				/**
				 * @todo Things still to account for:
				 * `require.p` (runtime `__webpack_public_path__` - safely ignored?)
				 * `require.n(x)` (don't recall what it is)
				 * `require.e(0)` (I believe this loads a chunk?)
				 * `require.bind(null, specifier)` (should be able to pre-evaluate if args scalar)
				 */

				console.warn(`Unexpected require.${prop} usage.\n${parent.parentPath.getSource()}`);
				return;
			}

			const outer = parent.parentPath;
			if (!t.isCallExpression(parent)) {
				console.warn(`Expected require() but found ${parent.node.type}.\n${outer.getSource()}`);
				return;
			}

			const arg = parent.get('arguments.0');
			let str;
			if (t.isLiteral(arg)) {
				str = arg.node.value;
			} else {
				const v = arg.evaluate();
				if (!v.confident) {
					console.warn(`Unexpected dynamic require().\n${outer.getSource()}`);
					return;
				}
				str = v.value;
			}

			//console.log(`require("${str}")`);
			//parent.replaceWith(t.logicalExpression(
			//  '||',
			//  t.stringLiteral('foo'),
			//  parent.node
			//));
			//parent.replaceWith(t.clone(parent.node));
			module.requires.push({
				specifier: str,
				path: parent
			});
		});

		return module;
	}

	function resolveLocalExports(module, modules) {
		for (const req of module.requires) {
			const reference = modules.get(req.specifier);
			if (reference) {
				reference.referenceModules.add(module);
				reference.references++;
			}
		}

		for (const req of module.requires) {
			const reference = modules.get(req.specifier);
			if (!reference) {
				console.log('External module reference: ', req.specifier);
				continue;
			}

			const parent = req.path.parentPath;
			if (t.isVariableDeclarator(parent) || t.isAssignmentExpression(parent)) {
				const lhs = t.isVariableDeclarator(parent) ? parent.get('id') : parent.get('left');
				// Look up exports within this bundle and inline their hosted identifiers.
				// input: const { a } = r(0); a(..)
				// output: _$a(..)
				if (t.isObjectPattern(lhs)) {
					const paths = parent.getOuterBindingIdentifierPaths();
					let deopt = false;
					for (const name in paths) {
						// `name` is actually the local identifier.
						const ident = paths[name];
						// `imported` is the export name
						const imported = ident.parent.key.name;
						const binding = ident.scope.bindings[name];
						const exported = reference.exportIdentifiers[imported];

						// TODO: when deopting, should we drop local references entirely?
						// Instead just using the destructured object since it's already there
						if (exported) {
							ident.parentPath.remove();
						} else {
							// We couldn't look up the global shared identifier for this import.
							// Fall back to `const { x } = r(0)`
							deopt = true;
							continue;
						}
						binding.referencePaths.forEach(p => {
							p.replaceWith(t.clone(exported));
							//p.scope.crawl();
							//p.scope.getProgramParent().crawl();
							//window._p = p;
							//p.scope.references[exported.name] = [p];
							//p.scope.getProgramParent().references[exported.name] = [p];
							//console.log(exported.name, p);
						});
					}
					if (!deopt) {
						req.path.getStatementParent().replaceWith(req.path.node);
						return;
					}
				}
			}

			// TODO: .default seems sloppy here. Check reference.harmony?
			const exported = reference.exportIdentifiers.default;

			if (exported) {
				req.path.replaceWith(t.sequenceExpression([t.cloneDeep(req.path.node), t.identifier(exported.name)]));

				const prog = req.path.scope.getProgramParent();
				const binding = prog.bindings[exported.name];
				if (binding) binding.reference();

				//req.path.scope.crawl();

				const decl = req.path.get('expressions.1');
				const inlined = forceEvaluate(decl);

				//const binding = decl.getBindingIdentifierPaths()[decl.node.name];

				// TODO: this is a bad idea.
				// if (inlined.confident) {
				if (inlined.confident && (inlined.value === null || typeof inlined.value !== 'object')) {
					// decl.replaceWith(template.ast('' + inlined.value));
					decl.replaceWith(template.ast(JSON.stringify(inlined.value)));
					reference.references--;
					if (reference.references === 0) {
						let factory = reference.factory;
						if (!t.isMethod(factory)) factory = factory.parentPath;
						factory.remove();
						for (let exp in reference.exportIdentifiers) {
							const ident = reference.exportIdentifiers[exp];
							const binding = prog.bindings[ident.name];
							binding.dereference();
							if (binding.references === 0) binding.path.remove();
						}
					}
					req.path.replaceWith(decl.node);
				}

				//req.path.get('expressions.0');
				//req.path.replaceWith(t.nullLiteral());
			}
		}
	}

	// Transforms Object(require().a) into destructuring:
	//   input:  var t = r(0); Object(t.a)(1)
	//   output:  var {a} = r(0); a(1);
	//
	// This works because destructuring assignment creates a local,
	// which loses context at callsites. This was what the Object(t.a)
	// was accomplishing, and thus it can be removed entirely.
	//
	// Attempts to use a matching local name if free, falling back to:
	//   var {a:_a} = r(0); _a(1);
	//
	// @todo this could be generalized into a "destructuring" reverse-compile step?
	function modernizeImports(module) {
		const resolved = new Map();
		for (const require of module.requires) {
			const parent = require.path.parentPath;
			if (t.isVariableDeclarator(parent)) {
				const lhs = [];
				const paths = parent.getOuterBindingIdentifierPaths();
				for (let name in paths) {
					const binding = paths[name].scope.bindings[name];
					if (!binding) continue;
					for (const ref of binding.referencePaths) {
						if (t.isMemberExpression(ref.parent)) {
							// Attempt to use the imported name as our local
							const imported = getName(ref.parentPath.get('property'));
							let local = resolved.get(imported);
							if (!local) {
								local = imported;
								if (!t.isValidIdentifier(local) || ref.scope.hasBinding(local)) {
									// fall back to first free _prefixed local:
									local = ref.scope.generateUid(local);
								}

								// Add to destructured assignment of the require():
								//   var t = r(0) --> var { a } = r(0)
								lhs.push(t.objectProperty(t.identifier(imported), t.identifier(local), false, imported === local));

								// reuse the same local identifier in future references
								resolved.set(imported, local);
							}

							// Object(t.a) --> a
							let p = ref.parentPath;
							if (t.isCallExpression(p.parent) && p.parent.callee.name === 'Object') {
								p = p.parentPath;
							}
							p.replaceWith(t.identifier(local));
						}
					}
				}
				parent.get('id').replaceWith(t.objectPattern(lhs));
				if (parent.parent.declarations.length === 1) {
					parent.parent.kind = 'const';
				}
				parent.scope.crawl();
			}
		}
	}

	function hoistSharedModules(module, modules) {
		for (const exported in module.exports) {
			const parent = module.exports[exported];
			let resolved = parent.get('right').resolve();
			const left = parent.get('left');
			let root, functionDecl;

			const prog = resolved.scope.getProgramParent();
			//prog.crawl();

			let innerValue = resolved;
			if (t.isAssignmentExpression(innerValue)) {
				innerValue = innerValue.get('right');
			}

			// Purity isn't enough here. We need to check that there are no scoped bindings.
			// TODO: this probably has failure cases.
			let hoist = innerValue.isPure();
			const evaluated = innerValue.evaluate();
			if (evaluated.confident) {
				// if we can evaluate it using Babel's simple evaluator, it's pure.
				// let value = evaluated.value;
				// if (typeof value === 'number') {
				// 	value = t.numericLiteral(value);
				// }
				// else if (typeof value === 'string') {
				// 	value = t.stringLiteral(value);
				// }
				// else if (typeof value === 'boolean') {
				// 	value = t.booleanLiteral(value);
				// }
				// else if (typeof value === 'undefined') {
				// 	value = resolved.scope.buildUndefinedNode();
				// }
				// else if (value === null) {
				// 	value = t.nullLiteral();
				// }
				// else {
				// 	value = template.ast(`(${JSON.stringify(value)})`);
				// }
				// innerValue.replaceWith(value);
				hoist = true;
			} else if (t.isFunction(resolved)) {
				const bindings = module.factory.get('body').scope.bindings;
				for (let i in bindings) {
					// TODO: also check binding.constViolations?
					if (bindings[i].referencePaths.some(p => resolved.isAncestor(p))) {
						hoist = false;
						break;
					}
				}
			}

			if (hoist) {
				let bindings = resolved.getOuterBindingIdentifierPaths();
				// turn function and class declarations into function expressions that can be hoisted
				if (t.isFunctionDeclaration(resolved) || t.isClassDeclaration(resolved)) {
					const n = (functionDecl = resolved.node);
					let node;
					if (t.isClassDeclaration(resolved)) {
						node = t.classExpression(n.id, n.superClass, n.body);
					} else {
						node = t.functionExpression(n.id, n.params, n.body);
						node.generator = n.generator;
						node.async = n.async;
					}
					const expr = (root = resolved.replaceWith(template.ast`var ${n.id}=${node}`)[0]);
					resolved = expr.get('declarations.0.init');
				}
				const hoisted = resolved.hoist(prog);
				if (!hoisted) {
					// hoisting failed, revert back to function declaration
					if (functionDecl) {
						root.replaceWith(functionDecl);
					}
					continue;
				}

				// if we converted a function declaration to expression to hoist, undo that now.
				let finalId = left.node;
				if (functionDecl) {
					hoisted.parentPath.scope.crawl();
					const binding = hoisted.parentPath.scope.bindings[hoisted.parent.id.name];
					//console.log(hoisted.parent.id.name, binding, hoisted.parentPath.scope.checkBlockScopedCollisions(binding));
					if (!hoisted.parentPath.scope.checkBlockScopedCollisions(binding)) {
						hoisted.parentPath.scope.rename(hoisted.parent.id.name, functionDecl.id.name);
						// console.log(binding);
						// binding.referencePaths.forEach(p => {
						//  p.replaceWith(t.identifier(functionDecl.id.name));
						// });

						// This attempts to switch back to using the function's own identifier.
						// Unfortunately, by the time this runs we've lost references to the hoisted binding.
						// TODO: figure out why the binding doesn't seem to be moved properly by hoist().

						// const n = hoisted.node;
						// const node = t.functionDeclaration(n.id, n.params, n.body);
						// node.generator = n.generator;
						// node.async = n.async;
						// hoisted.getStatementParent().replaceWith(node);
						// finalId = n.id;
					}
				}

				const ident = hoisted.parent.id;
				for (let i in bindings) {
					const binding = resolved.scope.bindings[i];
					//console.log(i, binding);
					binding.referencePaths.forEach(p => {
						binding.dereference();
						p.replaceWith(t.clone(ident));
					});
					if (!binding.references) binding.path.remove();
				}

				hoisted.parentPath.scope.crawl();
				hoisted.parentPath.scope.bindings[ident.name].referencePaths.forEach(p => {
					if (t.isAssignmentExpression(p.parent) && t.isNodesEquivalent(p.getOpposite(), left)) {
						p.parentPath.replaceWith(t.clone(finalId));
					} else {
						p.replaceWith(t.clone(finalId));
					}
				});
				// reuse the previously-hoisted binding
				hoisted.parentPath.get('id').replaceWith(t.clone(finalId));
				// remove the original unused declarator
				hoisted.parentPath.scope.getBinding(finalId.name).path.remove();

				// console.log(hoisted.parent.id)
				// const bindings = parent.get('right').getBindingIdentifierPaths();
				// for (let name in bindings) {
				// 	console.log(name);
				// 	bindings[name].scope.rename(hoisted.parent.id.name, true)
				// }

				//parent.get('right').replaceWith(hoisted);
			}
		}
	}

	function forceEvaluate(path) {
		let ret = path.evaluate();
		if (ret.deopt) {
			const resolved = forceResolve(ret.deopt);
			if (resolved && resolved !== ret.deopt) {
				return forceEvaluate(resolved);
			}
			// @todo why can't this just work in forceResolve()
			if (t.isAssignmentExpression(resolved)) {
				if (resolved.node.operator === '=') {
					return forceEvaluate(resolved.get('right'));
				}
			}
		}
		return ret;
	}

	function forceResolve(path) {
		let ret = path.resolve();
		if (!ret.node) {
			if (t.isVariableDeclarator(path)) {
				const bindings = path.getOuterBindingIdentifierPaths();
				const binding = path.scope.bindings[Object.keys(bindings)[0]];
				if (binding.constantViolations && binding.constantViolations.length === 1) {
					return forceResolve(binding.constantViolations[0]);
				}
			}
			if (t.isAssignmentExpression(path)) {
				if (path.node.operator === '=') {
					return forceResolve(path.get('right'));
				}
			}
		}
		return path;
	}

	return {
		name: 'transform-optimize-webpack',
		// pre() {
		// 	this.file.opts.generatorOpts.retainLines = false;
		// 	this.file.opts.generatorOpts.compact = false;
		// 	this.file.opts.generatorOpts.comments = false;
		// },
		visitor: {
			Program(path, state) {
				// window.path = path;
				// window.t = t;
				// window.template = template;

				const body = path.get('body').filter(t.isStatement);
				if (body.length !== 1) return;
				const root = resolveExpressionStatement(body[0]);
				if (!t.isCallExpression(root)) return;
				const callee = root.get('callee');

				// I can't remember which it is:
				const filename = path.hub.file.filename || path.hub.file.metadata.filename || '<file>';

				let hasRuntime = false;
				let isEntry = null;

				if (t.isFunction(callee)) {
					if (isWebpackBootstrap(callee)) return console.log('not a webpack bootstrap');
					hasRuntime = true;
				} else {
					if (!t.isMemberExpression(callee)) return;
					const method = getName(callee.get('property'));
					if (method !== 'push') return;
					const obj = callee.get('object');

					if (!isWebpackRegistryContext(obj)) {
						console.info(filename + ' is not a webpack bundle.');
						return;
					}
				}

				console.info(
					`${filename} is a Webpack bundle (${isEntry ? 'entry' : 'non-entry'}, ${
						hasRuntime ? 'with runtime' : 'no runtime'
					}).`
				);

				root.get('arguments').forEach(chunk => {
					// const dependencies = chunk.get('elements.0').evaluate().value;
					let modulesProps = chunk.get('elements.1') || chunk;
					// console.log(dependencies, modules);

					// console.log(chunk.node, chunk);

					const modules = new Map();
					state.set('modules', modules);

					let offset = 0;
					if (t.isCallExpression(modulesProps)) {
						// webpackJsonp.push([[0], Array(OFFSET).concat([a,b,c,d])])
						const callee = modulesProps.get('callee');
						if (
							t.isMemberExpression(callee) &&
							t.isCallExpression(callee.get('object')) &&
							getName(callee.get('object.callee')) === 'Array' &&
							getName(callee.get('property')) === 'concat'
						) {
							const args = callee.get('object.arguments');
							if (args.length !== 1 || !t.isNumericLiteral(args[0])) {
								console.error('Unknown webpackJsonp chunk format: ' + callee.getSource());
								return;
							}
							offset = args[0].node.value;

							modulesProps = modulesProps.get('arguments.0');
						} else {
							console.warn('Unknown webpackJsonp expression: ' + callee.getSource());
						}
					}

					if (t.isObjectExpression(modulesProps)) {
						// webpackJsonp.push([[0], {a,b,c,d}])
						modulesProps.get('properties').forEach(m => {
							const key = getName(m.get('key'));

							const method = t.isObjectMethod(m) ? m : m.get('value');

							const module = parseModule(key, method);
							modules.set(key, module);
						});
					} else if (t.isArrayExpression(modulesProps)) {
						// webpackJsonp.push([[0], [a,b,c,d]])
						// webpackJsonp.push([[0], Array(OFFSET).concat([a,b,c,d])])
						modulesProps.get('elements').forEach((method, index) => {
							const key = offset + index;
							if (!method.node) {
								console.warn(`Missing information for module ID ${key} (offset ${offset}). Possibly corrupted bundle.`);
								return;
							}
							const module = parseModule(key, method);
							modules.set(key, module);
						});
					}

					// <module>: function (module, exports, require) {}
					for (let module of modules.values()) {
						modernizeImports(module);
						resolveLocalExports(module, modules);
						hoistSharedModules(module, modules);
					}

					let out = {};
					modules.forEach((v, k) => {
						out[k] = v;
					});
					console.log('modules: ', out);
				});
			}
		}
	};
}
