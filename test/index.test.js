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

import { babel, dent } from './_util';
import preset from '../src';

function babelPretty(code, options) {
	return babel(code, { presets: [[preset, options || {}]], compact: false });
}

describe('preset', () => {
	it('should be a valid babel plugin', () => {
		expect(preset).toEqual(expect.any(Function));

		expect(preset({})).toMatchObject({
			plugins: expect.any(Array)
		});
	});

	it('should do nothing to already-modern code', () => {
		expect(
			babelPretty(dent`
			const x = 1;
		`)
		).toMatchInlineSnapshot(`"const x = 1;"`);

		const code = dent`
			import foo from 'foo';
			export default foo;
		`;
		expect(babelPretty(code)).toEqual(code);
	});

	it('should pass a smoke test', () => {
		const code = dent`
			(function(f) {
				if (typeof module !== 'undefined' && module.exports) {
					module.exports = f(require('dep'));
				}
			})(function(d) {
				return function lib(opts) {
					opts = opts || {};
					return d.create(Object.assign({}, opts, {
						isLib: true
					}));
				}
			})
		`;

		expect(babelPretty(code, { cjs: true })).toMatchInlineSnapshot(`
		"var _default;
		import d from \\"dep\\";
		_default = function lib(opts) {
			opts = opts || {};
			return d.create(Object.assign({}, opts, {
				isLib: true
			}));
		};
		export default _default;"
	`);

		expect(babelPretty(code, { cjs: true, loose: true })).toMatchInlineSnapshot(`
		"var _default;
		import d from \\"dep\\";
		_default = function lib(opts = {}) {
			return d.create(Object.assign({}, opts, {
				isLib: true
			}));
		};
		export default _default;"
	`);
	});
});
