/** @typedef {import('@babel/core')} babel */

/**
 * Dissolve ternary API existence checks and fallbacks for known available properties.
 *
 * @TODO this needs a lot of work to actually be useful in a generalized context.
 *
 * @param {babel} api
 * @returns {babel.PluginObj}
 */
export default function({ types: t }) {
	/** @param {babel.NodePath} p @param {string} name */
	const isMethodCall = (p, name) => p.isCallExpression() && isPropertyAccess(p.get('callee'), name);

	/** @param {babel.NodePath} p @param {string} name */
	const isPropertyAccess = (p, name) =>
		p.isMemberExpression() &&
		(isNamedIdentifier(p.get('property'), name) || p.get('property').evaluate().value === name);

	/** @param {babel.NodePath} p @param {string} name */
	const isNamedIdentifier = (p, name) => p.isIdentifier() && p.node.name === name;

	/** @type {[string, string, boolean][]} */
	const PAIRS = [
		['addEventListener', 'attachEvent', true],
		['removeEventListener', 'detachEvent', true],
		['attachEvent', 'addEventListener', false],
		['detachEvent', 'removeEventListener', false]
	];

	function process(test, cons, alt) {
		for (const [check, fallback, polarity] of PAIRS) {
			if (!isPropertyAccess(test, check)) continue;
			if (!isMethodCall(cons, check) || !isMethodCall(alt, fallback)) continue;
			let [legacy, retain] = polarity ? [alt, cons] : [cons, alt];
			if (isPrefix(legacy.get('arguments.0'), 'on', retain.get('arguments.0'))) {
				return retain;
			}
		}
	}

	const isPrefix = (path, prefix, ofIdent) =>
		path.isBinaryExpression() &&
		path.node.operator === '+' &&
		path.get('left').isStringLiteral() &&
		path.node.left.value === prefix &&
		(!ofIdent || t.isNodesEquivalent(path.node.right, ofIdent.node || ofIdent));

	return {
		name: 'transform-fallbacks',
		visitor: {
			ConditionalExpression(path) {
				const test = path.get('test');
				const cons = path.get('consequent');
				const alt = path.get('alternate');

				const toReplace = process(test, cons, alt);
				if (toReplace) {
					path.replaceWith(toReplace.node);
				}
			}
		}
	};
}
