/**
 * Remove "use strict" directives.
 * Apply this for code that will be run in a strict environment (ES Modules or global Strict Mode).
 */

export default ({ types: t }) => ({
	name: 'transform-implicit-strict',
	visitor: {
		Directive(path) {
			const value = path.node.value;
			if (t.isDirectiveLiteral(value) && value.value === 'use strict') {
				path.remove();
			}
		}
	}
});
