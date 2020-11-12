/** @typedef {import('@babel/core')} babel */

/**
 * Remove polyfills
 */

const POLYFILLS = [
	'Object.assign',
	'Object.create',
	'Object.define',
	'Object.hasOwnProperty',
	'Object.getOwnProperties',
	'Object.setPrototypeOf',
	'Object.getPrototypeOf',
	'Object.getOwnPropertyDescriptor',
	'Object.getOwnPropertyDescriptors',
	'Object.getOwnPropertySymbols',
	'Object.keys',
	'Array.from',
	'Symbol',
	'Symbol.for',
	'WeakMap',
	'WeakSet',
	'Map',
	'Set',
	'Promise',
	'Promise.all',
	'Promise.resolve',
	'Promise.reject',
	'fetch',
	'Headers',
	'Response',
	'Request',
	'FormData',
	'ArrayBuffer',
	'FileReader',
	'URLSearchParams',
	'URL',
	'JSON',
	'JSON.parse',
	'JSON.stringify',
	'Function.toString',
	'setTimeout',
	'clearTimeout',
	'setInterval',
	'clearInterval',
	'Number.isFinite',
	'Math',
	'Math.max',
	'Math.min',
	'Math.ceil',
	'Math.floor'
];

const IS_BROWSER = true;
if (IS_BROWSER) {
	POLYFILLS.push(
		//'globalThis',
		'window',
		'self',
		'Math'
	);
}

/**
 * @param {babel} api
 * @returns {babel.PluginObj}
 */
export default function transformRemovePolyfills({ types: t, template }) {
	// window.t = t;

	// function isNamedIdentifier(path, name) {
	// 	path = path.resolve();
	// 	return t.isIdentifier(path) && path.node.name === name;
	// }

	function getName(path) {
		if (t.isMemberExpression(path)) {
			return getName(path.get('object')) + '.' + getName(path.get('property'));
		}
		path = path.resolve();
		if (!path.node) return;
		//if (t.isIdentifier(path)) return path.node.name;
		//if (t.isIdentifier(path)) return path.node.name;
		if (!t.isIdentifier(path)) return;
		//return;

		const scalar = path.evaluate();
		if (scalar.confident) {
			if (typeof scalar.value === 'object') {
				console.error('Path evaluated to a non-primitive value: ', scalar.value);
			}
			return String(scalar.value);
		}

		return path.node.name;
	}

	// function stripGlobalPrefix(path) {
	// 	if (t.isMemberExpression(path)) {
	// 		const obj = path.get('object').resolve();
	// 		if (t.isIdentifier(obj) && /^(window|global|self|globalThis)$/.test(obj.name)) {
	// 			path = path.get('property');
	// 		}
	// 	}
	// 	return path;
	// }

	function isPolyfillIdentifier(path, polyfills, ignoreScope) {
		if (t.isMemberExpression(path)) {
			let obj = path.get('object').resolve();
			if (
				t.isIdentifier(obj) &&
				/^(window|global|self|globalThis)$/.test(obj.node.name) &&
				!obj.scope.hasBinding(obj.node.name, true)
			) {
				return isPolyfillIdentifier(path.get('property'), polyfills, true);
			}
		}
		const str = getName(path);
		if (!str) return false;
		for (let pattern of polyfills) {
			if (str.match(pattern)) {
				const root = (t.isMemberExpression(path) ? path.get('object') : path).resolve();
				if (ignoreScope !== false && root.node && root.scope.hasBinding(root.node.name, true)) {
					console.warn('Tainted polyfill identifier ' + str);
					return false;
				}
				return str;
			}
		}
		return false;
	}

	//function isDottedProperty(path, pattern) {
	//  const [object, property] = pattern.split('.');
	//  return t.isMemberExpression(path) &&
	//    isNamedIdentifier(path.get('object'), object) &&
	//    isNamedIdentifier(path.get('property'), property);
	//}

	function handlePolyfillAssignment(right) {
		if (!t.isLogicalExpression(right) || right.node.operator !== '||') return;

		const api = right.get('left');
		// const polyfill = right.get('right');

		//if (isDottedProperty(api, 'Object.assign')) {
		//if ((getName(api) || '').match(/^Object\.defineProperty/)) {
		//  console.log(api);
		//}
		if (isPolyfillIdentifier(api, POLYFILLS)) {
			//console.log('Object.assign');

			// remove the polyfill fallback
			right.replaceWith(t.clone(api.node));

			return api.node;
		}
	}

	function replaceHelperWithNative(path, native) {
		const helper = path.resolve();
		//const binding = path.scope.bindings[helper.node.name];
		const binding = helper.scope.getBinding(helper.node.name);
		// turn all helper references back into the original,
		// then delete the helper altogether.
		if (!binding) {
			console.warn('Unknown binding: ', helper);
			return;
		}
		binding.referencePaths.forEach(p => {
			if (typeof native === 'function') {
				native(p);
			} else {
				if (t.isExportSpecifier(p.parent)) return;
				binding.dereference();
				p.replaceWith(t.clone(native));
				//cascadeReplacement(p, t.clone(native));
			}
		});
		if (!binding.references) {
			binding.path.remove();
		} else {
			console.log(`Failed to remove ${binding.identifier.name} due: ${binding.references} unremovable bindings`);
		}
	}

	// Replace a path with a value.
	// If the path is a condition, cascade its now static value to the parent.
	function cascadeReplacement(path, value) {
		//console.log('CASCADE', path.node.type, path.getSource());
		const parent = path.parentPath;
		const isFalsy =
			(t.isBooleanLiteral(value) && !value.value) ||
			t.isNullLiteral(value) ||
			(t.isIdentifier(value) && value.name === 'undefined') ||
			(t.isUnaryExpression(value) && value.operator === 'void');
		const truthy = isFalsy ? false : value.evaluateTruthy ? value.evaluateTruthy() : true;
		//console.log('CASCADE', path.toString());
		if (t.isLogicalExpression(parent)) {
			if (path.key === 'right') {
				// we can't reduce this any further.
				return parent;
			}
			let replacement;
			//console.log('LOGIC', parent.getSource());
			switch (parent.node.operator) {
				case '&&':
					// true && truthy --> truthy
					replacement = truthy ? t.clone(path.getOpposite().node) : t.booleanLiteral(false);
					break;
				case '||':
					// truthy || other --> truthy
					// falsy || other --> other
					replacement = t.clone(truthy ? path.node : path.getOpposite().node);
					break;
				default:
					console.error('Unknown operator ' + parent.node.operator, parent.getSource());
			}
			//const replacement = truthy ? t.clone(path.getOpposite().node) : t.booleanLiteral(false);
			parent.replaceWith(replacement);
			//return cascadeReplacement(parent.parentPath, replacement) || parent;
			return cascadeReplacement(parent, replacement) || parent;
		}
		if (t.isConditionalExpression(parent)) {
			//console.log('CONDITION', truthy, value, parent.getSource());
			const selected = truthy ? 'consequent' : 'alternate';
			const replacement = t.clone(parent.get(selected).node);
			// this is a workaround to avoid traversal into the removed node.
			// I would have thought replaceWith() would imply this, but it does not.
			parent.get(getOtherKey(selected)).replaceWith(t.nullLiteral());
			parent.replaceWith(replacement);
			//return cascadeReplacement(parent.parentPath, replacement) || parent;
			return cascadeReplacement(parent, replacement) || parent;
		}
		if (t.isUnaryExpression(parent)) {
			if (parent.node.prefix && parent.node.operator === 'typeof') {
				if (isPolyfillIdentifier(path, POLYFILLS)) {
					console.log('unary --> polyfill', parent.node);
					if (t.isBinaryExpression(parent.parentPath)) {
						const other = parent.getOpposite().evaluate();
						if (other.confident) {
							const negate = parent.parent.operator[0] === '!';
							let truthy = other.value !== 'undefined';
							if (negate) truthy = !truthy;
							const replacement = t.booleanLiteral(truthy);
							// replace the comparison with its constant value:
							parent.parentPath.replaceWith(replacement);
							return cascadeReplacement(parent.parentPath, replacement);
						}
					}
				}
			}
		}
		if (t.isCallExpression(parent)) {
			const fn = parent.get('callee').resolve();
			//console.log(parent.getSource(), parent.node, fn, path.node);
			if (t.isFunction(fn)) {
				const out = attemptInlineEvaluation(parent);
				//const out = evaluateFunction(fn, parent.get('arguments'));
				if (out && out.confident) {
					parent.replaceWith(out.value);
				}
				//console.log('out: ', out);
			}
		}
		if (t.isReturnStatement(parent)) {
			console.log('RETURN');
			console.log(parent.node.argument);
		}

		// TODO: move to start?
		if (t.isIdentifier(path)) {
			//console.log(parent.node);
			if (isPolyfillIdentifier(path, POLYFILLS)) {
				const replacement = path.resolve().node;
				path.replaceWith(replacement);
				return cascadeReplacement(path.parentPath, replacement);
			}
			//else {
			//  return cascadeReplacement(path.parentPath, path.node);
			//}
		}
		//return path;

		/*
	  if (t.isReturnStatement(parent) && isSingularFunctionBody(parent.parentPath)) {
		//window.path = path;
		const fn = window.fn = path.getFunctionParent();
		const id = getFunctionIdentifier(fn);
		console.log(path.node);
		replaceHelperWithNative(id, p => {
		  if (t.isCallExpression(p.parentPath)) {
			p.parentPath.replaceWith(
			  t.clone(path.node)
			);
		  }
		});
	  }
	  if (isSingularFunctionBody(parent)) {

	  }
	  */
	}

	function attemptInlineEvaluation(path, replacement) {
		const old = path.node;
		const callee = path.get('callee').resolve();
		if (!t.isFunction(callee)) return { confident: false };

		// TODO: assert isSimpleFunction here

		/*
	  path.replaceWith(
		t.callExpression(
		  t.arrowFunctionExpression([], t.blockStatement(
			path.node.arguments.map((arg, i) => t.variableDeclaration('let', [
			  t.variableDeclarator(t.clone(callee.node.params[i]), t.clone(arg))
			])).concat(callee.node.body.body))),
		  []
		)
	  );
	  */
		const argValues = path.node.arguments;
		path.replaceWith(t.callExpression(t.arrowFunctionExpression(callee.node.params, callee.node.body), []));
		//path.get('callee').unwrapFunctionEnvironment();
		//console.log('bindings: ', path.get('callee').scope.getAllBindingsOfKind('param'));
		const params = path.get('callee.params');
		for (let index = params.length; index--; ) {
			const param = params[index];
			const binding = param.scope.getBinding(param.node.name);
			//binding.dereference();
			binding.referencePaths.forEach(p => {
				//binding.dereference();
				p.replaceWith(argValues[index] ? t.clone(argValues[index]) : p.scope.buildUndefinedNode());
			});
			//if (!binding.referenced) {
			param.scope.removeBinding(binding.name);
			//}
			// console.log('binding', binding);
			param.remove();
		}
		path.get('callee.body').traverse(visitor);
		//path.skip();

		//const bindings = path.get('callee.body').scope.getAllBindings();
		//for (const binding in bindings) {
		//  console.log(bindings[binding]);
		//  return { confident: false };
		//}

		//console.log(path.scope);

		let toReturn;
		const ret = path.get('callee.body.body').find(p => t.isReturnStatement(p));
		const scope = path.get('callee.body').scope;
		scope.crawl();
		// window.scope = scope;
		//const impliedGlobals = scope.getProgramParent().globals;
		//console.log(scope.getAllBindings(), Object.keys(scope.globals), scope.hasGlobal('y'));
		//console.log(path.get('callee.body.body').length, Object.keys(scope.bindings), Object.keys(scope.globals));
		if (
			path.get('callee.body.body').length <= 1 &&
			Object.keys(scope.bindings).length === 0 &&
			Object.keys(scope.globals).length === 0
		) {
			//path.replaceWith(ret.node.argument);
			toReturn = ret.get('argument');
			//console.log('ret', ret.node.argument);
		}

		// window.path = path;
		//cascadeReplacement();
		const evaled = path.get('callee.body').evaluate();

		path.replaceWith(old);
		if (!evaled.confident) {
			evaled.confident = !!toReturn;
			evaled.value = toReturn;
		}

		if (evaled.confident) {
			// if this was the last usage of the intermediary function, remove it.
			// TODO: better to invoke callee.scope.crawl() here?
			const calleeBinding = callee.scope.getBinding(getFunctionIdentifier(callee));
			if (calleeBinding) {
				calleeBinding.dereference();
				if (!calleeBinding.referenced) {
					callee.remove();
				}
			}
			//if (calleeBinding && calleeBinding.referencePaths.length === 1) callee.remove();
		}

		return evaled;
	}

	/*
	function evaluateFunction(fn, args) {
	  //console.log(fn.node, '(', ...args.map(n=>n.node), ')');
	  window.path = fn;
	  const processedArgs = args.every(arg => {
		const res = arg.resolve();
		window.scope = res.scope;
		if (t.isIdentifier(res) && !res.scope.hasBinding(res.node.name) && isPolyfillIdentifier(res, POLYFILLS)) {
		  return true;
		}
		return false;
		//console.log(res.scope.getBinding(res.node.name));
	  });
	  console.log({ argsAreGlobals })
	  //if (isSingularFunctionBody(parent)) {
	  //
	  //}
	}
	*/

	const keys = [['alternate', 'consequent'], ['left', 'right']];
	function getOtherKey(key) {
		for (const pair of keys) {
			if (pair[0] === key) return pair[1];
			if (pair[1] === key) return pair[0];
		}
	}

	/*
	function dissolveHelper(path) {
		if (!t.isFunction(path)) return;
		const ident = getFunctionIdentifier(path);
		if (!ident || !ident.isBindingIdentifier()) return;
		if (!isSingularFunctionBody(path)) return;
		let bindings = [];
		path.get('params').forEach((p, i) => {
			bindings[i] = p.scope.bindings[p.node.name].referencePaths;
		});
		let ret = getSoleFunctionBody(path);
		if (t.isReturnStatement(ret)) {
			ret = ret.get('argument');
		}
		replaceHelperWithNative(ident, p => {
			if (t.isCallExpression(p.parent)) {
				for (let i = 0; i < bindings.length; i++) {
					for (const b of bindings[i]) {
						b.replaceWith(p.parent.arguments[i]);
					}
				}
				p.parentPath.replaceWith(t.clone(ret.node));
			}
		});

		// const parent = path.parentPath;
		// let impl;
		// if (t.isAssignmentExpression(parent)) impl = parent.get('right');
		// else if (t.isVariableDeclarator(parent)) impl = parent.get('init');
		// else return;
		// if (t.isFunction(impl) && isSingularFunctionBody(impl)) {
		// 	//window.path = path;
		// 	const fn = window.fn = path.getFunctionParent();
		// 	const id = getFunctionIdentifier(fn);
		// 	console.log(path.node);
		// 	replaceHelperWithNative(id, p => {
		// 	if (t.isCallExpression(p.parentPath)) {
		// 		p.parentPath.replaceWith(
		// 		t.clone(path.node)
		// 		);
		// 	}
		// 	});
		// }
	}

	// Is the given function a single expression with simple parameters?
	function isSingularFunctionBody(path) {
		if (t.isBlockStatement(path)) return isSingularFunctionBody(parent.parentPath);
		if (!t.isFunction(path)) return false;
		// either an arrow function with no block body, or a block body of length 1
		return isSimpleProxyFunction(path) && (!t.isBlock(path.node.body) || path.node.body.body.length === 1);
	}

	function isSimpleProxyFunction(path) {
		return (
			path.node.generator === false &&
			path.node.async === false &&
			!path.get('params').some(p => t.isPattern(p) || t.isRestElement(p))
		);
	}

	// returns the only expression in a function
	function getSoleFunctionBody(path) {
		const body = path.get('body');
		if (!t.isBlock(body)) return body;
		return body.get('body.0');
	}

	function handleEval(str) {
		return template(str)().evaluate();
	}
	*/

	function getFunctionIdentifier(path) {
		const id = path.get('id');
		if (id && id.node) return id;
		const parent = path.parentPath;
		if (t.isFunction(parent)) {
			return getFunctionIdentifier(parent);
		}
		if (t.isVariableDeclarator(parent)) {
			return parent.get('id');
		}
	}

	function handleFunctionConstructor(args) {
		args = args.slice();
		const body = args.pop();
		if (!t.isStringLiteral(body.node)) return;
		const tpl = template.ast('{' + body.node.value + '}');
		return t.functionExpression(null, args, tpl);
	}

	function tryResolve(path) {
		const resolved = path.resolve();
		if (resolved.node) return resolved;
		return path;
	}

	let visitor;

	return {
		name: 'transform-remove-polyfills',
		// pre() {
		// 	this.file.opts.generatorOpts.retainLines = false;
		// 	this.file.opts.generatorOpts.compact = false;
		// 	this.file.opts.generatorOpts.comments = false;
		// },
		visitor: (visitor = {
			Identifier(path) {
				// if (isPolyfillIdentifier(path, POLYFILLS)) {
				// }
				/*
				if (IS_BROWSER) {
					let resolved = path.resolve();
					if (!resolved.node) resolved = path;
					if (resolved.node.name === 'globalThis') {
					if (resolved.scope.hasBinding('globalThis', true)) {
						return console.warn('tainted globalThis');
					}
					path.replaceWith(t.identifier('self'));
					return;
					}
				}
				*/
				/*
				const ident = path.getBindingIdentifiers()[path.node.name];
				if (ident===path.node && !path.scope.hasBinding(path.node.name, true)) {
					// this is an implied global
					const fn = path.scope; //.getFunctionParent();
					if (fn) {
					fn.addGlobal(path.node.name);
					fn.globals[path.node.name] = path.node;
					}
					//console.log(path.node.name)
				}
				*/
			},

			LogicalExpression(path) {
				const operator = path.node.operator;
				const left = path.get('left');
				const right = path.get('right');
				const polyfillGuard = isPolyfillIdentifier(left, POLYFILLS);
				let isTruthy = polyfillGuard;
				if (!isTruthy) {
					isTruthy = left.evaluateTruthy();
					if (isTruthy === undefined) return;
				}
				//if (right.getSource() === 'y') {
				//  console.log('RIGHT', isTruthy, right);
				//}
				if (isTruthy) {
					let replacement;
					if (operator === '&&') {
						replacement = right.node;
					} else if (operator === '||') {
						replacement = left.node;
					}
					if (replacement) {
						path.replaceWith(t.clone(replacement));
						//cascadeReplacement(path, replacement);
					}
				}
			},

			BinaryExpression(path) {
				const operator = path.node.operator;
				//const left = stripGlobalPrefix(path.get('left'));
				//const right = stripGlobalPrefix(path.get('right'));
				const left = path.get('left');
				const right = path.get('right');
				if (
					(t.isIdentifier(left) || t.isMemberExpression(left)) &&
					(t.isIdentifier(right) || t.isMemberExpression(right))
				) {
					const leftIdent = isPolyfillIdentifier(left, POLYFILLS);
					const rightIdent = isPolyfillIdentifier(right, POLYFILLS);
					// console.log(leftIdent, rightIdent);
					if (leftIdent && leftIdent === rightIdent) {
						if (operator === '==' || operator === '===') {
							path.replaceWith(t.booleanLiteral(true));
							return;
						}
						if (operator === '!=' || operator === '!==') {
							path.replaceWith(t.booleanLiteral(false));
							return;
						}
					}
				}
			},

			// globalThis = Function("return this")()
			CallExpression(path) {
				const callee = path.get('callee').resolve();
				if (t.isIdentifier(callee) && callee.node.name === 'Function') {
					const fn = handleFunctionConstructor(path.get('arguments'));
					if (fn) {
						path.replaceWith(fn);

						// todo: move this to CallExpression pattern. Probably shouldn't require eval?
						//if (t.isCallExpression(path.parentPath) && fn.body.body.length === 1 && t.isReturnStatement(fn.body.body[0]) && t.isThisExpression(fn.body.body[0].argument)) {
						if (
							t.isCallExpression(path.parentPath) &&
							fn.body.body.length === 1 &&
							t.isReturnStatement(fn.body.body[0]) &&
							t.isThisExpression(fn.body.body[0].argument)
						) {
							// console.log(path.parentPath.getSource());
							path.parentPath.replaceWith(t.nullLiteral());
						}
					}
				}
			},

			MemberExpression(path) {
				// BROKEN: This turns `window.x = window.x || []` into `x = x || []`, which is a reference error.
				//
				// const obj = tryResolve(path.get('object'));
				// const prop = tryResolve(path.get('property'));
				// if (/^(self|top|window|globalThis)$/.test(obj.node.name) && t.isIdentifier(prop.node)) {
				// 	const idents = obj.getOuterBindingIdentifiers();
				// 	for (let key in idents) {
				// 		const binding = obj.scope.bindings[key];
				// 		if (binding) {
				// 			binding.dereference();
				// 			if (!binding.references) binding.path.remove();
				// 		}
				// 		path.replaceWith(prop.node);
				// 	}
				// }
				/*
				if (isPolyfillIdentifier(path, POLYFILLS)) {
					//const p = stripGlobalPrefix(path);
					console.log(getName(path), obj.node.object.name, path)
					//if (p !== path) path.replaceWith(p.node);
				}
				*/
			},

			// This ends up kicking off a lot of the successful upward cascades,
			// since we can easily evaluate the type of a known available API.
			// "function" === typeof Object.assign
			UnaryExpression(path) {
				if (path.node.prefix && path.node.operator === 'typeof') {
					if (isPolyfillIdentifier(path.get('argument'), POLYFILLS)) {
						cascadeReplacement(path.get('argument'), path.get('argument').node);
					}
				}

				/*
		  if (path.node.prefix && path.node.operator === 'typeof') {
			if (isPolyfillIdentifier(path.get('argument'), POLYFILLS)) {
			  if (t.isBinaryExpression(path.parentPath)) {
				const other = path.getOpposite().evaluate();
				if (other.confident) {
				  const negate = path.parent.operator[0] === '!';
				  let truthy = other.value !== 'undefined';
				  if (negate) truthy = !truthy;
				  const value = t.booleanLiteral(truthy);
				  console.log(path.getSource(), truthy)
				  path.parentPath.replaceWith(value);
				  const replacement = cascadeReplacement(path.parentPath, value);
				  dissolveHelper(replacement);
				}
			  }
			}
		  }
		  */
			},

			// function p() { return (p = Object.assign || function(){..}).apply(..) }
			// var p; p = Object.assign || function(){..}
			AssignmentExpression(path, scope) {
				if (path.node.operator !== '=') return;

				const native = handlePolyfillAssignment(path.get('right'));
				if (native) {
					replaceHelperWithNative(path.get('left'), native);
				}
			},
			// var p = Object.assign || function(){..}
			VariableDeclarator(path, scope) {
				const native = handlePolyfillAssignment(path.get('init'));
				if (native) {
					replaceHelperWithNative(path.get('id'), native);
				}
			},

			// TODO: this should be a separate plugin.
			// { foo: function() {} }
			// { foo: function foo() {} }   <-- don't remember if this is Babelscript or not
			// { foo: async function() {} }
			// { foo: function *() {} }
			ObjectProperty(path) {
				if (
					t.isFunctionExpression(path.get('value')) &&
					(!path.node.value.id || t.isNodesEquivalent(path.node.value.id, path.node.key))
				) {
					//window._path = path;
					const fn = path.node.value;
					const method = t.objectMethod('method', path.node.key, fn.params, fn.body, path.node.computed);
					method.async = fn.async;
					method.generator = fn.generator;
					method.decorators = path.node.decorators;
					path.replaceWith(method);
				} else if (!path.node.computed) {
					path.node.shorthand = true;
				}
			},
			DirectiveLiteral(path) {
				if (path.node.value === 'use strict') {
					path.parentPath.remove();
				}
			}
		})
	};
}
