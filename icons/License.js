'use strict';

exports.__esModule = true;
exports.License = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('./Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var License = exports.License = function License(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'License' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M10,13 L10,16 L13,16 L13,19 L16,19 L16,21 L18,23 L23,23 L23,19 L12.74,8.74 C12.91,8.19 13,7.6 13,7 C13,3.69 10.31,1 7,1 C3.69,1 1,3.69 1,7 C1,10.31 3.69,13 7,13 C7.88,13 8.72,12.81 9.47,12.47 L10,13 Z M6,7 C5.4475,7 5,6.5525 5,6 C5,5.4475 5.4475,5 6,5 C6.5525,5 7,5.4475 7,6 C7,6.5525 6.5525,7 6,7 Z' })
  );
};