/**
 * Turn UMD modules into CommonJS ones, which can then be fed into the CommonJS to ESM transform.
 */

export default ({ types: t, parse }) => {
	function prependProgramBody(program, node) {
		const imports = program.get('body').filter(p => t.isImportDeclaration(p.node));
		const last = imports[imports.length-1];
		if (last) {
			last.insertAfter(node);
		}
		else {
			program.unshiftContainer('body', node);
		}
	}

	function isExports(path) {
		const resolved = path.resolve();
		if (isModuleExports(resolved)) return true;

		// Check that `exports` is being referenced as a free global:
		const binding = resolved.scope.getBinding('exports');
		if (binding) return false;

		// Ignore `foo.exports`:
		const isMember = t.isMemberExpression(resolved.parentPath);
		if (isMember && path.key=='property') return false;

		return t.isIdentifier(resolved) && resolved.node.name === 'exports';
	}

	function isModuleExports(init) {
		if (!t.isMemberExpression(init)) return false;

		// check that `module` is being referenced as a free global:
		// @todo: account for direct shadowing ((module)=>module.foo())(module)
		const binding = init.scope.getBinding('module');
		if (binding) return false;

		// const obj = init.get('object').resolve();
		// if (obj.node !== init.scope.getProgramParent().globals.module) return false;

		// Check that this is `.exports`:
		const prop = init.get('property').resolve();
		return t.isIdentifier(prop) && prop.node.name === 'exports';
	}

	function isPropertyAccess(path) {
		const parent = path.parentPath;
		if (path.key=='object' && t.isMemberExpression(parent)) {
			// De-opt to namespace import (commonjs compat) for imported[foo]
			if (parent.node.computed) {

				// Exception: if we can statically determine this is a property access, replace it with one:
				const val = parent.get('property').evaluate();
				if (val && val.confident && t.isValidIdentifier(val.value)) {
					// keep a reference to any identifier for later pruning
					const isIdent = t.isIdentifier(parent.get('property'));
					const ident = parent.get('property').node.name;

					// inline the property access
					parent.get('property').replaceWith(t.identifier(val.value + ''));

					// if that was the only reference to the intermediary variable, remove it:
					if (isIdent) {
						path.scope.crawl();
						const binding = path.scope.getBinding(ident);
						if (!binding.referenced) {
							binding.path.remove();
						}
					}

					return true;
				}
				return false;
			}
			return true;
		}
		// @TODO de-opt for ...rest props
		if (t.isVariableDeclarator(parent) && t.isObjectPattern(parent.node.id)) {
			// Exception: can't compile `const { ...a } = imported`
			if (parent.get('id.properties').some(t.isRestElement)) return false;

			return true;
		}
		return false;
	}

	return {
		name: 'transform-cjs-to-esm',
		visitor: {
			MemberExpression(path, state) {
				if (state.get('error')) return;
				if (isModuleExports(path)) {
					state.get('toReplace').push(path);
				}
			},
			Identifier(path, state) {
				if (state.get('error')) return;
				if (isExports(path)) {
					state.get('toReplace').push(path);
				}
			},
			Program: {
				enter(path, state) {
					state.set('imports', []);
					state.set('exports', []);
					state.set('locals', new Map());
					state.set('toReplace', []);
					state.set('replaced', new Set());
				},
				exit(path, state) {
					if (state.get('error')) {
						const prog = parse(path.hub.getCode()).program;
						path.replaceWith(prog);
						path.stop();
						return;
					}

					const replaced = state.get('replaced');
					const imports = state.get('imports');
					for (const imp of imports) {
						prependProgramBody(path, imp);
					}

					const exports = state.get('exports');
					if (exports.length) {
						path.pushContainer(
							'body',
							t.exportNamedDeclaration(null, exports)
							//t.exportNamedDeclaration(null, exports.map(({ id, local }) => t.exportSpecifier(t.identifier(id), local)))
						);
					}

					const defaultExport = state.get('defaultExport');
					if (defaultExport) {
						path.pushContainer(
							'body',
							t.exportDefaultDeclaration(defaultExport)
						);
					}

					const locals = state.get('locals');
					for (const p of state.get('toReplace')) {
						if (t.isMemberExpression(p.parentPath)) {
							const prop = p.parentPath.get('property');
							const id = t.isIdentifier(prop) ? prop.node.name : t.isStringLiteral(prop) ? prop.node.value : null;
							const local = locals.get(id);
							if (local) {
								p.parentPath.replaceWith(t.clone(local));
							}
							else {
								console.warn(p.buildCodeFrameError('Unable to remove usage of module.exports cleanly').message);
								p.replaceWith(t.objectExpression([]));
							}
						}
						// remove unreferenced exports object aliases (eg: const lib = exports)
						// TODO: instead of scope.crawl(), iterate over binding references and look for unremoved ones
						else if (t.isVariableDeclarator(p.parent) && (path.scope.crawl(), true) && !p.scope.getBinding(p.parent.id.name).referenced) {
							p.parentPath.remove();
						}
						else if (t.isMemberExpression(p) && isModuleExports(p) && locals.get('default')) {
							p.replaceWith(t.clone(locals.get('default')));
						}
						else if (!replaced.has(p)) {
							if (p.parentKey !== 'left' && !t.isVariableDeclarator(p.parentPath)) {
								p.replaceWith(t.nullLiteral());
							}
						}
					}
				}
			},
			AssignmentExpression: {
				exit(path, state) {
					// ignore assignments that aren't in the program body
					if (state.get('error') || !t.isProgram(path.getStatementParent().parent)) {
						return;
					}

					const replaced = state.get('replaced');
					const exports = state.get('exports');
					const locals = state.get('locals');
					const subj = path.get('left');
					if (t.isMemberExpression(subj) || t.isIdentifier(subj)) {
						const obj = subj.get('object');

						let id, prop, isDefault = false;
						if (isExports(subj) || isModuleExports(subj)) {
							isDefault = true;
							id = '_default';
							replaced.add(subj);
						}
						else if (isExports(obj) || isModuleExports(obj)) {
							//replaced.add(obj);
							prop = subj.get('property');
							id = t.isIdentifier(prop) ? prop.node.name : t.isStringLiteral(prop) ? prop.node.value : null;
						}

						const right = path.get('right').resolve();
						if (id) {
							if (isDefault && t.isObjectExpression(right)) {
								let keys = {};
								for (const prop of right.get('properties')) {
									const v = prop.get('value');
									if (!t.isIdentifier(v)) {
										const ident = path.scope.generateUidIdentifierBasedOnNode(prop.node);
										if (t.isObjectMethod(prop.node)) {
											right.getStatementParent().insertBefore(t.functionDeclaration(ident, prop.node.params, prop.node.body));
											prop.replaceWith(t.objectProperty(t.clone(prop.node.key), t.clone(ident)));
										}
										else {
											right.getStatementParent().insertBefore(t.variableDeclaration('const', [
												t.variableDeclarator(ident, t.clone(v.node))
											]));
											v.replaceWith(t.clone(ident));
										}
									}
									let val = prop.node.value;
									keys[prop.node.key.name] = val;
									locals.set(prop.node.key.name, val);
									exports.push(t.exportSpecifier(val, prop.node.key));
								}
								path.parentPath.remove();

								// TODO: verify this. Currently export object aliases are not properly culled/retained.
								state.get('toReplace').push(right);

								const binding = right.scope.getBinding(path.node.right.name);
								if (binding) {
									for (const ref of binding.referencePaths) {
										if (t.isMemberExpression(ref.container)) {
											ref.parentPath.replaceWith(keys[ref.container.property.name]);
										}
									}
								}
								return;
							}

							if (!id.match(/^[a-z_$][a-z0-9_$]*$/gi)) {
								console.error('Cannot transform CJS: invalid export name "'+id+'"');
								state.set('error', true);
							}

							const binding = path.scope.getBinding(id);
							const isReserved = !t.isValidIdentifier(id);
							const local = isDefault || binding || isReserved ? path.scope.generateUidIdentifier(id) : t.identifier(id);
							locals.set(id, local);
							if (!isDefault && !binding && !isReserved && path.parentPath.isStatement()) {
								// the variable is free and this is a statement.
								// we can declare and export inline
								const exported = t.exportNamedDeclaration(
									t.variableDeclaration('const', [
										t.variableDeclarator(t.identifier(id), t.clone(right.node))
									]),
									[]
								);
								path.parentPath.replaceWith(exported);
							}
							else {
								// need to explicitly export the aliased identifier
								path.scope.push({ id: local });
								if (isDefault) {
									state.set('defaultExport', local);
									//path.getStatementParent().insertAfter(
									//  t.exportDefaultDeclaration(local)
									//);
								}
								else {
									exports.push(t.exportSpecifier(local, t.identifier(id)));
								}
								subj.replaceWith(local);
							}
						}
					}
				}
			},
			CallExpression(path, state) {
				if (state.get('error')) return;

				const imports = state.get('imports');
				const locals = state.get('locals');
				const callee = path.node.callee;
				let specifiers = [];
				let local;
				let likelyDefaultImport = false;
				let replaced = false;
				let addImport = true;
				if (t.isIdentifier(callee) && callee.name==='require') {
					if (!t.isStringLiteral(path.node.arguments[0])) {
						console.warn('Dynamic require() usage.');
						return;
					}
					const source = path.node.arguments[0].value;

					if (t.isMemberExpression(path.parent) && path.key === 'object') {
						const prop = path.parent.property;
						let name = t.isIdentifier(prop) ? prop.name : t.isStringLiteral(prop) ? prop.value : null;
						if (name) {
							local = path.scope.generateUidIdentifierBasedOnNode(prop);
							specifiers.push(t.importSpecifier(local, t.identifier(name)));
							path.parentPath.replaceWith(local);
							replaced = true;
						}
					}
					else if (t.isAssignmentExpression(path.parent) || t.isVariableDeclarator(path.parent)) {
						if (path.key !== 'right' && path.key !== 'init') {
							console.warn('Deoptimizing: require() in left-hand side expression');
							return;
						}
						const pattern = path.parentPath.get(path.key === 'init' ? 'id' : 'left');
						if (t.isIdentifier(pattern) && t.isProgram(pattern.scope.block) && !path.scope.checkBlockScopedCollisions(pattern.node)) {
							// top-level assignment: hoist to an import directly
							local = locals.has(source) ? t.identifier(locals.get(source)) : pattern.node;

							// @TODO refactor to remove duplication with object pattern handling

							// const ns = require('lib')
							const binding = path.scope.getBinding(local.name);
							if (binding && binding.constant && binding.referencePaths.every(isPropertyAccess)) {
								//console.log('inferred namespace binding:', local.name);
								let idents = new Map();
								for (const p of binding.referencePaths) {
									if (t.isMemberExpression(p.parent)) {
										// ns.foo() or ns["foo"]()
										const prop = p.parent.property;
										const id = t.isStringLiteral(prop) ? prop.value : prop.name;
										let localBinding = idents.get(id);
										if (!localBinding) {
											localBinding = path.scope.generateUidIdentifierBasedOnNode(prop);
											idents.set(id, localBinding);
											specifiers.push(
												t.importSpecifier(localBinding, t.identifier(id))
											);
										}
										p.parentPath.replaceWith(localBinding);
									}
									else {
										// const { foo } = ns
										const pattern = p.parentPath.get('id');
										const locals = [];
										for (const prop of pattern.get('properties')) {
											const { key, value } = prop.node;

											let localBinding = idents.get(key.name);
											if (!localBinding) {
												localBinding = path.scope.generateUidIdentifierBasedOnNode(value);
												idents.set(key.name, localBinding);
												specifiers.push(
													t.importSpecifier(t.clone(localBinding), t.clone(key))
												);
											}
											locals.push(t.variableDeclarator(t.clone(value), t.clone(localBinding)));
										}
										p.parentPath.parentPath.replaceWith(t.variableDeclaration('let', locals));
									}
								}

								replaced = true;
							}
							else {
								// the local identifier is referenced dynamicall or reassigned.
								// this means it's extremely unlikely to be a namespace import,
								// so we'll compile it to a commonjs interop default.
								likelyDefaultImport = true;
							}

							locals.set(source, pattern.node.name);
							path.parentPath.remove();
							replaced = true;
						}
						else {
							const existingLocal = locals.has(source) && t.identifier(locals.get(source));
							if (existingLocal) {
								addImport = false;
								if (existingLocal.name === pattern.name) {
									replaced = true;
									path.parentPath.remove();
								}
							}
							local = existingLocal || path.scope.generateUidIdentifierBasedOnNode(pattern.node || path.node.arguments[0]);
						}

						if (t.isObjectPattern(pattern)) {
							const locals = [];
							for (const prop of pattern.get('properties')) {
								const { key, value } = prop.node;

								if (t.isProgram(prop.scope.block) && !prop.scope.checkBlockScopedCollisions(pattern.node)) {
									specifiers.push(
										t.importSpecifier(t.clone(value), t.clone(key))
									);
								}
								else {
									const intermediary = prop.scope.generateUidIdentifierBasedOnNode(value);
									specifiers.push(
										t.importSpecifier(intermediary, t.clone(key))
									);
									locals.push(t.variableDeclarator(t.clone(value), intermediary));
								}
							}
							if (locals.length) {
								path.parentPath.parentPath.replaceWith(t.variableDeclaration('let', locals));
							}
							else {
								path.parentPath.parentPath.remove();
							}
							local = t.variableDeclaration('let', locals);
							replaced = true;
							//local = path.scope.generateUidIdentifierBasedOnNode(pattern.node);
							//specifier = t.importSpecifier(local, t.identifier(name));
							//path.parentPath.replaceWith(local);
							//replaced = true;
						}
					}

					local = local || path.scope.generateUidIdentifier();
					if (!specifiers.length) {
						if (likelyDefaultImport) {
							specifiers.push(t.importDefaultSpecifier(local));
						}
						else {
							specifiers.push(t.importNamespaceSpecifier(local));
						}
					}
					if (addImport) {
						const importDecl = t.importDeclaration(
							specifiers,
							t.stringLiteral(source)
						);
						imports.push(importDecl);
					}
					if (!replaced) {
						path.replaceWith(local);
					}
				}
			}
		}
	};
};
