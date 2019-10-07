import { babel, dent } from './_util';
import preset from '../src';

function babelPretty(code, loose) {
	return babel(code, { presets: [
		[preset, { loose }]
	], compact: false });
}

describe('babel-preset-optimize', () => {
	it('should be a valid babel plugin', () => {
		expect(preset).toEqual(expect.any(Function));

		expect(preset()).toMatchObject({
			plugins: expect.any(Array)
		});
	});

	it('should do nothing to already-modern code', () => {
		expect(babelPretty(dent`
			const x = 1;
		`)).toMatchInlineSnapshot(`"const x = 1;"`);

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

		expect(babelPretty(code)).toMatchInlineSnapshot(`
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

		expect(babelPretty(code, true)).toMatchInlineSnapshot(`
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
