'use strict';

exports.__esModule = true;
exports.Dxc = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('./Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dxc = exports.Dxc = function Dxc(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Dxc' }, props),
    _react2.default.createElement('path', { fillRule: 'evenodd', d: 'M12,14 L16,21 L8,21 L12,14 Z M12,10 L8,3 L16,3 L12,10 Z M2,18 C0.65763624,18 -0.00903042669,18 1.01172597e-13,18 L1.01172597e-13,6 L2,6 C5.3137085,6 8,8.6862915 8,12 C8,15.3137085 5.3137085,18 2,18 Z M22,18 C18.6862915,18 16,15.3137085 16,12 C16,8.6862915 18.6862915,6 22,6 L24,6 L24,18 C24.0090304,18 23.3423638,18 22,18 Z' })
  );
};