import { babel, dent } from '../../../test/_util';
import plugin from '.';

const CONFIG = {
	compact: false,
	plugins: [plugin]
};

describe('transform-iife-arrows', () => {
	it('should convert IIFE to arrows', () => {
		expect(
			babel(
				dent`
					(function() {
						console.log('a');
					})();
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`
			"(() => {
				console.log('a');
			})();"
		`);
	});

	it('should convert parameterized IIFEs to arrows', () => {
		expect(
			babel(
				dent`
					const x = (function(y) {
						return y + 2;
					})(40);
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`
			"const x = (y => y + 2)(40);"
		`);
	});

	it('should preserve IIFEs when scope is required', () => {
		expect(
			babel(
				dent`
					(function() {
						console.log(arguments);
					})();
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`
			"(function() {
				console.log(arguments);
			})();"
		`);

		expect(
			babel(
				dent`
					(function() {
						return this;
					})();
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`
			"(function() {
				return this;
			})();"
		`);
	});
});
