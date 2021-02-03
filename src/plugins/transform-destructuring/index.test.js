/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { babel, dent } from '../../../test/_util';
import plugin from '.';

const CONFIG = {
	compact: false,
	plugins: [plugin]
};

const b = code => babel(code, CONFIG);

describe('transform-destructuring', () => {
	it('should transform noop', () => {
		expect(
			b(dent`
				function x() {}
			`)
		).toMatchInlineSnapshot(`"function x() {}"`);
	});

	describe('funky identifiers', () => {
		it('should quote invalid identifiers', () => {
			expect(
				b(dent`
					function x(_ref) {
						var foo = _ref['foo-bar'];
						return foo;
					}
				`)
			).toMatchInlineSnapshot(`
			"function x({
				\\"foo-bar\\": foo
			}) {
				return foo;
			}"
		`);
		});

		it('should handle computed identifiers', () => {
			expect(
				b(dent`
					function x(_ref) {
						var foo = _ref['foo-bar' + 1];
						return foo;
					}
				`)
			).toMatchInlineSnapshot(`
			"function x({
				\\"foo-bar1\\": foo
			}) {
				return foo;
			}"
		`);
		});
	});

	it('should handle unfiltered destructured param', () => {
		expect(
			b(dent`
				const k = e => c.b(z, Object.assign({}, e), c.b("a"));
		`)
		).toMatchInlineSnapshot(`
		"const k = ({ ...e
		}) => c.b(z, e, c.b(\\"a\\"));"
	`);
	});

	it('should destructure static computed property access', () => {
		expect(
			b(dent`
			const q = { a: 1, b: 2 };
			let t = 'b';
			let o = q[t];
			console.log(o);
		`)
		).toMatchInlineSnapshot(`
		"const {
			b: o
		} = {
			a: 1,
			b: 2
		};
		let t = 'b';
		console.log(o);"
	`);
	});

	it('should not destructure dynamic computed property access', () => {
		expect(
			b(dent`
			const q = { a: 1, b: 2 };
			let t = window.t;
			let o = q[t];
		`)
		).toMatchInlineSnapshot(`
		"const q = {
			a: 1,
			b: 2
		};
		let t = window.t;
		let o = q[t];"
	`);
	});

	describe('array-like destructuring', () => {
		it('should transform single numeric destructured properties to object patterns', () => {
			expect(
				b(dent`
					var _x = x,
						a = _x[0];
				`)
			).toMatchInlineSnapshot(`
			"var {
				0: a
			} = x;"
		`);
		});

		it('should transform multiple numeric destructured properties to object patterns', () => {
			expect(
				b(dent`
					var _x2 = x,
						b = _x2[0],
						c = _x2[1];
				`)
			).toMatchInlineSnapshot(`
			"var {
				0: b,
				1: c
			} = x;"
		`);
		});

		it('should transform sparse numeric destructured properties to object patterns', () => {
			expect(
				b(dent`
					var _x4 = x,
						g = _x4[1],
						h = _x4[4];
				`)
			).toMatchInlineSnapshot(`
			"var {
				1: g,
				4: h
			} = x;"
		`);
		});

		it('should transform rest-collected destructured properties to array patterns', () => {
			expect(
				b(dent`
					var _x3 = x,
						d = _x3[0],
						e = _x3.slice(1);
				`)
			).toMatchInlineSnapshot(`"var [d, ...e] = x;"`);
		});

		it('should transform sparse rest-collected destructured properties to array patterns', () => {
			expect(
				b(dent`
					var _x3 = x,
						d = _x3[1],
						e = _x3.slice(3);
				`)
			).toMatchInlineSnapshot(`"var [, d,, ...e] = x;"`);
		});

		it('should not transform split() when no properties are destructured', () => {
			expect(b(dent`var b = a.slice(2);`)).toMatchInlineSnapshot(`"var b = a.slice(2);"`);
			expect(b(dent`var a = x,b = a.slice(2);`)).toMatchInlineSnapshot(`
			"var a = x,
				b = a.slice(2);"
		`);
		});
	});

	describe('classes', () => {
		it('should handle destructured arguments for an up-converted class', () => {
			expect(
				b(dent`
				function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
				function Item(_ref) {
					var data = _ref.data,
						props = _objectWithoutProperties(_ref, ['data']);
					Component.call(this, props);
					this.todo = data;
				}
			`)
			).toMatchInlineSnapshot(`
			"function _objectWithoutProperties(obj, keys) {
				var target = {};
				for (var i in obj) {
					if (keys.indexOf(i) >= 0) continue;
					if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
					target[i] = obj[i];
				}
				return target;
			}
			function Item({
				data,
				...props
			}) {
				Component.call(this, props);
				this.todo = data;
			}"
		`);
		});

		// it('should handle destructured arguments for an up-converted class', () => {
		// 	expect(
		// 		b(dent`
		// 		function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
		// 		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
		// 		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
		// 		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
		// 		var Item = function (_Component) {
		// 			_inherits(Item, _Component);
		// 			function Item(_ref) {
		// 				var data = _ref.data,
		// 					props = _objectWithoutProperties(_ref, ['data']);
		// 				_classCallCheck(this, Item);
		// 				var _this = _possibleConstructorReturn(this, _Component.call(this, props));
		// 				_initialiseProps.call(_this);
		// 				_this.todo = data;
		// 				_this.state = { text: data.title };
		// 				_this.editor = null;
		// 				return _this;
		// 			}
		// 			return Item;
		// 		}(ExternalSuperClass);
		// 	`)
		// 	).toMatchInlineSnapshot(``);
		// });
	});
});
