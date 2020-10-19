/**
 * Convert all require.resolve() and path.resolve() expressions in a module to require() expressions.
 *
 * @see https://astexplorer.net/#/gist/e0d4a9a500b48b472f130eed1cb67818/f3d4a5ceeb80e4f188c2850de3582116b9eff8cd
 */

module.exports = function babelPluginInlineResolve({ types: t, transformFromAstSync }) {
	function resolvePath(path, ...args) {
		for (let i = 0; i < args.length; i++) {
			const arg = args[i];
			path = path.replace(/\/$/, '');
			if (arg[0] === '/') path = arg;
			else if (arg[0] === '.' && arg[1] === '.') {
				path = path.replace(/\/[^/]+$/g, '');
				args[i] = arg.substring(3);
				i--;
			} else if (arg[0] === '.') {
				path += arg.substring(1);
			}
		}
		return path;
	}

	function isResolve(path, state) {
		path = path.resolve();
		if (t.isIdentifier(path) && path.node.name === 'resolve') {
			return true;
		}
		if (t.isMemberExpression(path)) {
			const requires = state.get('requires');
			if (getProperty(path) === 'resolve') {
				let object = path.get('object').resolve();

				// _path.default.resolve()
				if (t.isMemberExpression(object) && getProperty(object) === 'default') {
					object = object.get('object').resolve();
				}

				// import path from 'path';
				const declared = t.isIdentifier(object) && object.scope.getBinding(object.node.name);
				if (declared && t.isImportDeclaration(declared.path.parentPath)) {
					declared.dereference();
					requires.add(declared.path.get('local'));
					return declared.path.parentPath.get('source').node.value === 'path';
				}

				// const _path = require('path');
				// const _path = _interopRequireDefault(require('path'));
				const parent = object.parentPath;
				let binding, id;
				if (t.isVariableDeclarator(parent)) {
					binding = parent.scope.getBinding(parent.node.id.name);
					id = parent.get('id');
				}
				if ((id && requires.has(id)) || isRequireFor(object, 'path', state)) {
					if (binding) {
						binding.dereference();
						requires.add(id);
					}
					return true;
				}
			}
		}
		return false;
	}

	function isRequireFor(path, specifier, state) {
		if (!t.isCallExpression(path)) return false;
		let callee = path.get('callee').resolve();
		if (t.isIdentifier(callee) && callee.node.name === 'require') {
			return path.get('arguments.0').evaluate().value === specifier;
		}
		if (t.isFunction(callee)) {
			const orig = t.cloneDeep(callee.node);
			const arg = callee.get('params.0');
			arg.scope.getBinding(arg.node.name).referencePaths.forEach(p => {
				p.replaceWith(t.numericLiteral(42));
			});
			const ret = callee.get('body.body').filter(t.isReturnStatement)[0];
			const evaluated = ret && ret.get('argument').evaluate();
			callee.replaceWith(orig);
			if (evaluated.confident && (evaluated.value === 42 || evaluated.value.default === 42)) {
				if (isRequireFor(path.get('arguments.0'), specifier)) {
					// remove the helper reference
					const id = callee.get('id');
					if (t.isIdentifier(id)) {
						const binding = id.scope.getBinding(id.node.name);
						binding.dereference();
						state.get('helpers').add(id);
					}
					return true;
				}
			}
		}
		return false;
	}

	function getProperty(path) {
		const prop = path.get('property');
		return path.node.computed ? prop.evaluate().value : prop.node.name;
	}

	function removeUnusedBinding(path) {
		const binding = path.scope.getBinding(path.node.name);
		if (binding.referenced) return;
		const parent = path.parentPath;
		if (t.isImportDeclaration(parent.parent) && parent.parent.specifiers.length === 1) {
			parent.parentPath.remove();
		} else {
			parent.remove();
		}
	}

	return {
		name: 'transform-inline-babel-preset',
		visitor: {
			Program: {
				enter(path, state) {
					state.set('requires', new Set());
					state.set('helpers', new Set());
				},
				exit(path, state) {
					Array.from(state.get('requires')).forEach(removeUnusedBinding);
					Array.from(state.get('helpers')).forEach(removeUnusedBinding);
				}
			},
			CallExpression(path, state) {
				const callee = path.get('callee');

				// require.resolve(x) --> require(x)
				if (
					t.isMemberExpression(callee) &&
					t.isIdentifier(callee.node.object) &&
					callee.node.object.name === 'require' &&
					callee.node.property.name === 'resolve'
				) {
					callee.replaceWith(t.identifier('require'));
				}

				if (isResolve(callee, state)) {
					callee.replaceWith(t.identifier('require'));
					const filename = state.filename || '/unknown.js';
					const MAP = {
						__dirname: filename.replace(/[\\/][^\\/]+?$/g, ''),
						__filename: filename
					};
					const args = path.get('arguments').map(arg => {
						const value = t.isIdentifier(arg) ? MAP[arg.node.name] : arg.evaluate().value;
						arg.remove();
						return value;
					});
					// path.pushContainer('arguments', t.stringLiteral(resolvePath(...args)));

					const resolved = resolvePath(...args);
					const importPath = './' + require('path').relative(MAP.__dirname, resolved);

					if (state.opts.module === false) {
						path.pushContainer('arguments', t.stringLiteral(importPath));
						return;
					}

					const uid = path.scope.generateUidIdentifier(path);
					const imp = t.importDeclaration([t.importDefaultSpecifier(t.clone(uid))], t.stringLiteral(importPath));
					path.scope.getProgramParent().path.unshiftContainer('body', imp);
					path.replaceWith(uid);
				}
			}
		}
	};
};
