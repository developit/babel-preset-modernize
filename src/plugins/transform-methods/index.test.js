import { babel, dent } from '../../../test/_util';
import plugin from '.';

const CONFIG = {
	compact: false,
	plugins: [plugin]
};

describe('transform-methods', () => {
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

	it('should convert functions referenced only as property values to methods', () => {
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
			"({
				foo() {}
			});"
		`);
	});
});
