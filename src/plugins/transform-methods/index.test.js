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

describe('transform-methods', () => {
	it('should not convert arrow functions', () => {
		expect(
			babel(
				dent`
					({
						foo: () => {}
					});
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`
			"({
				foo: () => {}
			});"
		`);
	});

	it('should not non-functions', () => {
		expect(
			babel(
				dent`
					const foo = 1;
					({
						foo,
						bar: 42
					});
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`
			"const foo = 1;
			({
				foo,
				bar: 42
			});"
		`);
	});

	it('should convert function properties to methods', () => {
		expect(
			babel(
				dent`
					({
						foo: function() {}
					});
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`
			"({
				foo() {}
			});"
		`);
	});

	it('should not move functions referenced only as property values to methods', () => {
		expect(
			babel(
				dent`
					function foo() {}
					({
						foo
					});
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`
			"function foo() {}
			({
				foo
			});"
		`);
	});
});
