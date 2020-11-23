import { babel, dent } from '../../../test/_util';
import plugin from '.';

const CONFIG = {
	compact: false,
	plugins: [plugin]
};

describe('transform-implicit-scope', () => {
	it('should remove pointless wrapping scope', () => {
		expect(
			babel(
				dent`
					(function() {
						console.log(1);
					})();
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`"console.log(1);"`);

		expect(
			babel(
				dent`
					!function() {
						console.log(1);
					}()
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`"console.log(1);"`);
	});

	it('should remove wrapping scope with unused arguments', () => {
		expect(
			babel(
				dent`
					(function(global) {
						console.log(1);
					})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this);
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`"console.log(1);"`);
	});
});
