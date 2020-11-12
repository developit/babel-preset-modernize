import path from 'path';

/**
 * A preset that transforms unweildy transpiled code into modern source that engines and bundlers can better optimize.
 * @param {Object} [options]
 * @param {boolean} [options.loose=false] Loose mode enables transforms that produce smaller output but may cause issues with certain code.
 * @param {boolean} [options.module=true] Assume code will be run in a Strict Mode or ES Modules environment.
 * @param {boolean} [options.webpack=true] Parse and explode Webpack bundles
 */
export default function babelPresetModules(_, options = {}) {
	const loose = options.loose === true;
	const module = options.module !== false;
	const webpack = options.webpack !== false;

	return {
		plugins: [
			path.resolve(__dirname, './plugins/transform-umd-to-cjs'),
			// Currently disabled, causes problems with non-CJS files:
			// path.resolve(__dirname, './plugins/transform-cjs-to-esm'),
			[path.resolve(__dirname, './plugins/transform-arguments'), { loose }],
			path.resolve(__dirname, './plugins/transform-destructuring'),
			path.resolve(__dirname, './plugins/transform-classes'),
			path.resolve(__dirname, './plugins/transform-methods'),
			// too broken:
			// path.resolve(__dirname, './plugins/transform-mangle-identifiers'),
			path.resolve(__dirname, './plugins/transform-fallbacks'),
			path.resolve(__dirname, './plugins/transform-iife-arrows'),
			path.resolve(__dirname, './plugins/transform-implicit-scope'),
			path.resolve(__dirname, './plugins/transform-array-spread'),
			path.resolve(__dirname, './plugins/transform-template-literals'),
			webpack && path.resolve(__dirname, './plugins/transform-optimize-webpack'),
			path.resolve(__dirname, './plugins/transform-remove-polyfills'),
			module && path.resolve(__dirname, './plugins/transform-implicit-strict')
		].filter(Boolean)
	};
}
