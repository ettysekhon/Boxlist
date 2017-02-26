import React from 'react';
import {
  TextInput as RNTextInput
} from 'react-native';

const styles = {
  textInput: {
    height: 45,
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
    color: 'gray',
  }
};

/* eslint-disable import/prefer-default-export */
export const SearchTextInput = ({ style, ...props }) => {
  const newProps = {
    autoCorrect: false,
    keyboardType: 'default',
    autoCapitalize: 'none',
    returnKeyType: 'search',
    underlineColorAndroid: 'transparent'
  };
  return (
    <RNTextInput
      onLayout={() => { this.textInput.focus(); return; }}
      ref={(ref) => { this.textInput = ref; return; }}
      style={[styles.textInput, style]}
      {...props}
      {...newProps}
    />
  );
};


/* eslint-disable react/forbid-prop-types */
SearchTextInput.propTypes = {
  style: React.PropTypes.object
};
/* eslint-enable react/forbid-prop-types */
