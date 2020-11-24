import { babel, dent } from '../../../test/_util';
import plugin from '.';

const CONFIG = {
	compact: false,
	plugins: [plugin]
};

const b = code => babel(code, CONFIG);

describe('transform-destructuring', () => {
	it('should transform noop', () => {
		expect(
			b(dent`
				function x() {}
			`)
		).toMatchInlineSnapshot(`"function x() {}"`);
	});

	describe('funky identifiers', () => {
		it('should quote invalid identifiers', () => {
			expect(
				b(dent`
					function x(_ref) {
						var foo = _ref['foo-bar'];
						return foo;
					}
				`)
			).toMatchInlineSnapshot(`
			"function x({
				\\"foo-bar\\": foo
			}) {
				return foo;
			}"
		`);
		});

		it('should handle computed identifiers', () => {
			expect(
				b(dent`
					function x(_ref) {
						var foo = _ref['foo-bar' + 1];
						return foo;
					}
				`)
			).toMatchInlineSnapshot(`
			"function x({
				\\"foo-bar1\\": foo
			}) {
				return foo;
			}"
		`);
		});
	});

	it('should handle unfiltered destructured param', () => {
		expect(
			b(dent`
				const k = e => c.b(z, Object.assign({}, e), c.b("a"));
		`)
		).toMatchInlineSnapshot(`
		"const k = ({ ...e
		}) => c.b(z, e, c.b(\\"a\\"));"
	`);
	});

	it('should destructure static computed property access', () => {
		expect(
			b(dent`
			const q = { a: 1, b: 2 };
			let t = 'b';
			let o = q[t];
			console.log(o);
		`)
		).toMatchInlineSnapshot(`
		"const {
			b: o
		} = {
			a: 1,
			b: 2
		};
		let t = 'b';
		console.log(o);"
	`);
	});

	it('should not destructure dynamic computed property access', () => {
		expect(
			b(dent`
			const q = { a: 1, b: 2 };
			let t = window.t;
			let o = q[t];
		`)
		).toMatchInlineSnapshot(`
		"const q = {
			a: 1,
			b: 2
		};
		let t = window.t;
		let o = q[t];"
	`);
	});

	describe('array-like destructuring', () => {
		it('should transform single numeric destructured properties to object patterns', () => {
			expect(
				b(dent`
					var _x = x,
						a = _x[0];
				`)
			).toMatchInlineSnapshot(`
			"var {
				0: a
			} = x;"
		`);
		});

		it('should transform multiple numeric destructured properties to object patterns', () => {
			expect(
				b(dent`
					var _x2 = x,
						b = _x2[0],
						c = _x2[1];
				`)
			).toMatchInlineSnapshot(`
			"var {
				0: b,
				1: c
			} = x;"
		`);
		});

		it('should transform sparse numeric destructured properties to object patterns', () => {
			expect(
				b(dent`
					var _x4 = x,
						g = _x4[1],
						h = _x4[4];
				`)
			).toMatchInlineSnapshot(`
			"var {
				1: g,
				4: h
			} = x;"
		`);
		});

		it('should transform rest-collected destructured properties to array patterns', () => {
			expect(
				b(dent`
					var _x3 = x,
						d = _x3[0],
						e = _x3.slice(1);
				`)
			).toMatchInlineSnapshot(`"var [d, ...e] = x;"`);
		});

		it('should transform sparse rest-collected destructured properties to array patterns', () => {
			expect(
				b(dent`
					var _x3 = x,
						d = _x3[1],
						e = _x3.slice(3);
				`)
			).toMatchInlineSnapshot(`"var [, d,, ...e] = x;"`);
		});

		it('should not transform split() when no properties are destructured', () => {
			expect(b(dent`var b = a.slice(2);`)).toMatchInlineSnapshot(`"var b = a.slice(2);"`);
			expect(b(dent`var a = x,b = a.slice(2);`)).toMatchInlineSnapshot(`
			"var a = x,
				b = a.slice(2);"
		`);
		});
	});
});
