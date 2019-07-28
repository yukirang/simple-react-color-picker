"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _color = require("../utils/color");

require("../css/style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RangePicker = function RangePicker(_ref) {
  var onChange = _ref.onChange,
      baseColor = _ref.baseColor;
  var rangeList = (0, _color.getRangeList)(baseColor);
  return _react.default.createElement("div", {
    id: "range-picker"
  }, "Range", _react.default.createElement("table", {
    className: "range"
  }, _react.default.createElement("tbody", null, _react.default.createElement("tr", null, rangeList.map(function (item, index) {
    return _react.default.createElement("td", {
      key: item,
      onClick: onChange,
      value: item,
      style: {
        backgroundColor: 'rgb(' + item + ')'
      }
    });
  })))));
};

var _default = RangePicker;
exports.default = _default;