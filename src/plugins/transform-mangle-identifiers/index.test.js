import { babel, dent } from '../../../test/_util';
import plugin from '.';

const CONFIG = {
	compact: false,
	plugins: [plugin]
};

describe('transform-mangle-identifiers', () => {
	it('should mangle identifiers', () => {
		expect(
			babel(
				dent`
					var foo = 1;
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`
			"var a = 1;"
		`);
	});
});
