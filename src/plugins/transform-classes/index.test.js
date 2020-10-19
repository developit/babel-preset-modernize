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
});
