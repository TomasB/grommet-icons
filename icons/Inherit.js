'use strict';

exports.__esModule = true;
exports.Inherit = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('./Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Inherit = exports.Inherit = function Inherit(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Inherit' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#231F20', strokeWidth: '2', d: 'M17,18 L12,15 L17,18 Z M7,18 L12,15 L12,11 M17,20 C17,21.657 18.343,23 20,23 C21.657,23 23,21.657 23,20 C23,18.343 21.657,17 20,17 C18.343,17 17,18.343 17,20 L17,20 L17,20 Z M4,17 C2.343,17 1,18.343 1,20 C1,21.657 2.343,23 4,23 C5.657,23 7,21.657 7,20 C7,18.343 5.657,17 4,17 L4,17 L4,17 Z M17,6 C17,8.761 14.761,11 12,11 C9.239,11 7,8.761 7,6 C7,3.239 9.239,1 12,1 C14.761,1 17,3.239 17,6 L17,6 L17,6 Z' })
  );
};