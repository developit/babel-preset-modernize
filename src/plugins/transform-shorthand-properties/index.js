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
