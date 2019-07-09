"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("../css/style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Code = function Code(_ref) {
  var code = _ref.code,
      alpha = _ref.alpha,
      onChange = _ref.onChange;

  // const code = this.props.colorCode;
  // const alpha = this.props.alpha;
  var handleChange = function handleChange(e) {
    e.preventDefault();
    onChange(e.target.value, 'code');
  };

  return _react.default.createElement("div", null, _react.default.createElement("div", null, "Hex Code:"), _react.default.createElement("input", {
    type: "text",
    id: "code",
    value: code,
    onChange: handleChange
  }));
};

var _default = Code;
exports.default = _default;