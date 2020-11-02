/** @typedef {import('@babel/core')} babel */

/**
 * Infer `let` usage from `var.
 * @param {babel} api
 * @returns {babel.PluginObj}
 */
export default function({}) {
	return {
		name: 'transform-block-scpe',
		visitor: {
			VariableDeclaration(path) {
				if (path.node.kind !== 'var') return;

				const idents = path.getBindingIdentifierPaths();
				for (const name in idents) {
					const p = idents[name];
					const b = p.scope.getBinding(name);
					// unknown binding / free global / non-constant
					if (!b || !b.constant) return;
					// TDZ violations
					for (const ref of b.referencePaths) {
						if (ref !== p && ref.willIMaybeExecuteBefore(p)) {
							return;
						}
					}
				}
				path.node.kind = 'let';
			}
		}
	};
}
