"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _BasePicker = _interopRequireDefault(require("./BasePicker"));

var _RangePicker = _interopRequireDefault(require("./RangePicker"));

var _AlphaPicker = _interopRequireDefault(require("./AlphaPicker"));

var _ColorResult = _interopRequireDefault(require("./ColorResult"));

var _Code = _interopRequireDefault(require("./Code"));

var _color = require("../utils/color");

require("../css/style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PickerPanel =
/*#__PURE__*/
function (_Component) {
  _inherits(PickerPanel, _Component);

  function PickerPanel(props) {
    var _this;

    _classCallCheck(this, PickerPanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PickerPanel).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onBaseChange", function (e) {
      console.log(e.target);
      var alpha = _this.state.alpha;
      var baseColor = e.target.getAttribute('value');

      _this.setState({
        baseColor: baseColor,
        colorCode: (0, _color.getColorCode)(baseColor, baseColor),
        color: (0, _color.getColor)(baseColor, baseColor, alpha)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onRangeChange", function (e) {
      var _this$state = _this.state,
          baseColor = _this$state.baseColor,
          alpha = _this$state.alpha;
      console.log(e.target);
      var rangeColor = e.target.getAttribute('value');
      console.log(rangeColor);

      _this.setState({
        rangeColor: rangeColor,
        colorCode: (0, _color.getColorCode)(baseColor, rangeColor),
        color: (0, _color.getColor)(baseColor, rangeColor, alpha)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onAlphaChange", function (e) {
      var _this$state2 = _this.state,
          rangeColor = _this$state2.rangeColor,
          baseColor = _this$state2.baseColor;
      var alpha = e.target.getAttribute('value');

      _this.setState({
        alpha: alpha,
        color: (0, _color.getColor)(baseColor, rangeColor, alpha)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onCodeChange", function (e) {
      var code = e.target.value;

      _this.setState({
        colorCode: code,
        color: code
      });
    });

    _this.state = {
      colorCode: '#ffffff',
      baseColor: '0,255,255',
      rangeColor: '255,0,0',
      alpha: 0,
      color: ''
    };
    return _this;
  }

  _createClass(PickerPanel, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement(_BasePicker.default, {
        onChange: this.onBaseChange
      }), _react.default.createElement(_RangePicker.default, {
        onChange: this.onRangeChange,
        baseColor: this.state.baseColor
      }), _react.default.createElement(_AlphaPicker.default, {
        onChange: this.onAlphaChange
      }), _react.default.createElement("div", {
        id: "result"
      }, _react.default.createElement(_Code.default, {
        colorCode: this.state.colorCode,
        alpha: this.state.alpha,
        onChange: this.onCodeChange
      }), _react.default.createElement(_ColorResult.default, {
        color: this.state.color === 0 ? 0 : this.state.color
      }), this.state.alpha));
    }
  }]);

  return PickerPanel;
}(_react.Component);

exports.default = PickerPanel;
PickerPanel.defaultProps = {
  defaultCode: '#ffffff',
  defaultBase: '0,255,255',
  defaultRange: '255,0,0',
  defaultAlpha: 0,
  defaultColor: '',
  onChange: function onChange() {},
  style: {}
};