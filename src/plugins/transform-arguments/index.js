/**
 * Transform conditional and collected argument values to default and rest params.
 */

export default ({ types: t }) => {
	const UNDEFINED = t.identifier('undefined');
	const ARGUMENTS = t.identifier('arguments');

	const getNode = pathOrNode => ('node' in pathOrNode ? pathOrNode.node : pathOrNode);

	function isUndefined(path) {
		const node = getNode(path);
		return (
			(t.isIdentifier(node) && t.shallowEqual(node, UNDEFINED)) ||
			(t.isUnaryExpression(node) && t.isNumericLiteral(node.argument, t.numericLiteral(0)))
		);
	}

	function getPath(pathOrNode, key) {
		return 'node' in pathOrNode ? pathOrNode.get(key) : pathOrNode[key];
	}

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
		if (checked && t.isAssignmentExpression(assignment)) {
			const binding = path.scope.getBinding(getNode(checked).name);
			if (binding && binding.kind === 'param') {
				const pattern = t.assignmentPattern(t.clone(binding.identifier), assignment.node.right);
				binding.path.replaceWith(pattern);
				path.remove();
			}
		}
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

				if (path.node.operator !== '=' || !t.isLogicalExpression(path.node.right) || path.node.right.operator !== '||')
					return;

				if (
					t.isIdentifier(path.node.left) &&
					t.isIdentifier(path.node.right.left) &&
					path.node.right.left.name === path.node.left.name
				) {
					const right = path.get('right');
					const arg = right.node.left;
					const binding = right.scope.getBinding(arg.name);
					if (binding.kind === 'param') {
						binding.path.replaceWith(t.assignmentPattern(t.clone(arg), t.clone(right.node.right)));
						path.remove();
						return;
					}
				}
			},
			VariableDeclarator(path, state) {
				// only ternaries
				if (!t.isConditionalExpression(path.get('init'))) return;

				// only functions (arguments access)
				const func = path.getFunctionParent();
				if (!func) return;

				const test = path.get('init.test');

				let expr = test;
				if (t.isLogicalExpression(test)) {
					expr = isUndefinedCheck(test.get('left'), '!=') || isUndefinedCheck(test.get('right'), '!=');
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
					func.node.params[index] = t.assignmentPattern(t.clone(arg), path.get('init.alternate').node);
					path.remove();
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
};
