import React, {
  Component,
  PropTypes,
} from 'react';

import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

class Button extends Component {
  renderInnerText() {
    if (this.props.isLoading) {
      return (
        <ActivityIndicator
          animating
          color={this.props.activityIndicatorColor || 'black'}
          size={'small'}
          style={styles.spinner}
        />
      );
    }
    return (
      <Text style={[styles.textButton, this.props.textStyle]}>
        {this.props.children}
      </Text>
    );
  }
  render() {
    if (this.props.isDisabled === true || this.props.isLoading === true) {
      return (
        <View
          style={[styles.button,
            this.props.style,
            (this.props.disabledStyle || styles.opacity)]}
        >
          {this.renderInnerText()}
        </View>
      );
    }
    // Extract Touchable props
    const touchableProps = {
      activeOpacity: this.props.isDisabled ? 1 : 0.7,
      onPress: !this.props.isDisabled && this.props.onPress,
      onPressIn: this.props.onPressIn,
      onPressOut: this.props.onPressOut,
      onLongPress: this.props.onLongPress
    };
    return (
      <TouchableOpacity
        {...touchableProps}
        style={[styles.button, this.props.style]}
      >
        {this.renderInnerText()}
      </TouchableOpacity>
    );
  }
}

Button.displayName = 'Button';

Button.propTypes = {
  activityIndicatorColor: PropTypes.string,
  children: PropTypes.string.isRequired,
  disabledStyle: Text.propTypes.style,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onLongPress: PropTypes.func,
  onPress: PropTypes.func,
  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func,
  /* eslint-disable react/forbid-prop-types */
  style: PropTypes.array,
  /* eslint-enable react/forbid-prop-types */
  textStyle: Text.propTypes.style,
};

Button.defaultProps = {
  isDisabled: false
};

Button.isAndroid = Platform.OS === 'android';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  textButton: {
    fontSize: 18,
    alignSelf: 'center',
  },
  spinner: {
    alignSelf: 'center',
  },
  opacity: {
    opacity: 0.5,
  },
});

export default Button;
