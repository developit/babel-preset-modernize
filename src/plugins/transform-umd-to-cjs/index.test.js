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

import { babel, dent } from '../../../test/_util';
import plugin from '.';

const CONFIG = {
	compact: false,
	plugins: [plugin]
};

const webpackUmd = (deps, code) => dent`
	/** a umd bundle */
	(function umd(root, factory) {
		if(typeof exports === 'object' && typeof module === 'object')
			module.exports = factory(${Object.keys(deps).map(k => deps[k])});
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["LIBNAME"] = factory();
		else
			root["LIBNAME"] = factory();
	})(this, function(${Object.keys(deps)}) {
${code}
	});
`;

describe('transform-umd-to-cjs', () => {
	it('should transform noop UMD', () => {
		const code = webpackUmd({}, '');
		expect(babel(code, CONFIG)).toMatchInlineSnapshot(`""`);
	});

	it('should transform UMD without dependencies', () => {
		const code = webpackUmd(
			{},
			dent`
				var exports = {};
				exports.foo = 42;
				return exports;
			`
		);
		expect(babel(code, CONFIG)).toMatchInlineSnapshot(`
		"/** a umd bundle */
		var exports = {};
		exports.foo = 42;
		module.exports = exports;"
	`);
	});

	it('should transform basic UMD', () => {
		const code = webpackUmd(
			{ a: `require('./a')` },
			dent`
				var exports = {};
				exports.foo = a.bar();
				return exports;
			`
		);
		expect(babel(code, CONFIG)).toMatchInlineSnapshot(`
		"const a = require('./a');
		/** a umd bundle */
		var exports = {};
		exports.foo = a.bar();
		module.exports = exports;"
	`);
	});

	it('should handle rogue bindings', () => {
		const code = webpackUmd({ a: `require('./a')` }, `return a`).replace(
			'function umd',
			'function a'
		);
		expect(babel(code, CONFIG)).toMatchInlineSnapshot(`
		"const a = require('./a');
		/** a umd bundle */
		module.exports = a;"
	`);
	});
});
