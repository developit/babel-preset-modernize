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

import { babel } from '../../../test/_util';
import plugin from '.';

const CONFIG = {
	compact: false,
	plugins: [plugin]
};

const b = code => babel(code, CONFIG);

describe('transform-block-scope', () => {
	it('should convert var to let', () => {
		expect(b(`var a;`)).toMatchInlineSnapshot(`"let a;"`);
		expect(b(`var a = 1;`)).toMatchInlineSnapshot(`"let a = 1;"`);
		expect(b(`var a = 1; a;`)).toMatchInlineSnapshot(`
			"let a = 1;
			a;"
		`);
		expect(b(`var a = function(){ return a; }`)).toMatchInlineSnapshot(`
		"let a = function () {
			return a;
		};"
	`);
	});

	it('should exclude var declarations that violate TDZ', () => {
		expect(b(`a; var a = 1;`)).toMatchInlineSnapshot(`
			"a;
			var a = 1;"
		`);
		expect(b(`(a => { var a = 1; })();`)).toMatchInlineSnapshot(`
		"(a => {
			var a = 1;
		})();"
	`);
	});
});
