import { babel, dent } from '../../../test/_util';
import plugin from '.';

const CONFIG = {
	compact: false,
	plugins: [plugin]
};

describe('transform-umd-commonjs', () => {
	it('should transform noop UMD', () => {
		expect(babel(dent`
			function factory() {}

			module.exports = factory()
			module.exports['default'] = factory()
		`, CONFIG)).toMatchInlineSnapshot(`
		"var _default, _default2;
		function factory() {}
		_default = factory();
		_default2 = factory();
		export { _default2 as default };
		export default _default;"
		`);
	});

	it('should transform inline module.exports assignment', () => {
		expect(babel(dent`
			exports.default = {
				log(){}
			};
		`, CONFIG)).toMatchInlineSnapshot(`
			"var _default;
			_default = {
			  log() {}
			};
			export { _default as default };"
		`);
	});

	describe('exports', () => {
		it('should infer named exports from module.exports assignment', () => {
			const CODE = dent`
				function isASCIIDigit(c) {
					return c >= 0x30 && c <= 0x39;
				}
				function isASCIIAlpha(c) {
					return c >= 0x41 && c <= 0x5A || c >= 0x61 && c <= 0x7A;
				}
				function isASCIIAlphanumeric(c) {
					return isASCIIAlpha(c) || isASCIIDigit(c);
				}
			`;

			expect(babel(dent`
				${CODE}
				module.exports = { isASCIIDigit, isASCIIAlpha, isASCIIAlphanumeric };
			`, CONFIG)).toEqual(dent`
				${CODE}
				export { isASCIIDigit, isASCIIAlpha, isASCIIAlphanumeric };
			`);

			expect(babel(dent`
				${CODE}
				exports = { isASCIIDigit, isASCIIAlpha, isASCIIAlphanumeric };
			`, CONFIG)).toEqual(dent`
				${CODE}
				export { isASCIIDigit, isASCIIAlpha, isASCIIAlphanumeric };
			`);
		});

		it('should infer named exports from object assignment including inline or reference values', () => {
			expect(babel(dent`
				const a = 0;
				module.exports = {
					a,
					b() {
						return 1;
					},
					c: () => 2,
					d: 3
				};
				exports.foo = 'bar';
			`, CONFIG)).toMatchInlineSnapshot(`
				"const a = 0;
				function _b() {
				  return 1;
				}
				const _c = () => 2;
				const _d = 3;
				export const foo = 'bar';
				export { a, _b as b, _c as c, _d as d };"
			`);
		});
	});

	describe('imports', () => {
		it('should infer named imports from static property access', () => {
			expect(babel(dent`
				const json = require('foo.json');
				const p = 'foo';
				console.log(json[p], json.p);
			`, CONFIG)).toMatchInlineSnapshot(`
				"import { foo as _foo, p as _p } from \\"foo.json\\";
				console.log(_foo, _p);"
			`);

			expect(babel(dent`
				const Impl = require("./URLSearchParams-impl.js");
				const x = Impl["UVString"];
			`, CONFIG)).toMatchInlineSnapshot(`
				"import { UVString as _UVString } from \\"./URLSearchParams-impl.js\\";
				const x = _UVString;"
			`);
		});

		it('should reuse named imports across callsites', () => {
			expect(babel(dent`
				const usm = require("./url-parser");
				const a = usm.basicURLParse(base);
				(() => {
					const b = usm.basicURLParse(url, { x: 1 });
				})();
			`, CONFIG)).toMatchInlineSnapshot(`
				"import { basicURLParse as _basicURLParse } from \\"./url-parser\\";
				const a = _basicURLParse(base);
				(() => {
				  const b = _basicURLParse(url, {
				    x: 1
				  });
				})();"
			`);
		});

		it('should bail out of inferring named imports when spreading module interface', () => {
			expect(babel(dent`
				const json = require('foo.json');
				const { ...p } = json;
			`, CONFIG)).toMatchInlineSnapshot(`
				"import json from \\"foo.json\\";
				const { ...p
				} = json;"
			`);
		});

		it('should bail out of inferring named imports for dynamic or numeric access', () => {
			expect(babel(dent`
				const mappingTable = require("./lib/mappingTable.json");
				let end = mappingTable.length - 1;
				const target = mappingTable[mid];
			`, CONFIG)).toMatchInlineSnapshot(`
				"import mappingTable from \\"./lib/mappingTable.json\\";
				let end = mappingTable.length - 1;
				const target = mappingTable[mid];"
			`);
		});
	});
});
