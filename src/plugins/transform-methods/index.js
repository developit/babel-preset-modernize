/**
 * Convert object properties with function values to object methods
 */

export default ({ types: t }) => ({
	name: 'transform-methods',
	visitor: {
		ObjectProperty(path) {
			const value = path.get('value');

			// Moving the function from another location/scope is unsafe:
			// let fn = value.resolve();
			let fn = value;

			// allow arrows, since they're cheaper than methods
			if (!t.isFunction(fn) || t.isArrowFunctionExpression(fn)) return;

			// if the property value was a function reference, make sure it's the only one
			if (fn !== value) {
				const idents = fn.getOuterBindingIdentifierPaths();
				for (let i in idents) {
					const binding = fn.scope.getBinding(i);
					const refs = binding.referencePaths.concat(binding.constantViolations);
					const isUnreferenced = refs.every(
						ref => ref.isDescendant(fn) || ref.equals(value) || ref.equals(binding.path)
					);
					if (!isUnreferenced) return;
				}

				// TODO: check for scope collisions as a result of hoisting
			}

			const { node } = fn;
			// @TODO this is unsafe, scope is lost
			const method = t.objectMethod('method', t.clone(path.node.key), node.params, node.body);
			method.async = node.async;
			method.generator = node.generator;
			path.replaceWith(method);

			if (fn !== value) {
				fn.remove();
			}
		}
	}
});
