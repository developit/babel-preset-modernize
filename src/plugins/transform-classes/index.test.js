import { babel, dent } from '../../../test/_util';
import plugin from '.';

const CONFIG = {
	compact: false,
	plugins: [plugin]
};

describe('transform-classes', () => {
	it('should reverse loose mode classes', () => {
		expect(
			babel(
				dent`
					function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

					var Profile = /*#__PURE__*/function (_Widget) {
					_inheritsLoose(Profile, _Widget);

					function Profile() {
						return _Widget.apply(this, arguments) || this;
					}

					return Profile;
					}(Widget);
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`"class Profile extends Widget {}"`);
	});

	it('should reverse loose mode classes with constructor', () => {
		expect(
			babel(
				dent`
					function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

					var Profile = /*#__PURE__*/function (_Widget) {
					_inheritsLoose(Profile, _Widget);

					function Profile() {
						return _Widget.call(this) || this;
					}

					return Profile;
					}(Widget);
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`"class Profile extends Widget {}"`);
	});

	it('should reverse loose mode classes with static methods', () => {
		expect(
			babel(
				dent`
					function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

					var Profile = /*#__PURE__*/function (_Widget) {
					_inheritsLoose(Profile, _Widget);

					function Profile() {
						return _Widget.apply(this, arguments) || this;
					}

					Profile.load = function load() {
						return apiCall('/profile');
					};

					return Profile;
					}(Widget);
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`
		"class Profile extends Widget {
			static load() {
				return apiCall('/profile');
			}
		}"
	`);
	});

	it('should reverse default (non-loose) classes', () => {
		expect(
			babel(
				dent`
					function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

					function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

					function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

					function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

					function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

					function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

					function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

					function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

					function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

					function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

					function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

					var Profile = /*#__PURE__*/function (_Widget) {
					_inherits(Profile, _Widget);

					var _super = _createSuper(Profile);

					function Profile() {
						_classCallCheck(this, Profile);

						return _super.apply(this, arguments);
					}

					_createClass(Profile, [{
						key: "render",
						value: function render() {
						return 42;
						}
					}]);

					return Profile;
					}(Widget);
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`
		"class Profile extends Widget {
			render() {
				return 42;
			}
		}"
	`);
	});

	it('should remove pointless constructor', () => {
		expect(
			babel(
				dent`
					function _inheritsLoose(subClass, superClass) {
						subClass.prototype = Object.create(superClass.prototype);
						subClass.prototype.constructor = subClass;
						subClass.__proto__ = superClass;
					}
					var A = function (_B) {
						_inheritsLoose(A, _B);
						function A() {
							return _B.apply(this, arguments) || this;
						}
						var _proto = A.prototype;
						_proto.b = function b() {
							return 42;
						};
						return A;
					}(B);
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`
		"class A extends B {
			b() {
				return 42;
			}
		}"
	`);
	});

	it('should infer rest parameter forwarding to super()', () => {
		const conf = {
			...CONFIG,
			plugins: [require('../transform-arguments'), plugin]
		};
		expect(
			babel(
				dent`
					function _inheritsLoose(subClass, superClass) {
						subClass.prototype = Object.create(superClass.prototype);
						subClass.prototype.constructor = subClass;
						subClass.__proto__ = superClass;
					}
					var A = function (_B) {
						_inheritsLoose(A, _B);
						function A() {
							console.log("foo");

							for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
								args[_key] = arguments[_key];
							}

							return _B.call.apply(_B, [this].concat(args)) || this;
						}
						return A;
					}(B);
				`,
				conf
			)
		).toMatchInlineSnapshot(`
		"class A extends B {
			constructor(...args) {
				console.log(\\"foo\\");
				super(...args);
			}
		}"
	`);
	});

	it('should remove pointless inferred rest parameter forwarding to super()', () => {
		const conf = {
			...CONFIG,
			plugins: [require('../transform-arguments'), plugin]
		};
		expect(
			babel(
				dent`
					function _inheritsLoose(subClass, superClass) {
						subClass.prototype = Object.create(superClass.prototype);
						subClass.prototype.constructor = subClass;
						subClass.__proto__ = superClass;
					}
					var A = function (_B) {
						_inheritsLoose(A, _B);
						function A() {
							for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
								args[_key] = arguments[_key];
							}

							return _B.call.apply(_B, [this].concat(args)) || this;
						}
						return A;
					}(B);
				`,
				conf
			)
		).toMatchInlineSnapshot(`"class A extends B {}"`);
	});

	it('should preserve specific parameter forwarding to super()', () => {
		expect(
			babel(
				dent`
					function _inheritsLoose(subClass, superClass) {
						subClass.prototype = Object.create(superClass.prototype);
						subClass.prototype.constructor = subClass;
						subClass.__proto__ = superClass;
					}
					var A = function (_B) {
						_inheritsLoose(A, _B);
						function A(x, y) {
							return _B.call(this, x, y) || this;
						}
						return A;
					}(B);
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`
		"class A extends B {
			constructor(x, y) {
				super(x, y);
			}
		}"
	`);
	});

	it('should handle minified constructorless classes', () => {
		expect(
			babel(
				dent`
					var l = function (e) {
						function a() {
							return function (e, a) {
									if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
								}(this, a),
								function (e, a) {
									if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
									return !a || "object" !== typeof a && "function" !== typeof a ? e : a
								}(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments))
						}
						return function (e, a) {
							if ("function" !== typeof a && null !== a) throw new TypeError("Super expression must either be null or a function, not " + typeof a);
							e.prototype = Object.create(a && a.prototype, {
								constructor: {
									value: e,
									enumerable: !1,
									writable: !0,
									configurable: !0
								}
							}), a && (Object.setPrototypeOf ? Object.setPrototypeOf(e, a) : e.__proto__ = a)
						}(a, e), o(a, [{
							key: "render",
							value: function () {
								var e = this.props,
									a = e.name,
									n = e.parentName,
									t = e.props,
									o = void 0 === t ? {} : t,
									c = e.children,
									p = e.components,
									l = void 0 === p ? {} : p,
									m = e.Layout,
									d = e.layoutProps,
									h = l[n + "." + a] || l[a] || i[a] || a;
								return m ? r.default.createElement(m, s({
									components: l
								}, d), r.default.createElement(h, o, c)) : r.default.createElement(h, o, c)
							}
						}]), a
					}(c.Component)
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(`""`);
	});
});
