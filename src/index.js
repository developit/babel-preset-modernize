import path from 'path';

/**
 * babel-preset-optimize is a preset that transforms unweildy source into something bundlers can optimize.
 * @param {Object} [options]
 * @param {boolean} [options.loose=false] Loose mode enables transforms that produce smaller output but may cause issues with certain code.
 * @param {boolean} [options.module=true] Assume code will be run in a Strict Mode or ES Modules environment.
 */
export default function babelPresetModules(_, options = {}) {
	const loose = options.loose === true;
	const module = options.module !== false;

	return {
		plugins: [
			path.resolve(__dirname, './plugins/transform-umd-to-cjs'),
			// Currently disabled, causes problems with non-CJS files:
			// path.resolve(__dirname, './plugins/transform-cjs-to-esm'),
			[path.resolve(__dirname, './plugins/transform-arguments'), { loose }],
			path.resolve(__dirname, './plugins/transform-destructuring'),
			path.resolve(__dirname, './plugins/transform-methods'),
			path.resolve(__dirname, './plugins/transform-mangle-identifiers'),
			path.resolve(__dirname, './plugins/transform-iife-arrows'),
			path.resolve(__dirname, './plugins/transform-implicit-scope'),
			path.resolve(__dirname, './plugins/transform-array-spread'),
			path.resolve(__dirname, './plugins/transform-optimize-webpack'),
			path.resolve(__dirname, './plugins/transform-remove-polyfills'),
			module && path.resolve(__dirname, './plugins/transform-implicit-strict')
		].filter(Boolean)
	};
}
