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

/**
 * Dissolve scope encapsulation wrapper functions.
 * Useful when the target environment is an ES Module, which already provides scope encapsulation.
 */

export default ({ types: t }) => ({
	name: 'transform-implicit-scope',
	visitor: {
		Program(path) {
			const body = path.get('body');
			if (body.length === 1) {
				let root = body[0];
				// (function(){})
				if (t.isExpressionStatement(root)) root = root.get('expression');
				// ! function(){}()
				if (t.isUnaryExpression(root)) root = root.get('argument');
				// (...)()
				if (t.isCallExpression(root)) {
					const callee = root.get('callee');
					// Make sure this is an IIFE
					if (!t.isFunction(callee)) return;
					// ignore generators and async functions, which change behavior
					if (callee.node.async || callee.node.generator) return;
					// if there are any referenced parameters, bail out
					// TODO: inline parameters instead of bailing out
					for (let param of callee.get('params')) {
						const idents = param.getBindingIdentifiers();
						for (let ident in idents) {
							if (param.scope.getBinding(ident).referenced) {
								return;
							}
						}
					}
					// remove any return statements
					// @TODO: this is only safe if the return statement is the last statement in body
					callee.get('body.body').forEach(p => {
						if (t.isReturnStatement(p)) {
							p.replaceWith(p.get('argument'));
						}
					});
					body[0].replaceWithMultiple(callee.node.body.body || callee.node.body);
					// we transformed the root scope which invalidated all bindings
					path.scope.crawl();
				}
			}
		}
	}
});
