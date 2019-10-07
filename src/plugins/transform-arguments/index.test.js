import { babel, dent } from '../../../test/_util';
import plugin from '.';

const CONFIG = {
	compact: false,
	plugins: [plugin]
};

describe('transform-arguments', () => {
	it('should transform noop', () => {
		expect(babel(dent`
			function x() {}
		`, CONFIG)).toMatchInlineSnapshot(`"function x() {}"`);
	});

	it('should transform Babel 7 loose mode arguments', () => {
		expect(babel(dent`
			function foo(a, b) {
				if (a === void 0) {
					a = 1;
				}

				if (b === void 0) b = 2;

				for (var _len = arguments.length, c = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
					c[_key - 2] = arguments[_key];
				}

				return [a, b, 1].concat(2, [3, 4], c);
			}
		`, CONFIG)).toMatchInlineSnapshot(`
			"function foo(a = 1, b = 2, ...c) {
			  return [a, b, 1].concat(2, [3, 4], c);
			}"
		`);
	});


	it('should cooperate with transform-array-spread', () => {
		const conf = {
			...CONFIG,
			plugins: [plugin, require('../transform-array-spread')]
		};
		expect(babel(dent`
			function foo(a, b) {
				if (a === void 0) a = 1;

				if (b === void 0) b = 2;

				for (var _len = arguments.length, c = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
					c[_key - 2] = arguments[_key];
				}

				return [a, b, 1].concat(2, [3, 4], c);
			}
		`, conf)).toMatchInlineSnapshot(`
			"function foo(a = 1, b = 2, ...c) {
			  return [a, b, 1, 2, 3, 4, ...c];
			}"
		`);
	});

	describe('options.loose', () => {
		const conf = {
			...CONFIG,
			plugins: [[plugin, { loose: true }]]
		};
		expect(babel(dent`
			function foo(a) {
				a = a || {};
				return a;
			}
		`, conf)).toMatchInlineSnapshot(`
			"function foo(a = {}) {
			  return a;
			}"
		`);
	});
});
