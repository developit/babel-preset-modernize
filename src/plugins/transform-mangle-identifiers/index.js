/**
 * Convert all identifiers to the shortest available
 * NOTE: this breaks in too many cases to be usable yet.
 */

export default ({ types: t }) => {
	const sequence = new Set();
	const chars = 'functionvarlets'.split('');
	let vchars = 'abcdefghijklmnopqrstuvwxyz';
	vchars += vchars.toUpperCase() + '$_';
	let mchars = vchars + '0123456789';
	function v(c) {
		let s = '',
			v = 54,
			ch = vchars;
		do {
			s = ch[c % v] + s;
			c = (c / v) | 0;
			ch = mchars;
			v = 64;
		} while (c > 0);
		return s;
	}
	for (let i = 0; i < 99; i++) {
		const x = v(i);
		if (!chars.includes(x)) chars.push(x);
	}

	return {
		name: 'transform-mangle-identifiers',
		pre() {
			const opts = this.file.opts.generatorOpts;
			opts.retainLines = false;
			opts.comments = false;
			opts.compact = true;
			opts.minified = false;
		},
		visitor: {
			Program: {
				enter(path, state) {
					state.set('count', 0);
					state.set('identifiers', new Set());
					state.set('visited', new Set());
				},
				exit(path, state) {
					const identifiers = state.get('identifiers');
					for (const ident of identifiers) {
						sequence.add(ident);
					}
				}
			},
			Identifier(path, state) {
				const name = path.node.name;
				const binding = path.scope.getBinding(name);
				const visited = state.get('visited');
				// if (!binding || binding.path !== path) return;
				if (!binding || visited.has(binding.path)) return;

				for (let ref of binding.referencePaths) {
					if (t.isExpressionStatement(ref)) ref = ref.parentPath;
					// console.log(ref);
					if (t.isProgram(ref.parent)) {
						ref.remove();
						binding.dereference();
					}
				}

				if (!binding.referenced) {
					if (
						t.isVariableDeclarator(path.parent) ||
						t.isImportSpecifier(path.parent) ||
						t.isImportDefaultSpecifier(path.parent)
					) {
						path = path.parentPath;
					}
					// TODO: it would be nice to have the option to elide unused imports.
					path.remove();
					return;
				}

				const used = state.get('identifiers');
				let minified;
				for (const potential of sequence) {
					if (!used.has(potential) && !path.scope.hasBinding(potential)) {
						used.add(potential);
						minified = potential;
						break;
					}
				}
				if (!minified) {
					let count = state.get('count');
					minified = chars[count++];
					state.set('count', count);
					sequence.add(minified);
					used.add(minified);
				}
				path.scope.rename(name, minified);
			}
		}
	};
};
