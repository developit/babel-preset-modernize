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
 * Turn 'foo'.concat(1, 'bar', 2) into `foo${1}bar{2}`
 * @param {babel} api
 * @returns {babel.PluginObj}
 */
export default function transformTemplateLiterals({ types: t }) {
	const esc = str => str.replace(/(`|${)/g, '\\$1');

	const isConcat = callee => t.isMemberExpression(callee) && t.isIdentifier(callee.node.property, { name: 'concat' });

	const isStringConcat = p => t.isCallExpression(p) && isConcat(p.get('callee'));

	return {
		name: 'transform-template-literals',
		visitor: {
			BinaryExpression(path) {
				if (path.node.operator !== '+') return;

				// Disable recursion, we handle nesting internally.
				if (t.isBinaryExpression(path.parent)) return;

				let p = path;
				const segments = [];
				while (p && p.isBinaryExpression()) {
					segments.push(p.get('right'));
					p = p.get('left');
				}
				if (p) segments.push(p);
				segments.reverse();

				// ignore single strings:
				if (segments.length < 2) return;

				// ignore "concatenation" that doesn't start with a string:
				// const first = segments[0];
				// if (!first.isStringLiteral()) return;

				const tpls = [];
				const exprs = [];

				let str = '';
				let inString = true;
				let hasExpression = false;
				for (let i = 0; i < segments.length; i++) {
					const isLast = i === segments.length - 1;
					const p = segments[i];
					const isString = p.isStringLiteral();
					if (isString) {
						str += p.node.value;
						inString = true;
					} else {
						// Two expression fields side-by-side is a bailout case.
						// It's unsafe to assume string concat, could be addition.
						if (!inString) {
							return;
						}
						tpls.push(t.templateElement({ raw: esc(str) }, isLast));
						exprs.push(t.clone(p.node));
						hasExpression = true;
						inString = false;
						str = '';
					}
				}

				// Might be worth revisiting, but if there are no expressions it's less likely to be a template literal.
				// The case where this is incorrect: `a${"b"}c` transpiles to three strings: 'a'+"b"+'c'.
				if (!hasExpression) {
					// path.replaceWith(t.stringLiteral(str));
					return;
				}

				tpls.push(t.templateElement({ raw: esc(str) }, true));

				path.replaceWith(t.templateLiteral(tpls, exprs));
			},
			CallExpression(path) {
				const callee = path.get('callee');

				if (!isConcat(callee)) return;

				const str = callee.get('object');
				if (!t.isStringLiteral(str)) return;

				const tpls = [t.templateElement({ raw: esc(str.node.value) })];
				const exprs = [];

				const concats = [path.get('arguments')];

				// 'a'.concat(b, ',').concat(c, ' ').concat(d, '.')
				let rootPath = path;
				let p = path;
				while ((p = p.parentPath && p.parentPath.parentPath)) {
					if (isStringConcat(p)) {
						// ignore wrapping [].concat(..)
						const obj = p.get('callee.object');
						if (obj !== rootPath && !t.isStringLiteral(obj)) break;

						concats.push(p.get('arguments'));
						rootPath = p;
					}
				}

				if (concats.length === 1 && concats[0].length === 0) return;

				for (let n = 0; n < concats.length; n++) {
					const args = concats[n];
					const isLast = n === concats.length - 1;
					for (let i = 0; i < args.length; i++) {
						const node = args[i].node;
						if (i % 2) {
							if (!t.isStringLiteral(node)) {
								// console.warn(`Template string malformed: `, rootPath.getSource());
								return;
							}

							const tail = isLast && i === args.length - 1;
							tpls.push(t.templateElement({ raw: esc(node.value) }, tail));
						} else if (t.isExpression(node)) {
							exprs.push(t.clone(node));
						}
					}
					if (tpls.length <= exprs.length) {
						tpls.push(t.templateElement({ raw: '' }, isLast));
					}
				}

				rootPath.replaceWith(t.templateLiteral(tpls, exprs));
			}
		}
	};
}
