import { babel, dent } from '../../../test/_util';
import plugin from '.';

const CONFIG = {
	compact: false,
	plugins: [plugin]
};

describe('transform-optimize-webpack', () => {
	it('should work', () => {
		expect(babel(dent``, CONFIG)).toMatchInlineSnapshot(`""`);
	});
});
