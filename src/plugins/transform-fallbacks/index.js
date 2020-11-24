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

	/** @param {babel.NodePath} p @param {string} prefix @param {babel.NodePath} [ofIdent] */
	function isPrefix(p, prefix, ofIdent) {
		if (!p.isBinaryExpression() || p.node.operator !== '+') return false;
		const left = p.get('left');
		if (!left.isStringLiteral() || left.node.value !== prefix) return false;
		if (ofIdent && !nodesAreEquivalent(p.get('right'), ofIdent)) return false;
		return true;
	}

	/** @param {babel.NodePath} a @param {babel.NodePath} b */
	const nodesAreEquivalent = (a, b) => t.isNodesEquivalent(a.node || a, b.node || b);

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
			if (
				isPrefix(legacy.get('arguments.0'), 'on', retain.get('arguments.0')) &&
				nodesAreEquivalent(legacy.get('arguments.1'), retain.get('arguments.1'))
			) {
				return retain;
			}
		}
	}

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
