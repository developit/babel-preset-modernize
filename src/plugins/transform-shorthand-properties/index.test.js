import { babel, dent } from '../../../test/_util';
import plugin from '.';

const CONFIG = {
	compact: false,
	plugins: [plugin]
};

describe('transform-shorthand-properties', () => {
	it('should convert non-shorthand properties to shorthand', () => {
		expect(
			babel(
				dent`
					(foo => ({
						foo: foo
					}));
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`
			"(foo => ({
				foo
			}));"
		`);
	});

	it('should convert locally-scoped identifiers to their shorthand names', () => {
		expect(
			babel(
				dent`
					(a => ({
						foo: a
					}));
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`
			"(foo => ({
				foo
			}));"
		`);
	});

	it('should ignore properties with already bound local names', () => {
		expect(
			babel(
				dent`
					((foo, a) => ({
						foo: a
					}));
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`
			"((foo, a) => ({
				foo: a
			}));"
		`);
	});
});
