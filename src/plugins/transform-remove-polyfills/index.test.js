import { babel, dent } from '../../../test/_util';
import plugin from '.';

const CONFIG = {
	compact: false,
	plugins: [plugin]
};

describe('transform-remove-polyfills', () => {
	it('should work', () => {
		expect(
			babel(
				dent`
				function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
				var a = _extends({}, b);
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`"var a = Object.assign({}, b);"`);
	});
});
