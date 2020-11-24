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

describe('transform-implicit-scope', () => {
	it('should remove pointless wrapping scope', () => {
		expect(
			babel(
				dent`
					(function() {
						console.log(1);
					})();
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`"console.log(1);"`);

		expect(
			babel(
				dent`
					!function() {
						console.log(1);
					}()
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`"console.log(1);"`);
	});

	it('should remove wrapping scope with unused arguments', () => {
		expect(
			babel(
				dent`
					(function(global) {
						console.log(1);
					})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this);
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`"console.log(1);"`);
	});
});
