import {
  StyleSheet,
  Platform
} from 'react-native';

/* eslint-disable import/prefer-default-export */
export const create = (styles) => {
/* eslint-disable import/prefer-default-export */
  const platformStyles = {};
  // TODO: use reduce rather than forEach
  Object.keys(styles).forEach((name) => {
    /* eslint-disable prefer-const */
    let { ios, android, ...style } = { ...styles[name] };
    /* eslint-enable prefer-const */
    if (ios && Platform.OS === 'ios') {
      style = { ...style, ...ios };
    }
    if (android && Platform.OS === 'android') {
      style = { ...style, ...android };
    }
    platformStyles[name] = style;
  });
  return StyleSheet.create(platformStyles);
};
