/**
 * Turn [a, b].concat(1, <Array> c) into [a, b, 1, ...c]
 */

export default ({ types: t }) => ({
	name: 'transform-array-spread',
	visitor: {
		CallExpression(path) {
			const callee = path.get('callee');

			if (t.isMemberExpression(callee) && t.isIdentifier(callee.node.property, t.identifier('concat'))) {
				const arr = callee.get('object');
				const args = path.get('arguments');

				if (t.isArrayExpression(arr)) {
					// build up new Array literal items as we go
					const items = [];

					// every value passed to concat() must be either scalar or a known Array/non-Array
					const success = args.every(p => {
						// Unroll array literals: `.concat([a, b])`:
						if (t.isArrayExpression(p)) {
							items.push(...p.node.elements);
							return true;
						}

						// Preevaluate literals (concat-push):
						//   [].concat(1, {}, "b")
						if (p.isLiteral() || t.isObjectExpression(p)) {
							items.push(p.node);
							return true;
						}

						if (t.isObjectExpression(p)) {
							items.push(p.node);
							return true;
						}

						// This is an expression, but we don't know what.
						//   Example: [].concat(foo ? {} : [])
						if (!t.isIdentifier(p)) {
							console.log('Unknown static value: ', p.node);
							return;
						}

						// We know the value is an identifier at this point.
						// We need to look up its source (binding) and see if it's a constant known quantity.

						// Check that this is a constant binding (a local variable and not reassigned).
						// note: this enforces that we can't inline externals/globals
						const binding = path.scope.getBinding(p.node.name);
						if (!binding || !binding.constant) return;

						// Special-case: the binding comes from a rest parameter, which is *always* an Array.
						if (binding.kind === 'param' && t.isRestElement(binding.path)) {
							items.push(t.spreadElement(p.node));
							return true;
						}
					});

					if (!success) return;
					const spread = t.isArrayExpression(arr) ? t.clone(arr.node) : t.arrayExpression([arr.node]);
					spread.elements.push(...items);
					path.replaceWith(spread);
				}
			}
		}
	}
});
