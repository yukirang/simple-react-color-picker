"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _BasePicker = _interopRequireDefault(require("../components/BasePicker"));

var _RangePicker = _interopRequireDefault(require("../components/RangePicker"));

var _AlphaPicker = _interopRequireDefault(require("../components/AlphaPicker"));

var _ColorResult = _interopRequireDefault(require("../components/ColorResult"));

var _Code = _interopRequireDefault(require("../components/Code"));

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

    _defineProperty(_assertThisInitialized(_this), "onChange", function (_ref) {
      var item = _ref.item,
          type = _ref.type;
      // var range = this.state.rangeColor;
      // var base = this.state.baseColor;
      // var alpha = this.state.alpha;
      var _this$state = _this.state,
          range = _this$state.range,
          base = _this$state.base,
          alpha = _this$state.alpha;

      switch (type) {
        case 'base':
          _this.setState({
            baseColor: item,
            colorCode: (0, _color.getColorCode)(item, item),
            color: (0, _color.getColor)(item, item, alpha)
          });

          break;

        case 'range':
          _this.setState({
            rangeColor: item,
            colorCode: (0, _color.getColorCode)(base, item),
            color: (0, _color.getColor)(base, item, alpha)
          });

          break;

        case 'code':
          _this.setState({
            colorCode: item,
            color: item
          });

          break;

        case 'alpha':
          _this.setState({
            alpha: item,
            color: (0, _color.getColor)(base, range, item)
          });

          break;
      }
    });

    _this.state = {
      colorCode: '#ffffff',
      baseColor: '0,255,255',
      rangeColor: '255,0,0',
      alpha: 0,
      color: ''
    }; // this.onChange = this.onChange.bind(this);

    return _this;
  }

  _createClass(PickerPanel, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement(_BasePicker.default, {
        onChange: this.onChange
      }), _react.default.createElement(_RangePicker.default, {
        onChange: this.onChange,
        baseColor: this.state.baseColor
      }), _react.default.createElement(_AlphaPicker.default, {
        onChange: this.onChange
      }), _react.default.createElement("div", {
        id: "result"
      }, _react.default.createElement(_Code.default, {
        colorCode: this.state.colorCode,
        alpha: this.state.alpha,
        onChange: this.onChange
      }), _react.default.createElement(_ColorResult.default, {
        color: this.state.color === 0 ? 0 : this.state.color
      }), this.state.alpha));
    }
  }]);

  return PickerPanel;
}(_react.Component); // PickerPanel.defaultProps = {
//   defaultCode: '#ffffff',
//   defaultBase: '0,255,255',
//   defaultRange: '255,0,0',
//   defaultAlpha: 0,
//   defaultColor: '',
//   onChange() {},
//   style: {}
// };


exports.default = PickerPanel;