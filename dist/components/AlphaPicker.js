"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _color = require("../utils/color");

require("../css/style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlphaPicker = function AlphaPicker(_ref) {
  var onChange = _ref.onChange;
  var alphaList = (0, _color.getAlphaList)();
  return _react.default.createElement("div", {
    id: "alpha-picker"
  }, "Alpha", _react.default.createElement("table", {
    className: "alpha"
  }, _react.default.createElement("tbody", null, _react.default.createElement("tr", null, alphaList.map(function (item, index) {
    return _react.default.createElement("td", {
      key: item,
      onClick: onChange,
      value: item,
      style: {
        backgroundColor: 'rgba(0,0,0,' + item + ')'
      }
    });
  })))));
};

var _default = AlphaPicker;
exports.default = _default;