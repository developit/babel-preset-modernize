/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { promisify } from 'util';
import fs, { mkdir } from 'fs';
import { transform } from '@babel/core';

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

export const readdir = promisify(fs.readdir);
export const readFile = promisify(fs.readFile);
export const writeFile = promisify(fs.writeFile);
export function mkdirp(f) {
	return promisify(mkdir)(f).catch(() => {});
}
