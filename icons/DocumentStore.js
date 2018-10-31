'use strict';

exports.__esModule = true;
exports.DocumentStore = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('./Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DocumentStore = exports.DocumentStore = function DocumentStore(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'DocumentStore' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M4.99787498,6.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L17,23 M18,1 L18,6 L23,6 M3,12 C3,12 4,10 9,10 C14,10 15,12 15,12 L15,21 C15,21 14,23 9,23 C4,23 3,21 3,21 L3,12 Z M3,17 C3,17 5,19 9,19 C13,19 15,17 15,17 M3,13 C3,13 5,15 9,15 C13,15 15,13 15,13' })
  );
};