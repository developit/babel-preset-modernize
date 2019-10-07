import { babel, dent } from '../../../test/_util';
import plugin from '.';

const CONFIG = {
	compact: false,
	plugins: [plugin]
};

describe('transform-array-spread', () => {
	it('should transform noop', () => {
		expect(babel(dent`
			[1, 2];
		`, CONFIG)).toMatchInlineSnapshot(`"[1, 2];"`);

		expect(babel(dent`
			[1, 2]["concat"]();
		`, CONFIG)).toMatchInlineSnapshot(`"[1, 2][\\"concat\\"]();"`);

		expect(babel(dent`
			[1].concat(x);
		`, CONFIG)).toMatchInlineSnapshot(`"[1].concat(x);"`);

		expect(babel(dent`
			x.concat(1);
		`, CONFIG)).toMatchInlineSnapshot(`"x.concat(1);"`);
	});

	it('should transform concat of scalars', () => {
		expect(babel(dent`
			[1].concat(2);
		`, CONFIG)).toMatchInlineSnapshot(`"[1, 2];"`);

		expect(babel(dent`
			[1, 2].concat(3);
		`, CONFIG)).toMatchInlineSnapshot(`"[1, 2, 3];"`);

		expect(babel(dent`
			[1].concat(2, 3);
		`, CONFIG)).toMatchInlineSnapshot(`"[1, 2, 3];"`);

		expect(babel(dent`
			[1].concat({});
		`, CONFIG)).toMatchInlineSnapshot(`"[1, {}];"`);
	});
});
