import path from 'path';

/**
 * babel-preset-optimize is a preset that transforms unweildy source into something bundlers can optimize.
 * @param {Object} [options]
 * @param {boolean} [options.loose=false] Loose mode enables transforms that produce smaller output but may cause issues with certain code.
 */
export default function babelPresetModules(_, options = {}) {
	const loose = options.loose === true;

	return {
		plugins: [
			path.resolve(__dirname, './plugins/transform-umd-to-cjs'),
			path.resolve(__dirname, './plugins/transform-cjs-to-esm'),
			[path.resolve(__dirname, './plugins/transform-arguments'), { loose }],
			path.resolve(__dirname, './plugins/transform-array-spread')
		].filter(Boolean)
	};
}
