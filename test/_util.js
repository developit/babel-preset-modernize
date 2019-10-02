import { promisify } from 'util';
import fs, { mkdir } from 'fs';
// import path from 'path';
import { transform } from '@babel/core';
// import gzipSize from 'gzip-size';
// import terser from 'terser';
// import chalk from 'chalk';

const options = {
	babelrc: false,
	configFile: false,
	sourceType: 'module',
	compact: true
};

export function dent(...args) {
	const str = args[0].reduce((acc, str, index) => acc + args[index] + str);
	const whitespace = str.match(/([\t ]*)[^\s\n]/m)[1];
	return str.replace(new RegExp('^' + whitespace, 'gm'), '').trim().replace(/\t/g, '  ');
}

export function babel(code, config) {
	return transform(code, {
		...options,
		...config
	}).code.replace(/\n\n+/g, '\n').trim();
}

// export function compressedSize(code, options = {}) {
// 	return gzipSize(terser.minify(code, {
// 		mangle: true,
// 		compress: true,
// 		sourceMap: false,
// 		module: true,
// 		ecma: 8,
// 		...options
// 	}).code);
// }

export const readdir = promisify(fs.readdir);
export const readFile = promisify(fs.readFile);
export const writeFile = promisify(fs.writeFile);
export function mkdirp(f) {
	return promisify(mkdir)(f).catch(() => {});
}
