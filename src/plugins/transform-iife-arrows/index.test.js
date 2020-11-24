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

describe('transform-iife-arrows', () => {
	it('should convert IIFE to arrows', () => {
		expect(
			babel(
				dent`
					(function() {
						console.log('a');
					})();
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`
			"(() => {
				console.log('a');
			})();"
		`);
	});

	it('should convert parameterized IIFEs to arrows', () => {
		expect(
			babel(
				dent`
					const x = (function(y) {
						return y + 2;
					})(40);
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`"const x = (y => y + 2)(40);"`);
	});

	it('should preserve IIFEs when scope is required', () => {
		expect(
			babel(
				dent`
					(function() {
						console.log(arguments);
					})();
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`
		"(function () {
			console.log(arguments);
		})();"
	`);

		expect(
			babel(
				dent`
					(function() {
						return this;
					})();
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`
		"(function () {
			return this;
		})();"
	`);
	});
});
