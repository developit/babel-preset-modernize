import { babel, dent } from '../../../test/_util';
import plugin from '.';

const CONFIG = {
	compact: false,
	plugins: [plugin]
};

const webpackUmd = (deps, code) => dent`
	/** a umd bundle */
	(function umd(root, factory) {
		if(typeof exports === 'object' && typeof module === 'object')
			module.exports = factory(${Object.keys(deps).map(k => deps[k])});
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["LIBNAME"] = factory();
		else
			root["LIBNAME"] = factory();
	})(this, function(${Object.keys(deps)}) {
${code}
	});
`;

describe('transform-umd-to-cjs', () => {
	it('should transform noop UMD', () => {
		const code = webpackUmd({}, '');
		expect(babel(code, CONFIG)).toMatchInlineSnapshot(`""`);
	});

	it('should transform UMD without dependencies', () => {
		const code = webpackUmd(
			{},
			dent`
				var exports = {};
				exports.foo = 42;
				return exports;
			`
		);
		expect(babel(code, CONFIG)).toMatchInlineSnapshot(`
		"/** a umd bundle */
		var exports = {};
		exports.foo = 42;
		module.exports = exports;"
	`);
	});

	it('should transform basic UMD', () => {
		const code = webpackUmd(
			{ a: `require('./a')` },
			dent`
				var exports = {};
				exports.foo = a.bar();
				return exports;
			`
		);
		expect(babel(code, CONFIG)).toMatchInlineSnapshot(`
		"const a = require('./a');
		/** a umd bundle */
		var exports = {};
		exports.foo = a.bar();
		module.exports = exports;"
	`);
	});

	it('should handle rogue bindings', () => {
		const code = webpackUmd({ a: `require('./a')` }, `return a`).replace(
			'function umd',
			'function a'
		);
		expect(babel(code, CONFIG)).toMatchInlineSnapshot(`
		"const a = require('./a');
		/** a umd bundle */
		module.exports = a;"
	`);
	});
});
