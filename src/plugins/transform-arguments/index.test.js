import { babel, dent } from '../../../test/_util';
import plugin from '.';

const CONFIG = {
	compact: false,
	plugins: [plugin]
};

describe('transform-arguments', () => {
	it('should transform noop', () => {
		expect(
			babel(
				dent`
					function x() {}
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`"function x() {}"`);
	});

	it('should transform Babel 7 loose mode arguments', () => {
		expect(
			babel(
				dent`
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
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`
			"function foo(a = 1, b = 2, ...c) {
			  return [a, b, 1].concat(2, [3, 4], c);
			}"
		`);
	});

	it('should restore shadowed default parameters', () => {
		expect(
			babel(
				dent`
					var DEFAULT = 'default';
					function foo({ a: _ref$a }) {
						var a$1 = _ref$a === void 0 ? DEFAULT : _ref$a;
						return a$1;
					}
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`
		"var DEFAULT = 'default';
		function foo({
		  a: a$1 = DEFAULT
		}) {
		  return a$1;
		}"
	`);
	});

	it('should cooperate with transform-array-spread', () => {
		const conf = {
			...CONFIG,
			plugins: [plugin, require('../transform-array-spread')]
		};
		expect(
			babel(
				dent`
					function foo(a, b) {
						if (a === void 0) a = 1;

						if (b === void 0) b = 2;

						for (var _len = arguments.length, c = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
							c[_key - 2] = arguments[_key];
						}

						return [a, b, 1].concat(2, [3, 4], c);
					}
				`,
				conf
			)
		).toMatchInlineSnapshot(`
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
		expect(
			babel(
				dent`
					function foo(a) {
						a = a || {};
						return a;
					}
				`,
				conf
			)
		).toMatchInlineSnapshot(`
			"function foo(a = {}) {
			  return a;
			}"
		`);
	});

	it('should handle leading optional parameters', () => {
		// note: this one is tricky because Terser compresses the parameter logic so that it is mixed with defaults.
		const conf = {
			...CONFIG,
			plugins: [[plugin, { loose: true }]]
		};
		expect(
			babel(
				dent`
					function foo() {
						var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
							t = arguments.length > 1 ? arguments[1] : void 0,
							n = arguments.length > 2 ? arguments[2] : void 0;
						return e ? a().createElement(n, {}, t) : t
					}
				`,
				conf
			)
		).toMatchInlineSnapshot(`
		"function foo(e = false, t, n) {
		  return e ? a().createElement(n, {}, t) : t;
		}"
	`);
	});

	it('should handle for init declarations', () => {
		expect(
			babel(
				dent`
				function t(t) {
					for (var n, r, o = t[0], i = t[1], c = 0, s = []; c < o.length; c++) r = o[c], Object.prototype.hasOwnProperty.call(a, r) && a[r] && s.push(a[r][0]), a[r] = 0;
					for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
					for (u && u(t); s.length;) s.shift()()
				}
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`
		"function t(t) {
		  for (var n, r, o = t[0], i = t[1], c = 0, s = []; c < o.length; c++) r = o[c], Object.prototype.hasOwnProperty.call(a, r) && a[r] && s.push(a[r][0]), a[r] = 0;
		  for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
		  for (u && u(t); s.length;) s.shift()();
		}"
	`);
	});
});
