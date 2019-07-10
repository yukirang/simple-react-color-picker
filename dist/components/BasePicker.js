"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _color = require("../utils/color");

require("../css/style.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var BasePicker = function BasePicker(_ref) {
  var onChange = _ref.onChange;
  var layers = [];

  for (var i = 0; i < 6; i++) {
    layers.push((0, _color.getLayer)(i));
  }

  var handleChange = function handleChange(e) {
    onChange(e.target.value, 'code');
  };

  return _react.default.createElement("div", {
    id: "BasePicker"
  }, "Base", _react.default.createElement("table", {
    className: "base"
  }, _react.default.createElement("tbody", null, _react.default.createElement("tr", null, layers.map(function (item, index) {
    return _react.default.createElement("td", {
      key: index
    }, item.map(function (item, index) {
      return _react.default.createElement("table", {
        className: "base",
        key: index
      }, _react.default.createElement("tbody", null, _react.default.createElement("tr", null, item.map(function (item, index) {
        return _react.default.createElement("td", {
          key: item,
          className: "block",
          value: item,
          onClick: onChange,
          style: {
            backgroundColor: 'rgb(' + item + ')'
          }
        });
      }))));
    }));
  })))));
};

var _default = BasePicker;
exports.default = _default;