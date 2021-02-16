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
 * Turns IIFE functions into arrows if they don't use scope.
 * Note that this transform only converts Functions to Arrows.
 * The process of inlining functions at their callsite is left to Terser.
 * @TODO double-check that this doesn't create scoping edge-caes.
 *
 * @param {import('@babel/core')} api
 */

export default ({ types: t }) => ({
	name: 'transform-iife-arrows',
	visitor: {
		FunctionExpression(path) {
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

			const node = t.arrowFunctionExpression(path.node.params, path.node.body);
			node.async = path.node.async;
			node.generator = path.node.generator;

			if (path.node.body.body.length === 1 && t.isReturnStatement(path.node.body.body[0])) {
				node.body = t.cloneNode(node.body.body[0].argument, true);
			} else {
				node.body = t.cloneNode(node.body);
			}

			path.replaceWith(node);
		}
	}
});
