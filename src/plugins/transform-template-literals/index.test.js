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
	generatorOpts: {
		retainLines: true
	},
	plugins: [plugin]
};

describe('transform-template-literals', () => {
	describe('string concat (babel loose mode)', () => {
		it('should transform concatenated strings', () => {
			expect(babel(`'a' + foo;`, CONFIG)).toMatchInlineSnapshot(`"\`a\${foo}\`;"`);
			expect(babel(`'a' + foo + 'b';`, CONFIG)).toMatchInlineSnapshot(`"\`a\${foo}b\`;"`);
			expect(babel(`'a' + foo + 'b' + bar;`, CONFIG)).toMatchInlineSnapshot(`"\`a\${foo}b\${bar}\`;"`);
			expect(babel(`'a' + foo + 'b' + bar + 'c';`, CONFIG)).toMatchInlineSnapshot(`"\`a\${foo}b\${bar}c\`;"`);

			expect(babel(`'a' + (foo ? " b" : "");`, CONFIG)).toMatchInlineSnapshot(`"\`a\${foo ? \\" b\\" : \\"\\"}\`;"`);
			expect(babel(`'a' + (foo ? " " + foo : "");`, CONFIG)).toMatchInlineSnapshot(
				`"\`a\${foo ? \` \${foo}\` : \\"\\"}\`;"`
			);
		});

		it('should transform single leading expressions', () => {
			expect(babel(`foo + 'a';`, CONFIG)).toMatchInlineSnapshot(`"\`\${foo}a\`;"`);
			expect(babel(`foo + 'a' + 'b';`, CONFIG)).toMatchInlineSnapshot(`"\`\${foo}ab\`;"`);
			expect(babel(`foo + 'a' + bar + 'b';`, CONFIG)).toMatchInlineSnapshot(`"\`\${foo}a\${bar}b\`;"`);
			expect(babel(`1 + '2' + '3';`, CONFIG)).toMatchInlineSnapshot(`"\`\${1}23\`;"`);
			expect(babel(`1 + '2' + 3 + '4';`, CONFIG)).toMatchInlineSnapshot(`"\`\${1}2\${3}4\`;"`);
		});

		it('should ignore concatenated strings', () => {
			expect(babel(`'a';`, CONFIG)).toMatchInlineSnapshot(`"'a';"`);
			expect(babel(`'a' + 'b';`, CONFIG)).toMatchInlineSnapshot(`"'a' + 'b';"`);
			expect(babel(`'a' + 'b' + 'c';`, CONFIG)).toMatchInlineSnapshot(`"'a' + 'b' + 'c';"`);
		});

		it('should ignore + that is not safe to assume concatenation', () => {
			expect(babel(`1 + 2;`, CONFIG)).toMatchInlineSnapshot(`"1 + 2;"`);
			expect(babel(`1 + 2 + 'a';`, CONFIG)).toMatchInlineSnapshot(`"1 + 2 + 'a';"`);
			expect(babel(`'a' + 1 + 2 + 'b';`, CONFIG)).toMatchInlineSnapshot(`"'a' + 1 + 2 + 'b';"`);
			expect(babel(`a + b + 'c';`, CONFIG)).toMatchInlineSnapshot(`"a + b + 'c';"`);

			expect(babel(`(Math.round(o) + "").replace('1','2');`, CONFIG)).toMatchInlineSnapshot(
				`"\`\${Math.round(o)}\`.replace('1', '2');"`
			);
		});
	});

	it('should transform well-formed string.concat calls', () => {
		expect(babel(`'a'.concat(foo);`, CONFIG)).toMatchInlineSnapshot(`"\`a\${foo}\`;"`);

		expect(babel(`'a'.concat(foo, 'b');`, CONFIG)).toMatchInlineSnapshot(`"\`a\${foo}b\`;"`);

		expect(babel(`'a'.concat(foo, 'b', bar);`, CONFIG)).toMatchInlineSnapshot(`"\`a\${foo}b\${bar}\`;"`);

		expect(babel(`'a'.concat(foo, 'b', bar, 'c');`, CONFIG)).toMatchInlineSnapshot(`"\`a\${foo}b\${bar}c\`;"`);
	});

	it('should transform allow expressions of any type', () => {
		expect(babel(`'a'.concat([foo]);`, CONFIG)).toMatchInlineSnapshot(`"\`a\${[foo]}\`;"`);

		expect(babel(`'a'.concat({ foo });`, CONFIG)).toMatchInlineSnapshot(`"\`a\${{ foo }}\`;"`);
	});

	it('should merge repeated concats into one template string', () => {
		expect(babel(`'a'.concat(foo, 'b').concat(bar, 'c');`, CONFIG)).toMatchInlineSnapshot(`"\`a\${foo}b\${bar}c\`;"`);

		expect(babel(`'a'.concat(foo, 'b').concat(bar);`, CONFIG)).toMatchInlineSnapshot(`"\`a\${foo}b\${bar}\`;"`);

		expect(babel(`'a'.concat(foo).concat(bar, 'c');`, CONFIG)).toMatchInlineSnapshot(`"\`a\${foo}\${bar}c\`;"`);

		expect(babel(`'a'.concat(foo).concat(bar).concat(baz);`, CONFIG)).toMatchInlineSnapshot(
			`"\`a\${foo}\${bar}\${baz}\`;"`
		);

		expect(babel(`"foo".concat(a).concat(b, " ").concat(c);`, CONFIG)).toMatchInlineSnapshot(
			`"\`foo\${a}\${b} \${c}\`;"`
		);
	});

	it('should ignore non-transpiled string concat', () => {
		expect(babel(`'a'.concat();`, CONFIG)).toMatchInlineSnapshot(`"'a'.concat();"`);

		expect(babel(`'a'.concat(foo, bar);`, CONFIG)).toMatchInlineSnapshot(`"'a'.concat(foo, bar);"`);

		expect(babel(`'a'.concat(foo, ['b']);`, CONFIG)).toMatchInlineSnapshot(`"'a'.concat(foo, ['b']);"`);
	});

	it('should ignore non-strings', () => {
		expect(babel(`[1].concat(2);`, CONFIG)).toMatchInlineSnapshot(`"[1].concat(2);"`);
	});
});
