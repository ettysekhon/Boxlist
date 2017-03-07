import React, {
  PropTypes,
} from 'react';

import {
  StyleSheet,
  Text
} from 'react-native';

import Button from './Button';

const BLButton = (props) => {
  return (
    <Button
      isDisabled={props.isDisabled}
      onPress={props.onPress}
      style={[styles.button, props.style]}
      textStyle={[styles.textStyle, props.textStyle]}
    >{ props.children }</Button>
  );
};

BLButton.displayName = 'BLButton';

BLButton.propTypes = {
  children: PropTypes.node,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  /* eslint-disable react/forbid-prop-types */
  style: PropTypes.object,
  /* eslint-enable react/forbid-prop-types */
  textStyle: Text.propTypes.style,
};

const styles = StyleSheet.create({
  button: {
    height: 45,
    borderWidth: 0,
    borderRadius: 0,
  },
  textStyle: {
    color: '#fff'
  }
});

export default BLButton;
