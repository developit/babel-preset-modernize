import path from 'path';

/**
 * babel-preset-optimize is a preset that transforms unweildy source into something bundlers can optimize.
 * @param {Object} [options]
 * @param {boolean} [options.loose=false] Loose mode skips seldom-used transforms, like fixing function.name inference in Edge.
 */
export default function babelPresetModules(options = {}) {
	// const loose = options.loose === true;

	return {
		plugins: [
			path.resolve(__dirname, './plugins/transform-umd-commonjs')
		].filter(Boolean)
	};
}
