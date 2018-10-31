'use strict';

exports.__esModule = true;
exports.Stripe = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('./Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Stripe = exports.Stripe = function Stripe(props) {
  return _react2.default.createElement(
    _Icon.Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Stripe' }, props),
    _react2.default.createElement('path', { fill: '#AACBFB', fillRule: 'evenodd', d: 'M1,1 L23,1 L23,23 L1,23 L1,1 Z M11.1196337,9.18908425 C11.1196337,8.58622711 11.6142857,8.35435897 12.4335531,8.35435897 C13.6083516,8.35435897 15.0923077,8.70989011 16.2671062,9.343663 L16.2671062,5.71106227 C14.9841026,5.20095238 13.7165568,5 12.4335531,5 C9.2956044,5 7.20879121,6.6385348 7.20879121,9.37457875 C7.20879121,13.6409524 13.0827839,12.9608059 13.0827839,14.800293 C13.0827839,15.5113553 12.4644689,15.7432234 11.5988278,15.7432234 C10.3158242,15.7432234 8.67728938,15.2176557 7.37882784,14.5065934 L7.37882784,18.1855678 C8.81641026,18.8038828 10.2694505,19.0666667 11.5988278,19.0666667 C14.8140659,19.0666667 17.0245421,17.4745055 17.0245421,14.7075458 C17.0090842,10.1010989 11.1196337,10.9203663 11.1196337,9.18908425 L11.1196337,9.18908425 Z' })
  );
};