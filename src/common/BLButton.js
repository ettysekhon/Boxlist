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
      children={props.text}
      isDisabled={props.isDisabled}
      onPress={props.onPress}
      style={[styles.button, props.style]}
      textStyle={[styles.textStyle, props.textStyle]}
    />
  );
};

BLButton.displayName = 'BLButton';

BLButton.propTypes = {
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  /* eslint-disable react/forbid-prop-types */
  style: PropTypes.object,
  /* eslint-enable react/forbid-prop-types */
  text: PropTypes.string.isRequired,
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
