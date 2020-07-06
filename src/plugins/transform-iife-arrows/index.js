/**
 * Turns IIFE functions into arrows if they don't use scope.
 * Note that this transform only converts Functions to Arrows.
 * The process of inlining functions at their callsite is left to Terser.
 * @TODO double-check that this doesn't create scoping edge-caes.
 */

export default ({ types: t }) => ({
	name: 'transform-iife-arrows',
	visitor: {
		'FunctionExpression|FunctionDeclaration'(path) {
			let parent = path.parentPath;
			if (t.isExpressionStatement(parent)) parent = parent.parentPath;

			if (!t.isCallExpression(parent)) {
				const idents = path.getOuterBindingIdentifierPaths();
				for (let ident in idents) {
					const binding = path.scope.getBinding(ident);
					if (!binding.constant || binding.references !== 1) return;
					parent = binding.referencePaths[0].parentPath;
				}
			}

			// IIFE
			if (!t.isCallExpression(parent)) {
				return;
			}

			// Skip conversion for functions that use arguments or this
			let deopt = false;
			path.traverse({
				BlockStatement(p) {
					// ignore inner functions
					if (t.isFunction(p.parent) && p.parentPath !== path) {
						p.stop();
					}
				},
				ThisExpression(p) {
					deopt = true;
					p.stop();
				},
				Identifier(p) {
					if (p.node.name === 'arguments') {
						deopt = true;
						p.stop();
					}
				}
			});
			if (deopt) return;

			const node = t.clone(path.node);
			node.type = 'ArrowFunctionExpression';
			// swapping a Function Expression with an arrow requires hoisting its identifier.
			// TODO: this could probably just be done via hoist() into its own scope?
			if (t.isFunctionDeclaration(path)) {
				path.replaceWith(t.variableDeclaration('var', [t.variableDeclarator(t.clone(path.node.id), node)]));
			} else {
				path.replaceWith(node);
			}
		}
	}
});
