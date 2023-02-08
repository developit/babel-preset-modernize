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
 * Turn [a, b].concat(1, <Array> c) into [a, b, 1, ...c]
 * @param {babel} api
 */
export default ({ types: t, template }) => {
	const tpl = template`for (KEY of ITER) BODY`;

	return {
		name: 'transform-for-of',
		visitor: {
			For(path, state) {
				const init = path.get('init');
				const test = path.get('test');

				// the update method for a transpiled iterator loop is empty (cheap check so we run it first)
				if (path.node.update != null) return;
				
				// transpiled iterator loops are wrapped in a try/catch to invoke the iterator error method
				if (!t.isTryStatement(path.parentPath.parent)) return;

				// _iterator.s()
				if (
					!t.isCallExpression(init) ||
					init.node.arguments.length !== 0 || 
					!t.isMemberExpression(init.node.callee) ||
					!t.isIdentifier(init.node.callee.property, { name:'s' })
				) return;

				// !(_step = _iterator.n()).done
				const isNegated = t.isUnaryExpression(test) && test.node.operator === '!';
				if (!isNegated || !t.isMemberExpression(test.node.argument) || test.node.argument.property.name !== 'done') return;
				
				let first = path.get('body');
				if (t.isBlockStatement(first)) first = first.get('body.0');
				else first = first.get('expression');

				// var _key = _step.value;
				if (
					!t.isVariableDeclaration(first) ||
					!t.isMemberExpression(first.node.declarations[0]?.init) ||
					!t.isIdentifier(first.node.declarations[0].init.property, {name:'value'})
				) return;

				// find and dereference the helper, removing if now unused
				const helper = init.get('callee.object').resolve();
				const helperName = helper.node.callee.name;
				const helperFn = helper.scope.getBinding(helperName);
				if (helperFn) {
					for (let i=0; i<helperFn.referencePaths.length; i++) {
						if (helperFn.referencePaths[i].parent === helper.node) {
							helperFn.referencePaths.splice(i, 1);
							helperFn.dereference();
							break;
						}
					}
					if (!helperFn.referenced) helperFn.path.remove();
				}

				const key = first.node;
				const val = helper.node.arguments[0]; 
				
				// remove _step
				const step = first.node.declarations[0].init.object.name;
				first.scope.getBinding(step).path.remove();
				// remove _createForOfIteratorHelper(obj)
				helper.parentPath.remove();
				// remove loop var init to reuse the declaration in for()
				first.get('declarations.0.init').remove();
				// remove old manual loop var
				first.remove();

				path.parentPath.parentPath.replaceWith(tpl({
					KEY: t.clone(key),
					ITER: t.clone(val),
					BODY: t.clone(path.node.body)
				}));
			}
		}
	}
}
