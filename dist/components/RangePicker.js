"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _color = require("../utils/color");

require("../css/style.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var RangePicker = function RangePicker(_ref) {
  var onChange = _ref.onChange,
      baseColor = _ref.baseColor;
  var rangeList = (0, _color.getRangeList)(baseColor);
  return _react.default.createElement("div", {
    id: "range"
  }, "Range", _react.default.createElement("table", {
    id: "range-table"
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