/** @typedef {import('@babel/core')} babel */

/**
 * Transform transpiled Array and Object destructuring back to its source.
 *
 * @todo
 *   - check if isWithoutPropertiesHelper() detects Babel's strict-mode _objectWithoutProperties() helper
 *   - infer TypeScript rest helper without relying on `this.__rest` check
 *   - (easy) factor out `isNamedIdentifier(path, name)` helper
 *   - convert named identifier checks to scope-based equality lookups
 *   - somehow support destructuring assignment: `({ a } = b)`
 */
export default ({ types: t }) => {
	/**
	 * Detect Babel's objectWithoutProperties helper:
	 *   _objectWithoutPropertiesLoose(props, ["x", "y", "z"])
	 */
	function isWithoutPropertiesHelper(path, obj) {
		if (!t.isCallExpression(path)) return false;

		const args = path.get('arguments');

		let callee = resolveIntermediaries(path.get('callee'));
		if (args.length !== 2) return false;

		// rest without filtered properties is transpiled to Object.assign({}, orig)
		if (isObjectAssign(callee)) {
			if (!t.isObjectExpression(args[0]) || args[0].get('properties').length) return false;
			if (!t.isIdentifier(almostResolve(args[1]).node, obj.node)) return false;

			elideImport(callee);

			return true;
		}

		if (!t.isArrayExpression(args[1])) return false;

		for (let el of args[1].get('elements')) {
			if (!t.isStringLiteral(el)) return false;
		}

		if (t.isObjectExpression(args[0]) && !args[0].get('properties').length) {
			return true;
		}

		if (!t.isIdentifier(almostResolve(args[0]).node, obj.node)) return false;

		elideImport(callee);

		// Detect TypeScript's `this.__rest` helper
		if (t.isMemberExpression(callee)) {
			elideHelper(path.get('callee'));
			return (
				t.isThisExpression(callee.node.object) &&
				t.isIdentifier(callee.node.property, {
					name: '__rest'
				})
			);
		}

		return true;
	}

	// const rest = orig.slice(1)
	function isSliceHelper(path, ref) {
		if (!t.isMemberExpression(path)) {
			path = resolveIntermediaries(path);
			if (!t.isMemberExpression(path)) return false;
		}
		let obj = path.get('object');
		if (!t.isNodesEquivalent(obj.node, ref.node)) {
			obj = almostResolve(obj);
			if (!t.isNodesEquivalent(obj.node, ref.node)) {
				return false;
			}
		}
		if (!t.isIdentifier(path.node.property, { name: 'slice' })) {
			return false;
		}

		return true;
	}

	// Resolve an identifier through any aliases, but not back to its derived/constant value.
	function almostResolve(path) {
		path = path.resolve();
		if (!t.isIdentifier(path)) {
			const parent = path.parentPath;
			if (t.isVariableDeclarator(parent)) {
				return parent.get('id');
			} else if (t.isAssignmentExpression(parent)) {
				return parent.get('left');
			}
		}
		return path;
	}

	// Get the innermost resolved value of an expression that may be wrapped in conditions/guards/fallbacks we aren't concerned with
	function resolveIntermediaries(path) {
		path = path.resolve();
		// (0, ident)
		if (t.isSequenceExpression(path)) {
			let expr;
			for (expr of path.get('expressions')) {
				const v = expr.evaluate();
				if (!v.confident || v.value) break;
			}
			return resolveIntermediaries(expr);
		}
		// this && this.__foo (tslib style)
		if (t.isLogicalExpression(path) && path.node.operator === '&&' && t.isThisExpression(path.node.left)) {
			return resolveIntermediaries(path.get('right'));
		}
		// this.__foo || function(){ ... } (tslib style)
		if (t.isLogicalExpression(path) && path.node.operator === '||') {
			return resolveIntermediaries(path.get('left'));
		}
		// ident.default()
		if (t.isMemberExpression(path) && t.isIdentifier(path.node.property, { name: 'default' })) {
			return resolveIntermediaries(path.get('object'));
		}
		// _interopDefault(...)
		if (t.isCallExpression(path) && isImportOf(path.get('callee'), '@babel/runtime/helpers/interopRequireDefault')) {
			return resolveIntermediaries(path.get('arguments.0'));
		}
		return path;
	}

	// check if an identifier can be traced back to a given import or require specifier/pattern
	function isImportOf(path, libPattern) {
		path = path.resolve();
		let specifier;
		if (t.isCallExpression(path) && t.isIdentifier(path.node.callee, { name: 'require' })) {
			specifier = path.get('arguments.0').node.value;
		} else if (t.isImportSpecifier(path.parent)) {
			specifier = path.parentPath.parentPath.get('source').node.value;
		}
		if (specifier) {
			if (typeof libPattern === 'string') {
				return specifier === libPattern;
			}
			return libPattern.test(specifier);
		}
		return false;
	}

	// Remove any unused import of a pruned helper
	function elideImport(path) {
		// if this is an import
		if (isImportOf(path, { test: () => true })) {
			// todo: manually crawl up instead of assuming a declaration here
			const idents = path.getStatementParent().getBindingIdentifierPaths();
			for (let ident in idents) {
				const binding = path.scope.getBinding(ident);
				binding.dereference();
				if (!binding.referenced) {
					const parent = path.parentPath;
					if (
						t.isCallExpression(parent) &&
						isImportOf(parent.get('callee'), '@babel/runtime/helpers/interopRequireDefault')
					) {
						elideImport(parent.get('callee').resolve());
					}
					binding.path.remove();
				}
			}
		}
	}

	// Dereference a helper, removing it if no longer used
	function elideHelper(path) {
		if (t.isIdentifier(path)) {
			const p = path.getOuterBindingIdentifierPaths();
			for (let ident in p) {
				const binding = path.scope.getBinding(ident);
				binding.dereference();
				if (!binding.referenced) {
					binding.path.remove();
				}
			}
		}
	}

	function isObjectAssign(path) {
		path = path.resolve();
		if (t.isMemberExpression(path)) {
			const obj = path.get('object').resolve();
			const prop = path.get('property').resolve();
			return t.isIdentifier(obj.node, { name: 'Object' }) && t.isIdentifier(prop.node, { name: 'assign' });
		}
		// TODO: check for core-js/helper versions of _assign()?
		// or, this could simply rely on running after the polyfills transform
		return false;
	}

	/** @param {babel.NodePath<babel.types.Identifier>} path */
	function visitParam(path) {
		if (!t.isIdentifier(path)) return;

		/*
        // we only care about parameters with a single binding identifier,
        // since more than one would indicate native destructuring.
        // (ignore single destructure too `({ a })=>{}`)
		const idents = path.getOuterBindingIdentifierPaths();
        const keys = Object.keys(idents);
        if (keys.length !== 1) return;
        if (idents[keys[0]] !== path) return;
        */

		const binding = path.scope.getBinding(path.node.name);
		if (!binding) {
			console.warn(`No binding for ${path.node.name}`);
			return;
		}
		const referencePaths = binding.referencePaths;
		if (!binding.constant || !referencePaths.length || binding.constantViolations.length) return;

		/** @type {babel.NodePath<babel.types.RestElement>} */
		let rest;

		let restOffset,
			isIterable = false,
			properties = [];

		const isValidRefPath = p => {
			const parent = p.parentPath;
			const root = parent.parentPath;

			// NOTE: the following works, but is disabled because it is actually be necessary in practise.
			/*
			// aliased intermediary variable (used by array rest)
			if (t.isVariableDeclarator(parent)) {
              if (p.key === 'init' && t.isIdentifier(parent.get('id'))) {
                const aliasBinding = parent.scope.getBinding(parent.node.id.name);
                if (!aliasBinding.constant || aliasBinding.constantViolations.length) return false;
                const valid = aliasBinding.referencePaths.every(isValidRefPath);
                // we can remove this intermediary variable
                if (valid) root.remove();
                return valid;
              }
            }
            else if (isSliceHelper(parent, path)) {
			*/
			if (isSliceHelper(parent, path)) {
				rest = root.parentPath;
				isIterable = true;
				restOffset = root.get('arguments.0').node.value;
				return true;
			} else if (t.isMemberExpression(parent)) {
				if (p.key === 'object' && t.isVariableDeclarator(root)) {
					// todo: check parent.node.property is string/identifier
					properties.push(root);
					return true;
				}
			} else if (isWithoutPropertiesHelper(parent, path)) {
				rest = root;
				return true;
			}
			return false;
		};
		const isDestructure = referencePaths.every(isValidRefPath);
		if (!isDestructure) return;

		const pattern = [];
		const defined = [];

		for (let prop of properties) {
			let id = prop.node.init.property;
			let computed = prop.node.init.computed;
			let v = t.isIdentifier(id) ? id.name : null;
			if (computed) {
				const resolved = prop.get('init.property').resolve().node;
				if (t.isLiteral(resolved)) {
					v = String(resolved.value);
					// Might as well optimize static computed keys ({['a']: a} = ..)
					computed = false;
					id = t.identifier(v);
				}
			}
			if (isIterable) {
				pattern[v] = t.clone(prop.node.id);
			} else {
				defined.push(v);
				pattern.push(t.objectProperty(t.clone(id), t.clone(prop.node.id), computed, true));
			}
			prop.remove();
		}

		if (rest) {
			if (isIterable) {
				pattern[restOffset || pattern.length] = t.restElement(t.clone(rest.node.id));
			} else {
				// find any additional "filtered out" properties and add them
				const filteredOut = rest.get('init.arguments.1.elements');
				if (Array.isArray(filteredOut) && filteredOut.length) {
					filteredOut.forEach(p => {
						const prop = p.node.value;
						if (!defined.includes(prop)) {
							pattern.push(t.objectProperty(t.identifier(prop), t.identifier(prop), false, true));
						}
					});
				}
				pattern.push(t.restElement(t.clone(rest.node.id)));
			}
			rest.remove();
		}

		if (isIterable) {
			// fill the holes in with null
			for (let i = pattern.length; i--; ) {
				if (!pattern[i]) pattern[i] = null;
			}

			// Workaround while waiting https://github.com/babel/babel/pull/10917
			const arr = t.arrayPattern([]);
			arr.elements = pattern;
			path.replaceWith(arr);
			//path.replaceWith(t.arrayPattern(pattern));
		} else {
			path.replaceWith(t.objectPattern(pattern));
		}

		// Check if any of the destructured identifiers are themselves destructured:
		path.scope.crawl();
		const newIdents = path.getBindingIdentifierPaths();
		for (let ident in newIdents) {
			if (t.isIdentifier(newIdents[ident])) {
				visitParam(newIdents[ident]);
			}
		}
	}

	return {
		name: 'transform-destructuring',
		visitor: {
			Program: {
				// Track Object.assign/_assign() usage within the module.
				// If we end up removing all callsites that needed it,
				// we can remove the polyfill/helper import entirely.
				enter(path, state) {
					state.set('assignUsage', new Set());
				},
				exit(path, state) {
					const assigns = state.get('assignUsage');
					const libs = /core-js\/modules\/es\.object\.assign|(^(object-assign|object.assign)$)/;
					const remaining = Array.from(assigns).filter(p => !p.removed).length;
					if (!remaining) {
						path.get('body').forEach(p => {
							if (t.isExpressionStatement(p)) {
								p = p.get('expression');
							}
							if (t.isCallExpression(p)) {
								if (isImportOf(p, libs)) {
									p.remove();
								}
							}
						});
					}
				}
			},
			MemberExpression(path, state) {
				if (isObjectAssign(path)) {
					state.get('assignUsage').add(path);
				}
			},

			// Explicitly start checking for destructuring of parameters
			Function(path) {
				path.get('params').forEach(visitParam);
			},

			// Also find any destructured variable declarations
			VariableDeclarator(path, state) {
				if (state.opts.parametersOnly) return;
				visitParam(path.get('id'));
			}
		}
	};
};