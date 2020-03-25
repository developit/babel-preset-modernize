import { babel, dent } from '../../../test/_util';
import plugin from '.';

const CONFIG = {
	compact: false,
	plugins: [plugin]
};

describe('transform-remove-polyfills', () => {
	it('should transform noop', () => {
		expect(babel(dent`
			[1, 2];
		`, CONFIG)).toMatchInlineSnapshot(`"[1, 2];"`);
	});

	it('should remove fallbacks for known available APIs', () => {
		expect(babel(dent`
			const assign = Object.assign || function(obj) {
				for (var i=1; i<arguments.length; i++) {
					for (var p in arguments[i]) {
						obj[i] = arguments[i][p];
					}
				}
				return obj;
			}
		`, CONFIG)).toMatchInlineSnapshot(`"var assign = Object.assign;"`);
	});

	it('should replace ponyfill callsites with native', () => {
		expect(babel(dent`
			const assign = Object.assign || function(obj) { return obj; };

			const a = assign({}, window, { a: 1 }).a;
		`, CONFIG)).toMatchInlineSnapshot(`"const a = Object.assign({}, window, { a: 1 }).a;"`);
	});
});
