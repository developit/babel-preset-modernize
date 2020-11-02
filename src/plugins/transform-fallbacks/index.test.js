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
});
