'use strict';

exports.__esModule = true;
exports.FolderCycle = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('./Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FolderCycle = exports.FolderCycle = function FolderCycle(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'FolderCycle' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M7.0001,18 C7.0001,15.239 9.2391,13 12.0001,13 C13.9851,13 15.6991,14.156 16.5,16 M17.0001,18 C17.0001,20.761 14.7611,23 12.0001,23 C10.0151,23 8.3011,21.844 7.5,20 M13.0001,16 L17.0001,16 L17.0001,12 M11.0001,20 L7.0001,20 L7.0001,24 M4.0001,23 L1.0001,23 L1.0001,5 L1.0001,1 L9.0001,1 L12.0001,5 L23.0001,5 L23.0001,23 L19.0001,23 M1.0001,9 L23.0001,9 M4,23 L1,23 L1,1 L9,1 L12,5 L23,5 L23,23 L19,23 M1,9 L23,9' })
  );
};