var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import { Icon } from './Icon';

export var DocumentTime = function DocumentTime(props) {
  return React.createElement(
    Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'DocumentTime' }, props),
    React.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M4.99787498,6.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L17,23 M18,1 L18,6 L23,6 M10,23 C13.8659932,23 17,19.8659932 17,16 C17,12.1340068 13.8659932,9 10,9 C6.13400675,9 3,12.1340068 3,16 C3,19.8659932 6.13400675,23 10,23 Z M10,12 L10,16 L13,19' })
  );
};