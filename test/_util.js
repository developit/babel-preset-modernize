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
	let str = args[0].reduce((acc, str, index) => acc + args[index] + str);
	const m = str.match(/([\t ]*)[^\s\n]/m);
	if (!m) return str;
	const whitespace = m[1];
	str = str.replace(new RegExp('^' + whitespace, 'gm'), '');
	return str.trim(); //.replace(/\t/g, '  ');
}

export function babel(code, config) {
	const out = transform(code, {
		...options,
		...config
	}).code;
	return out
		.replace(/\n\n+/g, '\n')
		.replace(/ {2}/g, '\t')
		.replace(/,\n\t\t/g, ',\n\t')
		.trim();
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
