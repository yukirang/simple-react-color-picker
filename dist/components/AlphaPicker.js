"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _color = require("../utils/color");

require("../css/style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var AlphaPicker = function AlphaPicker(_ref) {
  var onChange = _ref.onChange;
  var alphaList = (0, _color.getAlphaList)();
  return _react.default.createElement("div", {
    id: "AlphaPicker"
  }, "Alpha", _react.default.createElement("table", {
    id: "alpha-table"
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