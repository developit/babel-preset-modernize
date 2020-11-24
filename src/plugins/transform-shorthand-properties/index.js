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
 * Convert object properties to shorthand when their values are locally-scoped identifiers
 */

export default ({ types: t }) => ({
	name: 'transform-shorthand-properties',
	visitor: {
		ObjectProperty(path) {
			// ignore already-shorthand properties, or special properties
			if (path.node.shorthand || path.node.method || path.node.computed) return;

			const value = path.get('value');
			// ignore inline values
			if (!t.isIdentifier(value)) return;

			const name = value.node.name;
			const key = path.node.key.name;

			if (name === key) {
				path.node.shorthand = true;
				return;
			}

			const binding = value.scope.getOwnBinding(name);

			// Ignore reassigned values and constants, which will get inlined anyway.
			// TODO: revisit this decision
			if (!binding.constant || binding.hasValue) return;

			// If there's already a variable with the name of our key, we can't rename.
			if (!key || value.scope.hasBinding(key)) return;

			value.scope.rename(name, key);
			path.node.shorthand = true;
		}
	}
});
