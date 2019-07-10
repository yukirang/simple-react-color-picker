"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("../css/style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Code = function Code(_ref) {
  var _React$createElement;

  var colorCode = _ref.colorCode,
      alpha = _ref.alpha,
      onChange = _ref.onChange;
  return _react.default.createElement("div", null, _react.default.createElement("div", null, "Hex Code:"), _react.default.createElement("input", (_React$createElement = {
    type: "text",
    id: "code",
    value: colorCode
  }, _defineProperty(_React$createElement, "type", "code"), _defineProperty(_React$createElement, "onChange", onChange), _React$createElement)));
};

var _default = Code;
exports.default = _default;