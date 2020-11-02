/** @typedef {import('@babel/core')} babel */

/**
 * Convert transpiled Classes back into ES Classes.
 * https://astexplorer.net/#/gist/7eaa74165d1e43c15f25cc00d9cd3cd5/b2b527fbdca3ea8c8a8a17a867995544f71b7d35
 * @param {babel} api
 * @returns {babel.PluginObj}
 */
export default ({ types: t }) => {
	function isClassCallCheck(path) {
		return /call a class as a function/.test(path.getSource());
	}

	function isPossibleConstructorReturn(path) {
		return /super\(\) hasn't been called/.test(path.getSource());
	}

	function isCreateSuperHelper(path) {
		return /Reflect\.construct\(/.test(path.getSource());
	}

	// function isInheritsHelper(path) {
	// 	if (!t.isFunction(path)) return false;
	// 	const args = path.get('arguments');
	// 	if (args.length !== 2) return false;
	// 	let body = path.get('body.body').filter(b => !t.isComment(b));
	// 	if (body.length > 3) return false;
	// 	if (body.some(b => !t.isIfStatement(b) && !t.isElseStatement(b))) return false;
	// 	body = body.filter(b => b.get('body.body').length===1 && t.isUnaryExpression(b.get('body.body.0')));
	// }

	function unwrapSoleBlockExpression(path) {
		if (t.isBlockStatement(path)) {
			if (path.node.body.length !== 1) return;
			path = path.get('body.0');
		}
		if (t.isExpressionStatement(path)) path = path.get('expression');
		return path;
		//let onlyBody = path.node.body.body.length === 1 && path.get('body.body.0');
		//if (t.isExpressionStatement(onlyBody)) onlyBody = onlyBody.get('expression');
	}

	function getReturnedBindingPath(fn) {
		const ret = fn.get('body.body').find(t.isReturnStatement);
		return ret && ret.get('argument').resolve();
	}

	function isNamedIdentifier(path, name) {
		return t.isIdentifier(path, { name });
	}

	function isMemberExpression(path, obj, prop) {
		const node = 'node' in path ? path.node : path;
		return t.isMemberExpression(node) && isNamedIdentifier(node.object, obj) && isNamedIdentifier(node.property, prop);
	}

	function checkSuperCall(path, superId) {
		const callee = path.node.callee;
		//let helper;

		if (!t.isMemberExpression(callee)) return false;

		// (function(_super){function P(){_super.apply(..)}..
		const s = path.get('callee.object').resolve();

		let helper;
		if (t.isCallExpression(s) && isCreateSuperHelper(s.get('callee').resolve())) {
			helper = s.get('callee').resolve();
		} else if (!s || s.node !== superId.node) {
			return false;
		}

		const prop = callee.property;
		let args;
		let apply = false;
		//if (isNamedIdentifier(prop.node, 'apply')) args = path.get('arguments.1.elements');
		if (isNamedIdentifier(prop, 'apply')) {
			apply = true;
			args = [path.get('arguments.1')];
		} else if (isNamedIdentifier(prop, 'call')) {
			args = path.get('arguments.0').getAllNextSiblings();
		} else {
			return false;
		}
		return { apply, args, helper };
	}

	function processConstructor(path, state) {
		const fn = path.parentPath.getFunctionParent();
		if (!fn) return;
		const ret = getReturnedBindingPath(fn);
		if (!ret) return;
		//if (!t.isNodesEquivalent(ret.node.argument, path.node.id)) {
		if (!t.isNodesEquivalent(ret.node, path.node)) {
			return;
		}
		const inv = fn.parentPath;

		if (!inv.isCallExpression()) return;
		//console.log(path.node.id, ret && ret.node.argument);

		let members = [];

		// can be overwritten by _createSuper() call
		let reflectConstructedSuper;

		const superClassInternal = fn.get('params.0');

		fn.get('body.body').forEach(p => {
			if (p.isExpressionStatement()) p = p.get('expression');

			if (p.isAssignmentExpression()) {
				const lhs = p.get('left');
				if (lhs.isMemberExpression() && lhs.get('object').resolve().node === path.node) {
					const id = t.clone(lhs.node.property);
					const value = p.node.right;
					if (t.isFunction(value)) {
						const method = t.classMethod('method', id, value.params, value.body, lhs.node.computed, true);
						method.async = value.async;
						method.generator = value.generator;
						members.push(method);
					} else {
						const prop = t.classProperty(id, value, null, null, lhs.node.computed, true);
						members.push(prop);
					}
				}
			}

			if (p.isVariableDeclaration() && isCreateSuperHelper(p.get('declarations.0.init.callee').resolve())) {
				reflectConstructedSuper = p.get('declarations.0.id');
				//reflectConstructedSuper.remove();
				return;
			}

			if (!p.isCallExpression()) return;
			const args = p.get('arguments');
			if (args.length < 2) return;
			if (!t.isNodesEquivalent(args[0].node, path.node.id)) return;

			if (superClassInternal && args.length === 2 && t.isNodesEquivalent(args[1].node, superClassInternal.node)) {
				const helper = p.get('callee').resolve();
				if (t.isFunction(helper)) {
					state.helpers.add(helper);
					p.remove();
				}
				return;
			}

			// @TODO: 3 args is (ctor, proto, statics)
			if (args.length !== 2) return;
			const descs = args[1];
			if (!descs.isArrayExpression()) return;
			const allDescs = descs.get('elements').every(desc => {
				if (!desc.isObjectExpression()) return false;
				let props = {};
				for (const prop of desc.node.properties) {
					if (prop.method || prop.computed) return false;
					props[prop.key.name] = prop.value;
				}
				if (!t.isStringLiteral(props.key)) return false;
				const mk = (type, value) => {
					const m = t.classMethod(
						type,
						t.identifier(props.key.value),
						value.params,
						value.body,
						false, // no computed methods for now
						false // TODO: statics are a 3rd arg to _createClass()
					);
					m.async = props.value.async;
					m.generator = props.value.generator;
					members.push(m);
				};
				if (props.value) mk('method', props.value);
				if (props.get) mk('get', props.get);
				if (props.set) mk('set', props.set);
				return true;
			});
			if (!allDescs) return;
			const helper = p.get('callee').resolve();
			if (helper && /\.enumerable[\s\S]+\.prototype/.test(helper.getSource())) {
				state.helpers.add(helper);
				// also add any init alias (var X = (()=>()=>y)())
				const binding = p.scope.getBinding(p.node.callee.name);
				binding.dereference();
				state.helpers.add(binding.path);
			} else if (helper) {
				//console.log(p.node.callee);
				const binding = p.scope.getBinding(p.node.callee.name);
				binding.dereference();
				state.helpers.add(binding.path);
			}
		});

		let superClass = inv.get('arguments.0');
		// Special-case: remove _extendableBuiltIn() helper
		if (superClass.isCallExpression()) {
			const callee = superClass.get('callee').resolve();
			if (callee && callee.isFunction()) {
				const proxyCtor = getReturnedBindingPath(callee);
				const b = proxyCtor.scope.getBinding(proxyCtor.node.id.name);
				const hasProto = b.referencePaths.some(
					p => t.isCallExpression(p.parent) && isMemberExpression(p.parent.callee, 'Object', 'setPrototypeOf')
				);
				if (hasProto && proxyCtor && proxyCtor.isFunction()) {
					const ret = getReturnedBindingPath(proxyCtor);
					if (ret && ret.isCallExpression() && isMemberExpression(ret.node.callee, 'Reflect', 'construct')) {
						superClass = superClass.get('arguments.0');
						state.helpers.add(callee);
					}
				}
			}
		}

		path.get('body.body').every(p => {
			if (p.isExpressionStatement()) p = p.get('expression');
			let rep = p;
			if (t.isReturnStatement(rep)) {
				rep = rep.get('argument');
			}
			if (t.isLogicalExpression(rep) && rep.node.operator === '||' && t.isThisExpression(rep.node.right)) {
				rep = rep.get('left');
			}
			if (!t.isCallExpression(rep)) return true;
			const sup = checkSuperCall(rep, superClassInternal);
			if (sup.helper) {
				// super call used _createSuper() helper, mark it for removal:
				state.helpers.add(sup.helper);
			}
			// not a super call
			if (!sup) return true;
			if (sup.apply && sup.args.length === 1 && isNamedIdentifier(sup.args[0].node, 'arguments')) {
				sup.args = [];
			}

			let before = [],
				after = [];
			let preserveName, kind;
			if (t.isVariableDeclarator(rep.parent) && rep.parentKey === 'init') {
				const id = rep.parentPath.get('id');
				// const _self = _super.apply(this,arguments); ... return _self;
				for (const refPath of id.scope.getBinding(id.node.name).referencePaths) {
					const fn = refPath.getFunctionParent().node;
					if (fn !== path.node) {
						preserveName = id.node.name;
					} else if (t.isReturnStatement(refPath.parent)) {
						refPath.parentPath.remove();
					} else {
						refPath.replaceWith(t.thisExpression());
					}
				}
				// rename _self to this
				//id.scope.rename(id.node.name, 'this');
				rep = rep.parentPath;
				if (t.isVariableDeclaration(rep.parent)) {
					kind = rep.parent.kind;
					const prev = rep.getAllPrevSiblings();
					if (prev.length) before.push(t.variableDeclaration(kind, before));
					const next = rep.getAllNextSiblings();
					if (next.length) after.push(t.variableDeclaration(kind, after));
					rep = rep.parentPath;
				}
			}
			if (preserveName) {
				after.unshift(
					t.variableDeclaration(kind || 'var', [t.variableDeclarator(t.identifier(preserveName), t.thisExpression())])
				);
			}
			p.replaceWithMultiple([
				...before,
				t.expressionStatement(t.callExpression(t.identifier('super'), sup.args.map(a => a.node))),
				...after
			]);
		});

		const id = t.clone(path.node.id);
		const superD = superClass && superClass.node;
		const params = [];
		for (let i = path.node.params.length; i--; ) {
			params[i] = path.node.params[i] || path.scope.generateUidIdentifier();
		}
		const loneBody = unwrapSoleBlockExpression(path.get('body'));
		if (
			t.isCallExpression(loneBody) &&
			isNamedIdentifier(loneBody.node.callee, 'super') &&
			loneBody.node.arguments.length === 0
		) {
			// omit empty constructor
		} else {
			members.unshift(t.classMethod('constructor', t.identifier('constructor'), params, path.node.body));
		}
		const body = t.classBody(members);

		if (t.isVariableDeclarator(inv.parent) && t.isNodesEquivalent(inv.parent.id, id)) {
			if (inv.parentPath.parent.declarations.length === 1) {
				inv.parentPath.parentPath.replaceWith(t.classDeclaration(id, superD, body));
				return;
			}
		}

		inv.replaceWith(t.classExpression(id, superD, body));
	}

	function referencesArguments(path) {
		let refs = false;
		path.visit({
			Identifier(p) {
				if ((refs = t.isIdentifier(p, { name: 'arguments' }))) {
					path.stop();
				}
			}
		});
		return refs;
	}

	function isOptionalParamCheck(path, key) {
		const parent = path.parentPath;
		let fallback;
		if (parent.isConditionalExpression()) {
			if (path.parentKey === 'consequent') {
				fallback = parent.get('alternate');
			} else if (path.parentKey === 'alternate') {
				fallback = parent.get('consequent');
			} else {
				return;
			}
			if (referencesArguments(fallback)) {
				console.warn('Bailout: fallback references arguments[]');
				return false;
			}
			const decl = path.findParent(p => p.isVariableDeclarator());
			const walk = p => {
				let other;
				switch (p.node.type) {
					case 'LogicalExpression':
						if (p.node.operator === '&&') {
							return walk(p.get('left')) && walk(p.get('right'));
						} else if (p.node.operator === '||') {
							return walk(p.get('left')) || walk(p.get('right'));
						}
						console.warn(`Unknown operator ${p.node.operator}`);
						throw 5;
					case 'BinaryExpression':
						if (isMemberExpression(p.node.left, 'arguments', 'length')) {
							const v = p.get('right').evaluate().value;
							return p.node.operator == '>' ? v >= key : v < key;
						}
						if (isMemberExpression(p.node.right, 'arguments', 'length')) {
							const v = p.get('left').evaluate().value;
							return p.node.operator == '>' ? v < key : v >= key;
						}
						if (isNamedIdentifier(p.node.left, 'undefined')) other = p.get('right');
						else if (isNamedIdentifier(p.node.right, 'undefined')) other = p.get('left');
						if (!other) {
							console.log(p.getSource());
							throw 2;
						} else if (p.node.operator[0] === '!') {
							return walk(other);
						} else if (p.node.operator[0] === '=') {
							return !walk(other);
						}
						throw 4;
					case 'MemberExpression': {
						if (!isNamedIdentifier(p.node.object, 'arguments')) throw 6;
						const value = p.get('property').evaluate().value;
						if (value === 'length') return true;
						if (value === key) return true;
						throw 7;
					}
					case 'Identifier':
						if (p.node.name === 'arguments') return true;
						throw 3;
					case 'NumericLiteral':
						return p.node.value === key;
					default:
						throw -1;
				}
			};
			let test = parent.get('test');
			let polarity;
			try {
				polarity = walk(test);
			} catch (e) {
				console.log(`bailout ${parent.parentPath.get('id').getSource()} ${key}: ${e}`);
			}
			if (typeof polarity === 'boolean') {
				return { decl, fallback: fallback && fallback.node };
			}
		}
	}

	return {
		name: 'transform-infer-classes',
		visitor: {
			Identifier(path) {
				if (isNamedIdentifier(path.node, 'arguments') && t.isMemberExpression(path.parent)) {
					const fn = path.getFunctionParent();
					const parent = path.parentPath;
					let decl = parent.parentPath;
					let fallback;
					const key = parent.get('property').evaluate().value;
					if (key === 'length') return;
					if (!t.isVariableDeclarator(decl)) {
						const r = isOptionalParamCheck(parent, key);
						if (!r) {
							return false;
						}
						({ decl, fallback } = r);
					}
					if (t.isVariableDeclarator(decl)) {
						const name = t.clone(decl.node.id);
						const params = fn.get('params');
						let param = name;
						if (fallback) {
							param = t.assignmentPattern(param, fallback);
						}
						if (key === params.length) {
							fn.pushContainer('params', param);
						} else {
							fn.node.params[key] = param;
						}
						decl.remove();
					}
					return;
				}

				if (!isNamedIdentifier(path.node, 'exports') || path.scope.getBinding('exports')) return;
				let parent = path.parentPath;

				if (parent && parent.isCallExpression() && path.parentKey === 'arguments') {
					if (isMemberExpression(parent.node.callee, 'Object', 'defineProperty')) {
						const key = parent.get('arguments.1');
						if (!t.isStringLiteral(key)) throw Error(`Unknown defineProperty call: ${parent.getSource}`);
						const desc = parent.get('arguments.2.properties').find(p => isNamedIdentifier(p.node.key, 'get'));
						if (!desc) return;
						const ret = getReturnedBindingPath(desc.get('value'));
						if (t.isExpressionStatement(parent.parent)) {
							parent = parent.parentPath;
						}
						console.log('TODO: implement definePropery() reconstruction', ret);
						// parent.replaceWith(t.exportNamedDeclaration(
						// 	t.variableDeclaration(
						// 		'let',
						// 		[
						// 			t.variableDeclarator(
						// 				t.identifier(key.node.value),
						// 				ret.node
						// 			)
						// 		]
						// 	)
						// ));
					}
					return;
				}

				//if (!t.isMemberExpression(parent) || path.parentKey!=='object' || !t.isIdentifier(parent.node.property)) return;
				if (parent.isMemberExpression() && path.parentKey === 'object' && t.isIdentifier(parent.node.property)) {
					const assign = parent.parentPath;

					// const ident = parent.node.property.name;
					// if (assign.node && t.isAssignmentExpression(assign)) {
					// 	if (!t.isAssignmentExpression(assign.node.right)) {
					// 		console.log(assign.parentPath.parent)
					// 		if (t.isVariableDeclarator(assign.parent) && isNamedIdentifier(assign.parent.id, ident)) {
					// 			const parent = assign.parentPath;
					// 			parent.skip();
					// 			parent.replaceWith(t.exportNamedDeclaration(
					// 				assign.parentPath.parent
					// 			));
					// 		}
					// 		return;
					// 	}
					// }

					// I don't remember what this was for
					let a = assign;
					while (a.node && a.isAssignmentExpression()) {
						a = a.get('right');
						if (isNamedIdentifier(a.node, 'undefined')) {
							let parent = a.parentPath;
							if (parent && parent.isExpressionStatement()) {
								parent.remove();
							} else if (parent && parent.isAssignmentExpression()) {
								assign.replaceWith(a.node.right);
							} else {
								assign.remove();
							}
							return;
						}
						//path.remove();
					}
				}
			},
			Program: {
				enter(path, state) {
					state.helpers = new Set();
				},
				exit(path, state) {
					let bindings = path.scope.bindings;
					function getExternalReferences(binding) {
						const parent = binding.path.node;
						return binding.referencePaths.filter(p => {
							return p.node !== parent && !p.findParent(p => p.node === parent || p.removed);
						});
					}
					function removeHelper(h) {
						// we may have removed this helper already via cascade
						if (h.removed) return;
						const idents = h.getOuterBindingIdentifierPaths();
						for (let name in idents) {
							h.scope.removeBinding(name);
						}
						// if (!h.find(p => p.removed)) {
						// remove() fails if the container is falsey, but there's no nice way to check for that case.
						try {
							h.remove();
						} catch (e) {}
						for (const name in bindings) {
							const b = path.scope.getBinding(name);
							if (!b) continue;
							const refs = getExternalReferences(b);
							// remove references originating from this helper:
							let remaining = refs.length;
							for (const ref of refs) {
								if (ref.isDescendant(h)) {
									b.dereference();
									remaining--;
								}
							}
							// if there are no references, remove that helper too:
							if (!remaining) removeHelper(b.path);
						}
					}
					state.helpers.forEach(removeHelper);
				}
			},
			CallExpression(path, state) {
				const callee = path.get('callee').resolve();
				if (isPossibleConstructorReturn(callee)) {
					state.helpers.add(callee);
					let p = path.parentPath;
					if (t.isVariableDeclarator(p)) {
						const ident = p.get('id').getOuterBindingIdentifierPaths();
						const id = ident[Object.keys(ident)[0]];
						const b = id.scope.getBinding(id.node.name);
						b.referencePaths.forEach(rp => {
							const rpp = rp.parentPath;
							if (rpp && rpp.isReturnStatement()) rpp.remove();
						});
						id.scope.rename(id.node.name, 'this');
						p = p.parentPath;
						p.replaceWith(
							t.callExpression(t.identifier('super'), path.node.arguments[1].arguments.slice(1).map(t.clone))
						);
					}
					return;
				}
				if (isClassCallCheck(callee)) {
					state.helpers.add(callee);
					const ctor = path.getFunctionParent();
					path.remove();
					processConstructor(ctor, state);
					return;
				}

				// structural inference based on super call
				let ctorParent = path.getFunctionParent();
				if (!ctorParent) return;

				let outer = ctorParent.parentPath;
				if (t.isBlockStatement(outer)) outer = outer.parentPath;
				if (!t.isFunctionExpression(outer)) return;

				// (function(){function P(){}return P;})()
				const ret = getReturnedBindingPath(outer);
				if (!ret) return;
				if (!t.isNodesEquivalent(ctorParent.node, ret.node)) return;
				if (!t.isCallExpression(outer.parent)) return;

				const sup = checkSuperCall(path, outer.get('params.0'));
				if (!sup) return;

				/*
				if (sup.apply && sup.args.length === 1 && isNamedIdentifier(sup.args[0].node, 'arguments')) {
					sup.args = [];
				}
				let rep = path;
				if (t.isLogicalExpression(rep.parent) && rep.parent.operator === '||' && t.isThisExpression(rep.parent.right)) {
					rep = rep.parentPath;
				}
				if (t.isReturnStatement(rep.parent)) {
					rep = rep.parentPath;
				}
				let before = [],
					after = [];
				let preserveName, kind;
				if (t.isVariableDeclarator(rep.parent) && rep.parentKey === 'init') {
					const id = rep.parentPath.get('id');
					// const _self = _super.apply(this,arguments); ... return _self;
					for (const p of id.scope.getBinding(id.node.name).referencePaths) {
						const fn = p.getFunctionParent().node;
						if (fn !== ctorParent.node) {
							preserveName = id.node.name;
						} else if (t.isReturnStatement(p.parent)) {
							p.parentPath.remove();
						} else {
							p.replaceWith(t.thisExpression());
						}
					}
					// rename _self to this
					//id.scope.rename(id.node.name, 'this');
					rep = rep.parentPath;
					if (t.isVariableDeclaration(rep.parent)) {
						kind = rep.parent.kind;
						const prev = rep.getAllPrevSiblings();
						if (prev.length) before.push(t.variableDeclaration(kind, before));
						const next = rep.getAllNextSiblings();
						if (next.length) after.push(t.variableDeclaration(kind, after));
						rep = rep.parentPath;
					}
				}
				if (preserveName) {
					after.unshift(
						t.variableDeclaration(kind || 'var', [t.variableDeclarator(t.identifier(preserveName), t.thisExpression())])
					);
				}
				rep.replaceWithMultiple([
					...before,
					t.expressionStatement(t.callExpression(t.identifier('super'), sup.args.map(a => a.node))),
					...after
				]);
                */

				processConstructor(ctorParent, state);
			},
			BinaryExpression(path) {
				if (path.node.operator === 'instanceof') {
					let outcome = true;
					let root = path.parentPath;
					if (root && root.isUnaryExpression() && root.node.operator === '!') {
						outcome = false;
						root = root.parentPath;
					}
					if (!isNamedIdentifier(path.node.left, 'this')) return;
					const fn = path.getFunctionParent();
					if (!fn) return;
					if (!t.nodesIsEquivalent(path.node.right, fn.node.id)) return;
					if (outcome) {
						root.replaceWith(root.node.block);
					} else {
						root.remove();
					}
				}
			}
		}
	};
};
