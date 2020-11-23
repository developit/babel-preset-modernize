import { babel, dent } from './_util';
import preset from '../src';

function babelPretty(code, options) {
	return babel(code, { presets: [[preset, options || {}]], compact: false });
}

describe('preset', () => {
	it('should be a valid babel plugin', () => {
		expect(preset).toEqual(expect.any(Function));

		expect(preset({})).toMatchObject({
			plugins: expect.any(Array)
		});
	});

	it('should do nothing to already-modern code', () => {
		expect(
			babelPretty(dent`
			const x = 1;
		`)
		).toMatchInlineSnapshot(`"const x = 1;"`);

		const code = dent`
			import foo from 'foo';
			export default foo;
		`;
		expect(babelPretty(code)).toEqual(code);
	});

	it('should pass a smoke test', () => {
		const code = dent`
			(function(f) {
				if (typeof module !== 'undefined' && module.exports) {
					module.exports = f(require('dep'));
				}
			})(function(d) {
				return function lib(opts) {
					opts = opts || {};
					return d.create(Object.assign({}, opts, {
						isLib: true
					}));
				}
			})
		`;

		expect(babelPretty(code, { cjs: true })).toMatchInlineSnapshot(`
		"var _default;
		import d from \\"dep\\";
		_default = function lib(opts) {
			opts = opts || {};
			return d.create(Object.assign({}, opts, {
				isLib: true
			}));
		};
		export default _default;"
	`);

		expect(babelPretty(code, { cjs: true, loose: true })).toMatchInlineSnapshot(`
		"var _default;
		import d from \\"dep\\";
		_default = function lib(opts = {}) {
			return d.create(Object.assign({}, opts, {
				isLib: true
			}));
		};
		export default _default;"
	`);
	});
});
