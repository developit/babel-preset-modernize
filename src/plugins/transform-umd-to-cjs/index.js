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
 * Turn UMD modules into CommonJS ones, which can then be fed into the CommonJS to ESM transform.
 */

export default ({ types: t }) => ({
	name: 'transform-umd-to-cjs',
	visitor: {
		Program: {
			enter(path, state) {
				// UMD programs only have a single statement (aside from comments):
				const expressions = path.get('body').filter(t.isStatement);
				if (expressions.length !== 1) return;

				// Make sure it's of the form: (function(){})(this?, function(){})
				let expr = expressions[0];
				if (!t.isExpressionStatement(expr)) return;
				expr = expr.get('expression');

				// !function(){}()
				if (t.isUnaryExpression(expr) && expr.node.operator === '!') {
					expr = expr.get('argument');
				}

				if (!t.isCallExpression(expr)) return;

				// Our module factory is the only function argument:
				const umd = expr;
				const factoryArgPosition = umd.get('arguments').findIndex(t.isFunctionExpression);

				if (factoryArgPosition === -1) {
					return;
				}

				// The bootstrap is the function containing our UMD implementation
				const bootstrap = umd.get('callee');
				if (!t.isFunctionExpression(bootstrap)) return;
				const param = bootstrap.get('params.' + factoryArgPosition);

				// find the CommonJS interop section of the bootstrap:
				//   module.exports = factory(require('dep'))
				let moduleExports;
				const binding = param.scope.getBinding(param.node.name);
				const ref = binding.referencePaths.find(p => {
					// `= factory(..)`
					if (!t.isCallExpression(p.parentPath)) return false;
					const root = p.parentPath.parentPath;
					if (!t.isAssignmentExpression(root)) return false;

					const lhs = root.get('left');
					// @TODO use shared isModuleExports() helper
					if (!t.isMemberExpression(lhs) || lhs.node.object.name !== 'module' || lhs.node.property.name !== 'exports') {
						return false;
					}
					// @TODO account for `module.exports.default =`?
					moduleExports = t.clone(lhs.node);
					return true;
				});

				// hoist factory argument require()'s to the program root
				// @TODO re-use already matched parameter identifiers?
				const paramNames = umd.get('arguments.' + factoryArgPosition + '.params');

				const args = [];
				let i = 0;
				for (const arg of ref.parentPath.get('arguments')) {
					// const tmp = path.scope.generateUidBasedOnNode(arg.node.arguments[0]);
					const param = paramNames[i++];
					let tmp = param.node.name;
					// @todo: this might be an unreachable edge case,
					// since we guard against any other statements in the program body.
					if (path.scope.hasBinding(tmp)) {
						tmp = path.scope.generateUidBasedOnNode(arg.node.arguments[0]);
					}
					args.push(tmp);
					const decl = t.variableDeclaration('const', [t.variableDeclarator(t.identifier(tmp), t.clone(arg.node))]);
					// expressions[0].insertBefore(decl);
					path.unshiftContainer('body', decl);
				}

				// replace factory parameter references with the corresponding require() constant
				const factory = umd.get('arguments.' + factoryArgPosition);
				// factory.get('params').forEach((param, i) => {
				// 	param.scope.rename(param.node.name, args[i]);
				// });

				// Replace `return exports` with `module.exports = exports`
				const returnStatement = factory.get('body.body').find(t.isReturnStatement);
				if (returnStatement) {
					returnStatement.replaceWith(
						t.assignmentExpression(
							'=',
							//t.memberExpression(t.identifier('module'), t.identifier('exports')),
							t.clone(moduleExports),
							t.clone(returnStatement.node.argument)
						)
					);
				}

				// Replace the whole UMD setup with our CommonJS program body
				expressions[0].replaceWithMultiple(factory.node.body.body.map(t.clone));
			}
		}
	}
});
