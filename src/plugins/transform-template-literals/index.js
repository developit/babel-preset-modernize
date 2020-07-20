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
			CallExpression(path, state) {
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
