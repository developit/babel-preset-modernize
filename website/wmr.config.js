import noParse from './plugins/noparse.js';
import treePlugin from './plugins/tree.js';
import asyncPrefixPlugin from './plugins/async-prefix.js';

/** @returns {Partial<import('wmr').Options>} */
export default ({ cwd }) => ({
	plugins: [
		noParse({
			include: /^(codemirror|terser|babel-preset-modernize|@babel\/standalone|js-beautify)(\/|$)/,
			exclude: /\.s?[ca]ss$/
		}),
		treePlugin({ cwd }),
		asyncPrefixPlugin()
	]
});
