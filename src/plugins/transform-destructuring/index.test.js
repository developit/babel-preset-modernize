import { babel, dent } from '../../../test/_util';
import plugin from '.';

const CONFIG = {
	compact: false,
	plugins: [plugin]
};

describe('transform-destructuring', () => {
	it('should transform noop', () => {
		expect(
			babel(
				dent`
					function x() {}
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`"function x() {}"`);
	});

	describe('array-like destructuring', () => {
		it('should transform single numeric destructured properties to object patterns', () => {
			expect(
				babel(
					dent`
						var _x = x,
							a = _x[0];
					`,
					CONFIG
				)
			).toMatchInlineSnapshot(`
				"var {
					0: a
				} = x;"
			`);
		});

		it('should transform multiple numeric destructured properties to object patterns', () => {
			expect(
				babel(
					dent`
						var _x2 = x,
							b = _x2[0],
							c = _x2[1];
					`,
					CONFIG
				)
			).toMatchInlineSnapshot(`
				"var {
					0: b,
					1: c
				} = x;"
			`);
		});

		it('should transform sparse numeric destructured properties to object patterns', () => {
			expect(
				babel(
					dent`
						var _x4 = x,
							g = _x4[1],
							h = _x4[4];
					`,
					CONFIG
				)
			).toMatchInlineSnapshot(`
				"var {
					1: g,
					4: h
				} = x;"
			`);
		});

		it('should transform rest-collected destructured properties to array patterns', () => {
			expect(
				babel(
					dent`
						var _x3 = x,
							d = _x3[0],
							e = _x3.slice(1);
					`,
					CONFIG
				)
			).toMatchInlineSnapshot(`
				"var [d, ...e] = x;"
			`);
		});

		it('should transform sparse rest-collected destructured properties to array patterns', () => {
			expect(
				babel(
					dent`
						var _x3 = x,
							d = _x3[1],
							e = _x3.slice(3);
					`,
					CONFIG
				)
			).toMatchInlineSnapshot(`
				"var [, d,, ...e] = x;"
			`);
		});
	});
});
