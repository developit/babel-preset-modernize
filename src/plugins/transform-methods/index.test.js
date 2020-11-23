import { babel, dent } from '../../../test/_util';
import plugin from '.';

const CONFIG = {
	compact: false,
	plugins: [plugin]
};

describe('transform-methods', () => {
	it('should not convert arrow functions', () => {
		expect(
			babel(
				dent`
					({
						foo: () => {}
					});
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`
			"({
				foo: () => {}
			});"
		`);
	});

	it('should not non-functions', () => {
		expect(
			babel(
				dent`
					const foo = 1;
					({
						foo,
						bar: 42
					});
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`
			"const foo = 1;
			({
				foo,
				bar: 42
			});"
		`);
	});

	it('should convert function properties to methods', () => {
		expect(
			babel(
				dent`
					({
						foo: function() {}
					});
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`
			"({
				foo() {}
			});"
		`);
	});

	it('should not move functions referenced only as property values to methods', () => {
		expect(
			babel(
				dent`
					function foo() {}
					({
						foo
					});
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`
			"function foo() {}
			({
				foo
			});"
		`);
	});
});
