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

describe('transform-shorthand-properties', () => {
	it('should convert non-shorthand properties to shorthand', () => {
		expect(
			babel(
				dent`
					(foo => ({
						foo: foo
					}));
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`
		"foo => ({
			foo
		});"
	`);
	});

	it('should convert locally-scoped identifiers to their shorthand names', () => {
		expect(
			babel(
				dent`
					(a => ({
						foo: a
					}));
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`
		"foo => ({
			foo
		});"
	`);
	});

	it('should ignore properties with already bound local names', () => {
		expect(
			babel(
				dent`
					((foo, a) => ({
						foo: a
					}));
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`
		"(foo, a) => ({
			foo: a
		});"
	`);
	});
});
