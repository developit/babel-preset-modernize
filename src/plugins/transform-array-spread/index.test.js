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

describe('transform-array-spread', () => {
	it('should transform noop', () => {
		expect(babel(dent`
			[1, 2];
		`, CONFIG)).toMatchInlineSnapshot(`"[1, 2];"`);

		expect(babel(dent`
			[1, 2]["concat"]();
		`, CONFIG)).toMatchInlineSnapshot(`"[1, 2][\\"concat\\"]();"`);

		expect(babel(dent`
			[1].concat(x);
		`, CONFIG)).toMatchInlineSnapshot(`"[1].concat(x);"`);

		expect(babel(dent`
			x.concat(1);
		`, CONFIG)).toMatchInlineSnapshot(`"x.concat(1);"`);
	});

	it('should transform concat of scalars', () => {
		expect(babel(dent`
			[1].concat(2);
		`, CONFIG)).toMatchInlineSnapshot(`"[1, 2];"`);

		expect(babel(dent`
			[1, 2].concat(3);
		`, CONFIG)).toMatchInlineSnapshot(`"[1, 2, 3];"`);

		expect(babel(dent`
			[1].concat(2, 3);
		`, CONFIG)).toMatchInlineSnapshot(`"[1, 2, 3];"`);

		expect(babel(dent`
			[1].concat({});
		`, CONFIG)).toMatchInlineSnapshot(`"[1, {}];"`);
	});
});
