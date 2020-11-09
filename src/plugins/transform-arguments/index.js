/** @typedef {import('@babel/core')} babel */

/**
 * Transform conditional and collected argument values to default and rest params.
 *
 * TODO: finish testing default destructured parameters - ({ x = 1 }) => x
 * @param {babel} api
 * @returns {babel.PluginObj}
 */
export default function transformArguments({ types: t }) {
	const UNDEFINED = t.identifier('undefined');
	const ARGUMENTS = t.identifier('arguments');

	const getNode = pathOrNode => ('node' in pathOrNode ? pathOrNode.node : pathOrNode);

	function isUndefined(path) {
		const node = getNode(path);

		if (t.isIdentifier(node) && t.isIdentifier(node, UNDEFINED)) return true;

		if (t.isUnaryExpression(node) && node.operator === 'void') return true;

		return false;
	}

	function getPath(pathOrNode, key) {
		return 'node' in pathOrNode ? pathOrNode.get(key) : pathOrNode[key];
	}

	/**
	 * @template {babel.NodePath} T
	 * @param {T} path
	 * @returns {T | false}
	 */
	function isUndefinedCheck(path, operator = '===') {
		const node = getNode(path);
		operator = operator.slice(0, 2);
		if (!t.isBinaryExpression(node) || node.operator.slice(0, 2) !== operator) return false;
		const ident = isUndefined(node.left)
			? getPath(path, 'right')
			: isUndefined(node.right)
			? getPath(path, 'left')
			: null;
		return ident || false;
	}

	function getSingleBlockExpression(path) {
		if (t.isBlockStatement(path)) {
			if (path.node.body.length !== 1) return;
			return path.get('body.0');
		}
		if (!t.isExpressionStatement(path)) return;
		return path;
	}

	function handleDefaultParams(path, condition, assignment) {
		// only functions (arguments access)
		const func = path.getFunctionParent();
		if (!func) return;

		const checked = isUndefinedCheck(condition, '==');
		// t === undefined || (t = "foo")
		if (checked && t.isAssignmentExpression(assignment) && t.isNodesEquivalent(checked.node, assignment.node.left)) {
			const binding = path.scope.getBinding(getNode(checked).name);
			if (binding && binding.kind === 'param') {
				binding.path.replaceWith(paramWithDefault(binding.identifier, assignment.node.right));
				path.remove();
			}
		}
	}

	/**
	 * Variable declarations that shadow defaulted destructured parameters:
	 *   ({ x }) => { var _x = x === void 0 ? 42 : x; return _x; }
	 * @TODO: test logic inversions for the conditional assignment
	 * @param {babel.NodePath} path
	 * @param {babel.NodePath} test
	 */
	function shadowedDefaultParam(path, test) {
		// console.log('SHADOW: ', path.getSource(), isUndefinedCheck(test, '=='));
		const checked = isUndefinedCheck(test, '==');
		if (!checked) return;

		const name = getNode(checked).name;
		const binding = checked.scope.getBinding(name);
		// if (binding && binding.kind !== 'param') console.warn(binding.kind, path.getSource);
		if (!binding || binding.kind !== 'param') return;

		let bindingPath = binding.path;
		if (t.isObjectPattern(bindingPath)) {
			bindingPath = bindingPath.getBindingIdentifierPaths()[name];
		}
		bindingPath.replaceWith(paramWithDefault(path.node.id, path.node.init.consequent));
		path.remove();
		return true;
	}

	function paramWithDefault(ident, defaultValue) {
		const param = t.clone(getNode(ident));
		if (isUndefined(defaultValue)) return param;
		return t.assignmentPattern(param, t.clone(getNode(defaultValue)));
	}

	return {
		name: 'transform-arguments',
		// pre() {
		// 	this.file.opts.generatorOpts.retainLines = false;
		// 	this.file.opts.generatorOpts.comments = false;
		// },
		visitor: {
			AssignmentExpression(path, state) {
				// this is only allowed in loose mode
				if (!state.opts.loose) return;

				// only functions (arguments access)
				const func = path.getFunctionParent();
				if (!func) return;

				if (
					path.node.operator !== '=' ||
					!t.isLogicalExpression(path.node.right) ||
					path.node.right.operator !== '||'
				) {
					return;
				}

				if (
					t.isIdentifier(path.node.left) &&
					t.isIdentifier(path.node.right.left) &&
					path.node.right.left.name === path.node.left.name
				) {
					const right = path.get('right');
					const arg = right.node.left;
					const binding = right.scope.getBinding(arg.name);
					if (binding.kind === 'param') {
						binding.path.replaceWith(paramWithDefault(arg, right.node.right));
						path.remove();
						return;
					}
				}
			},
			VariableDeclarator(path, state) {
				let init = path.get('init');
				let test = init.get('test');
				let defaultValue = init.node && init.node.alternate;

				// Allow logical expressions, since ternaries are often minified to them.
				// The following two are equivalent:
				//   x = arguments.length>0 && arguments[0] !== void 0 ? arguments[0] : false
				//   x = arguments.length>0 && arguments[0] !== void 0 && arguments[0]
				if (t.isLogicalExpression(init)) {
					test = init.get('left');
					if (init.node.operator === '&&') {
						defaultValue = t.booleanLiteral(false);
					} else {
						defaultValue = init.get('alternate');
					}
				} else if (!t.isConditionalExpression(init)) {
					return;
				}

				// only functions (arguments access)
				const func = path.getFunctionParent();
				if (!func) return;

				let expr = test;
				if (t.isLogicalExpression(test)) {
					expr = isUndefinedCheck(test.get('left'), '!=') || isUndefinedCheck(test.get('right'), '!=');
				}

				// ({ x }) => { var _x = x === void 0 ? 42 : x; return _x; }
				if (shadowedDefaultParam(path, test)) {
					return;
				}

				// Check for `arguments[1]`
				if (
					t.isMemberExpression(expr) &&
					t.isIdentifier(expr.node.object, ARGUMENTS) &&
					t.isNumericLiteral(expr.node.property)
				) {
					// install the optional parameter pattern
					const index = expr.node.property.value;
					const arg = path.get('id').node;
					func.node.params[index] = paramWithDefault(arg, defaultValue);
					path.remove();
				}
				// Check for `arguments.length > 2` or `arguments.length >= 2`
				else if (
					t.isBinaryExpression(expr) &&
					t.isMemberExpression(expr.get('left')) &&
					t.isIdentifier(expr.node.left.object, ARGUMENTS) &&
					t.isIdentifier(expr.node.left.property, { name: 'length' }) &&
					t.isNumericLiteral(expr.node.right) &&
					expr.node.operator[0] === '>'
				) {
					// install the optional parameter pattern
					let index = expr.node.right.value;
					if (expr.node.operator === '>=') index += 1;
					const arg = path.get('id').node;
					func.node.params[index] = paramWithDefault(arg, defaultValue);
					path.remove();
				}

				// TODO: remove me, should never be needed
				for (let i = 0; i < func.node.params.length; i++) {
					func.node.params[i] = func.node.params[i] || path.scope.generateUidIdentifier('_un');
				}
			},
			LogicalExpression(path) {
				handleDefaultParams(path, path.get('left'), path.get('right'));
			},
			IfStatement(path) {
				const body = getSingleBlockExpression(path.get('consequent'));
				if (!body) return;
				handleDefaultParams(path, path.get('test'), body.get('expression'));
			},
			ForStatement(path) {
				// only functions (arguments access)
				const func = path.getFunctionParent();
				if (!func) return;

				// Account for block/expression bodies
				const body = getSingleBlockExpression(path.get('body'));
				if (!body) return;
				const expr = body.get('expression');
				if (!t.isAssignmentExpression(expr) || expr.node.operator !== '=') return;

				const left = expr.get('left');
				const right = expr.get('right');
				if (
					!t.isMemberExpression(left) ||
					!t.isMemberExpression(right) ||
					!t.isIdentifier(right.node.object, ARGUMENTS)
				) {
					return;
				}

				const binding = right.get('property').scope.getBinding(right.get('property').resolve());
				if (!binding) return;

				const start = binding.path.get('init').evaluate();
				if (!start.confident) return;

				const param = left.get('object').node;
				let offsetPath = left.get('property');
				let offset = start;
				// handle `arr[_key - 2]`
				if (t.isBinaryExpression(offsetPath)) {
					offset = offsetPath.get('right').evaluate();
					offsetPath = offsetPath.get('left');
				}

				// make sure the same loop index variable is used on both sides
				// TODO: this is imperfect
				if (!t.isNodesEquivalent(offsetPath.node, binding.path.get('id').node)) return;

				// something went wrong: we got different keys for offset and start
				if (!offset || !offset.confident || offset.value !== start.value) return;

				// Hoist any remaining unscoped declarations out of the loop
				if (path.get('init').node.kind === 'var') {
					binding.path.remove();
					left
						.get('object')
						.resolve()
						.parentPath.remove();
					if (path.node.init) {
						for (const decl of path.get('init.declarations')) {
							const init = decl.node.init;
							if (
								t.isMemberExpression(init) &&
								t.isIdentifier(init.object, ARGUMENTS) &&
								t.isIdentifier(init.property, t.identifier('length'))
							) {
								decl.remove();
							}
						}
					}
					if (path.get('init').node && path.get('init.declarations').length) {
						path.insertBefore(t.clone(path.get('init').node));
					}
				}

				// remove the loop
				path.remove();

				// Install the rest param
				func.node.params[offset.value] = t.restElement(t.clone(param));
				for (let i = offset.value; i--; ) {
					if (!func.node.params[i]) func.node.params[i] = func.scope.generateUidIdentifier();
				}
				func.scope.crawl();
			}

			/*
			// older more rigid implementation
			ForStatement(path) {
			  // only functions (arguments access)
			  const func = path.getFunctionParent();
			  if (!func) return;

			  const node = path.node;
			  //if (!t.isForStatement(node)) return false;

			  const decl = node.init.declarations;

			  // var $ = arguments.length,
			  const len = decl.findIndex(n => t.isMemberExpression(n.init) && t.isIdentifier(n.init.object, t.identifier('arguments')) && t.isIdentifier(n.init.property, t.identifier('length')));
			  if (len === -1 || offset === -1) return;

			  const offset = decl.findIndex(n => t.isNumericLiteral(n.init));
			  if (offset === -1) return;
			  const start = decl[offset].init.value;

			  // the remaining declaration is our transpiled parameter binding
			  const ident = decl[node.init.declarations.length - offset - len].id;

			  func.node.params[start] = t.restElement(t.clone(ident));
			  path.remove();
			}
			*/
		}
	};
}
