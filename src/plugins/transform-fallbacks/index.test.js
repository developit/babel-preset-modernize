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

describe('transform-fallbacks', () => {
	describe('attachEvent', () => {
		it('should dissolve attachEvent fallback (forward)', () => {
			expect(
				babel(
					dent`
						e.addEventListener ? e.addEventListener(t, o, !1) : e.attachEvent("on" + t, o);
					`,
					CONFIG
				)
			).toMatchInlineSnapshot(`"e.addEventListener(t, o, !1);"`);
		});

		it('should dissolve attachEvent fallback (reverse)', () => {
			expect(
				babel(
					dent`
						e.attachEvent ? e.attachEvent('on' + t, o) : e.addEventListener(t, o);
					`,
					CONFIG
				)
			).toMatchInlineSnapshot(`"e.addEventListener(t, o);"`);
		});
	});

	describe('detachEvent', () => {
		it('should dissolve detachEvent fallback (forward)', () => {
			expect(
				babel(
					dent`
						e.removeEventListener ? e.removeEventListener(t, o, !1) : e.detachEvent("on" + t, o);
					`,
					CONFIG
				)
			).toMatchInlineSnapshot(`"e.removeEventListener(t, o, !1);"`);
		});

		it('should dissolve detachEvent fallback (reverse)', () => {
			expect(
				babel(
					dent`
						e.detachEvent ? e.detachEvent('on' + t, o) : e.removeEventListener(t, o);
					`,
					CONFIG
				)
			).toMatchInlineSnapshot(`"e.removeEventListener(t, o);"`);
		});
	});

	it('should ignore mismatched fallback', () => {
		expect(
			babel(
				dent`
					e.addEventListener ? e.addEventListener(t, o, !1) : e.attachEvent("only" + t, o)
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`"e.addEventListener ? e.addEventListener(t, o, !1) : e.attachEvent(\\"only\\" + t, o);"`);
	});

	it('should ignore mismatched arg', () => {
		expect(
			babel(
				dent`
					e.addEventListener ? e.addEventListener(t, o, !1) : e.attachEvent("on" + t, () => o())
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(
			`"e.addEventListener ? e.addEventListener(t, o, !1) : e.attachEvent(\\"on\\" + t, () => o());"`
		);
	});
});
