"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("../css/style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColorResult = function ColorResult(_ref) {
  var color = _ref.color;
  return _react.default.createElement("div", {
    id: "color-result",
    style: {
      backgroundColor: '' + color
    }
  });
};

var _default = ColorResult;
exports.default = _default;