/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @typedef {import('@babel/core')} babel */

/**
 * Convert transpiled Classes back into ES Classes.
 * https://astexplorer.net/#/gist/7eaa74165d1e43c15f25cc00d9cd3cd5/b2b527fbdca3ea8c8a8a17a867995544f71b7d35
 * @param {babel} api
 * @returns {babel.PluginObj}
 */
export default function({ types: t }) {
	/** @param {babel.NodePath} path @param {RegExp|string|((str: string)=>boolean)} toFind */
	function functionHasOwnString(path, toFind) {
		let has = false;
		const predicate = typeof toFind === 'function' ? toFind : v => v && v.match(toFind);
		path.traverse({
			Function(p) {
				if (p.node === path.node) return;
				p.skip();
			},
			StringLiteral(p) {
				if (predicate(p.node.value)) {
					has = true;
					p.stop();
				}
			},
			TemplateLiteral(p) {
				const str = p.node.quasis.map(q => q.value).join('${}');
				if (predicate(str)) {
					has = true;
					p.stop();
				}
			}
		});
		return has;
	}

	function isClassCallCheck(path) {
		return path.node && functionHasOwnString(path, /call a class as a function/);
	}

	function isPossibleConstructorReturn(path) {
		return path.node && functionHasOwnString(path, /super\(\) hasn't been called/);
	}

	// function isInheritsHelper(path) {
	// 	return path.node && functionHasOwnString(path, /Super expression must be either null/);
	// }

	/** @param {babel.NodePath} path */
	function isCreateSuperHelper(path) {
		// return path.node && functionHasOwnString(path, /Reflect\.construct\(/);
		if (!path.node) return;
		let found = false;
		path.traverse({
			CallExpression(p) {
				// const callee = p.get('callee');
				if (isMemberExpression(p.node.callee, 'Reflect', 'construct')) {
					found = true;
					p.stop();
				}
			},
			Function(p) {
				const bindingPaths = p.getBindingIdentifiers();
				const binding = p.scope.getBinding(Object.keys(bindingPaths)[0]);
				// *Do* descend into _inline_ functions (functions with binding contained within root path):
				if (binding && path.isAncestor(binding.path)) return;
				p.skip();
			}
		});
		return found;
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
		let s = path.get('callee.object').resolve();

		let innerOp;
		if (t.isMemberExpression(s) && isNamedIdentifier(s.node.property, 'call')) {
			innerOp = 'call';
			s = s.get('object').resolve();
		}

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

			// S.call.apply(S, [this].concat( ... )):
			if (innerOp === 'call') {
				if (
					args[0].isCallExpression() &&
					t.isMemberExpression(args[0].node.callee) &&
					isNamedIdentifier(args[0].node.callee.property, 'concat')
				) {
					args = args[0].get('arguments');
				} else {
					console.warn(`Unhandled Super.call.apply() usage: ${path.getSource()}`);
				}
			}
		} else if (isNamedIdentifier(prop, 'call')) {
			args = path.get('arguments.0').getAllNextSiblings();
		} else {
			return false;
		}
		return { apply, args, helper };
	}

	/** @param {babel.NodePath} path */
	function canBeArrowFunction(path) {
		let can = true;
		path.traverse({
			Function(p) {
				if (p.node === path.node) return;
				p.skip();
			},
			ThisExpression(p) {
				if (p.get('isInjected') === true) return;
				can = false;
				p.stop();
			},
			Identifier(p) {
				if (p.node.name === 'arguments') {
					can = false;
					p.stop();
				}
			}
		});
		return can;
	}

	/** @param {babel.NodePath} path */
	function looseResolve(path) {
		let resolved = path.resolve();
		if (resolved.isIdentifier()) {
			const b = resolved.scope.getBinding(resolved.node.name);
			const init = b.path.parentPath.get('init');
			if (init && init.node) {
				return init.resolve();
			}
		}
		return resolved;
	}

	// getFunctionParent(), but skip over Arrow functions
	function getNonArrowFunctionParent(path) {
		const parent = path.getFunctionParent();
		if (parent.isArrowFunctionExpression()) return getNonArrowFunctionParent(parent);
		return parent;
	}

	function getRootExpressions(path, assignmentRhs) {
		function walk(acc, p) {
			if (Array.isArray(p)) for (const v of p) walk(acc, v);
			else if (p.isExpressionStatement()) walk(acc, p.get('expression'));
			else if (p.isSequenceExpression()) walk(acc, p.get('expressions'));
			else if (p.isBlockStatement()) walk(acc, p.get('body'));
			else if (p.isReturnStatement()) walk(acc, p.get('argument'));
			else if (assignmentRhs && p.isAssignmentExpression()) walk(acc, p.get('right'));
			else acc.push(p);
			return acc;
		}
		return walk([], path);
	}

	function processConstructor(path, state) {
		const fn = path.parentPath.getFunctionParent();
		if (!fn) return;
		let originalReturn = getReturnedBindingPath(fn);
		let ret = originalReturn && getRootExpressions([originalReturn]).pop();
		if (!ret) return;
		ret = ret.resolve();
		//if (!t.isNodesEquivalent(ret.node.argument, path.node.id)) {
		if (!t.isNodesEquivalent(ret.node, path.node)) {
			return;
		}
		const inv = fn.parentPath;

		if (!inv.isCallExpression()) return;
		//console.log(path.node.id, ret && ret.node.argument);

		let members = [];

		// can be overwritten by _createSuper() call
		// eslint-disable-next-line no-unused-vars
		let reflectConstructedSuper;

		const superClassInternal = fn.get('params.0');

		getRootExpressions(fn.get('body.body')).forEach(p => {
			if (p.isAssignmentExpression()) {
				const lhs = p.get('left');
				if (lhs.isMemberExpression()) {
					const obj = looseResolve(lhs.get('object'));
					// A.b = ...
					const isStatic = obj.node === path.node;
					// var P=A.prototype; P.b = ...
					const isMember =
						obj.isMemberExpression() &&
						isNamedIdentifier(obj.node.property, 'prototype') &&
						obj.get('object').resolve().node === path.node;
					if (isStatic || isMember) {
						const id = t.clone(lhs.node.property);
						const value = p.node.right;
						if (t.isFunction(value)) {
							const method = t.classMethod('method', id, value.params, value.body, lhs.node.computed, isStatic);
							method.async = value.async;
							method.generator = value.generator;
							members.push(method);
						} else {
							const prop = t.classProperty(id, value, null, null, lhs.node.computed, isStatic);
							members.push(prop);
						}
					}
				}
				// else {
				// 	console.log(lhs.getSource());
				// }
			}

			if (p.isVariableDeclaration()) {
				const callee = p.get('declarations.0.init.callee').resolve();
				if (callee.node && isCreateSuperHelper(callee)) {
					reflectConstructedSuper = p.get('declarations.0.id');
					//reflectConstructedSuper.remove();
					return;
				}
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
				if (binding) {
					binding.dereference();
					state.helpers.add(binding.path);
				}
			}
		});

		let superClass = inv.get('arguments.0');
		// Special-case: remove _extendableBuiltIn() helper
		if (superClass && superClass.isCallExpression()) {
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

		// process the constructor body:

		// Find constructor return sequence expression and inline into body
		// TODO: this is only valid if the return value matches ES class semantics (isn't custom)
		const ctorReturn = path.get('body.body').find(t.isReturnStatement);
		if (ctorReturn) {
			const paths = getRootExpressions([ctorReturn]);
			ctorReturn.replaceWithMultiple(paths.map(p => t.expressionStatement(p.node)));
		}

		const bindingsToDissolve = new Set();

		getRootExpressions(path.get('body.body')).forEach(p => {
			let rep = p;
			if (t.isReturnStatement(rep)) {
				rep = rep.get('argument');
			}
			if (t.isLogicalExpression(rep) && rep.node.operator === '||' && t.isThisExpression(rep.node.right)) {
				rep = rep.get('left');
			}
			let b;
			while (t.isAssignmentExpression(rep) && t.isIdentifier(rep.get('left'))) {
				b = rep.get('left');
				rep = rep.get('right');
			}

			// Convert "class property method initializers" (arrow function class fields):
			//   var o=this;o.method = function() { return o.props }
			// ...back to arrow functions within the constructor:
			//   this.method = () => { return this.props }
			if (t.isAssignmentExpression(rep) && t.isMemberExpression(rep.get('left')) && t.isFunction(rep.get('right'))) {
				const obj = rep.get('left.object').resolve();
				const isThis =
					t.isThisExpression(obj) ||
					(t.isCallExpression(obj) && isPossibleConstructorReturn(obj.get('callee').resolve()));
				if (isThis) {
					const fn = rep.get('right');
					if (!t.isArrowFunctionExpression(fn) && canBeArrowFunction(fn)) {
						const arrow = t.arrowFunctionExpression(fn.node.params, fn.node.body);
						arrow.async = fn.node.async;
						arrow.generator = fn.node.generator;
						fn.replaceWith(arrow);
					}
					return;
				}
			}

			if (!t.isCallExpression(rep)) return;

			const callee = rep.get('callee').resolve();
			if (isPossibleConstructorReturn(callee)) {
				state.helpers.add(callee);
				rep = rep.get('arguments.1');

				// we collected the binding previously if this was a (nested) assignment:
				const binding = b && b.scope.getBinding(b.node.name);

				// for an assignment, classCallCheck returns the class instance.
				// any references to its return value can be replaced with `this`:
				if (binding) {
					if (
						binding.constantViolations.length === 1 &&
						t.isNodesEquivalent(binding.constantViolations[0].node, b.parent)
					) {
						const _this = t.thisExpression();
						binding.path.get('init').replaceWith(_this);
						binding.setValue(_this);
						binding.constantViolations.length = 0;
						binding.constant = true;
						// we'll remove the intermediary var later (to avoid deopting arrow function reversal):
						bindingsToDissolve.add(binding);
					}
				} else {
					// not an assignment, just a bare _possibleConstructorReturn()
					// @TODO: this doesn't properly dereferences the arguments
					p.remove();
					return;
				}
			}

			const sup = checkSuperCall(rep, superClassInternal);
			if (sup.helper) {
				// super call used _createSuper() helper, mark it for removal:
				state.helpers.add(sup.helper);
			}
			// not a super call
			if (!sup) return;
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
					const fn = refPath.getFunctionParent();
					if (fn.node !== path.node) {
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
			let args = sup.args.map(a => a.node);
			if (sup.apply) {
				let last = args.pop();
				if (!last) {
					// if there are no constructor arguments, inject a rest param:
					const fn = rep.getFunctionParent();
					if (fn.node.params.length === 0) {
						last = fn.scope.generateUidIdentifier();
						fn.pushContainer('params', t.restElement(t.cloneNode(last)));
					} else {
						// otherwise fall back to `super(...arguments)`:
						last = t.identifier('arguments');
					}
				}
				args.push(t.spreadElement(last));
			}
			p.replaceWithMultiple([
				...before,
				t.expressionStatement(t.callExpression(t.identifier('super'), args)),
				...after
			]);
		});

		// replace bindings that are aliases of `this` within the constructor:
		bindingsToDissolve.forEach(binding => {
			binding.referencePaths = binding.referencePaths.filter(refPath => {
				if (getNonArrowFunctionParent(refPath) === path) {
					refPath.replaceWith(t.thisExpression());
					binding.dereference();
					return false;
				}
				return true;
			});

			if (binding.referencePaths.length === 0) {
				binding.path.remove();
			}
		});

		// // Terser can handle this
		// const constructorScope = path.get('body').scope;
		// constructorScope.crawl();
		// for (const bindingName in constructorScope.bindings) {
		// 	const binding = constructorScope.bindings[bindingName];
		// 	if (binding.kind === 'var' && !binding.referenced) {
		// 		binding.path.remove();
		// 	}
		// }

		const id = t.clone(path.node.id);
		const superD = superClass && superClass.node;
		const params = [];
		for (let i = path.node.params.length; i--; ) {
			params[i] = path.node.params[i] || path.scope.generateUidIdentifier();
		}
		// Inject super() call, but not if it's a pointless constructor that just forwards arguments to super().
		let loneBody = unwrapSoleBlockExpression(path.get('body'));
		if (loneBody && t.isSequenceExpression(loneBody)) {
			path.get('body').pushContainer(
				'body',
				loneBody.node.expressions.map(e => t.expressionStatement(e))
			);
			loneBody.remove();
		}
		loneBody = unwrapSoleBlockExpression(path.get('body'));
		let isPointlessConstructor = false;
		// Detect and remove `constructor(...a){super(...a)}`:
		if (t.isCallExpression(loneBody) && isNamedIdentifier(loneBody.node.callee, 'super')) {
			const args = loneBody.get('arguments');
			if (
				args.length === 1 &&
				t.isSpreadElement(args[0]) &&
				t.isRestElement(params[0]) &&
				t.isNodesEquivalent(args[0].node.argument, params[0].argument)
			) {
				isPointlessConstructor = true;
			}
		}
		if (!isPointlessConstructor) {
			members.unshift(t.classMethod('constructor', t.identifier('constructor'), params, path.node.body));
		}
		const body = t.classBody(members);

		if (t.isVariableDeclarator(inv.parent) && t.isNodesEquivalent(inv.parent.id, id)) {
			if (inv.parentPath.parent.declarations.length === 1) {
				try {
					inv.parentPath.parentPath.replaceWith(t.classDeclaration(id, superD, body));
				} catch (err) {
					// ignore duplicate declarations
					// (note: find a better solution than silencing this scope error)
				}
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
					p.stop();
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

	const visitor = {
		Identifier(path) {
			if (isNamedIdentifier(path.node, 'arguments') && t.isMemberExpression(path.parent)) {
				const fn = path.getFunctionParent();
				const parent = path.parentPath;
				let decl = parent.parentPath;
				let fallback;
				const key = parent.get('property').evaluate().value;
				// arguments.length or arguments[<unknown>]
				if (key === 'length' || !key) return;
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
						return p && p.node !== parent && !p.findParent(p => p.node === parent || p.removed);
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
					if (!path.node.arguments[1]) {
						console.log(path.node.arguments[0]);
						console.log(path.getSource());
					}
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

			// (function(){function P(){}return P;})()
			const ret = t.isFunction(callee) && getReturnedBindingPath(callee);
			if (ret) {
				let retId = t.isFunctionDeclaration(ret) ? ret.get('id') : ret;
				let outerIdents = path.parentPath.getOuterBindingIdentifiers();
				for (let name in outerIdents) {
					let outerIdent = outerIdents[name];
					if (t.isNodesEquivalent(outerIdent, retId.node)) {
						processConstructor(ret, state);
						return;
					}
					break;
				}
			}

			let ctorParent = path.getFunctionParent();
			if (!ctorParent) return;

			// structural inference based on super call
			let outer = ctorParent.parentPath;
			if (!outer) return;

			if (t.isBlockStatement(outer)) outer = outer.parentPath;
			if (!t.isFunctionExpression(outer)) return;

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
	};

	return {
		name: 'transform-infer-classes',
		visitor: {
			Program: {
				exit(path, state) {
					state = state || {};
					const { Program, ...v } = visitor;
					Program.enter(path, state);
					path.traverse(v, state);
					Program.exit(path, state);
				}
			}
		}
	};
}
