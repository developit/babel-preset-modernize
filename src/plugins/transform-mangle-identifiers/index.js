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
 * Convert all identifiers to the shortest available
 * NOTE: this breaks in too many cases to be usable yet.
 *
 * @param {babel} api
 * @returns {babel.PluginObj}
 */
export default () => {
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

				if (!binding || visited.has(binding.path)) return;

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
