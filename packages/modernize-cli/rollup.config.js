import { resolve } from 'path';
import shebangPlugin from 'rollup-plugin-preserve-shebang';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import builtins from 'builtin-modules';
import terser from 'terser';

/** @type {import('rollup').RollupOptions} */
const config = {
	input: 'src/cli.js',
	inlineDynamicImports: true,
	output: {
		file: 'dist/modernize.cjs',
		format: 'cjs',
		compact: true,
		freeze: false,
		interop: false,
		namespaceToStringTag: false,
		externalLiveBindings: false,
		preferConst: true,
		plugins: [
			{
				name: 'minify',
				async renderChunk(code) {
					const result = await terser.minify(code, {
						ecma: 2019,
						compress: false,
						mangle: false,
						sourceMap: false,
						output: {
							comments: false,
							inline_script: false
						}
					});
					return result.code || null;
				}
			}
		]
	},
	external: [...builtins],
	plugins: [
		shebangPlugin(),
		commonjs({
			exclude: [/\.mjs$/, resolve('src')],
			ignore: builtins,
			transformMixedEsModules: true
		}),
		nodeResolve({
			preferBuiltins: true,
			extensions: ['.mjs', '.js', '.json', '.es6', '.node']
		}),
		json()
	]
};

export default config;
