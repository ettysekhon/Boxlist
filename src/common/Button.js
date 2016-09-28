import React, {
  Component,
  PropTypes,
} from 'react';

import {
  ActivityIndicatorIOS,
  Platform,
  ProgressBarAndroid,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View
} from 'react-native';

class Button extends Component {
  renderInnerTextAndroid() {
    if (this.props.isLoading) {
      return (
        <ProgressBarAndroid
          color={this.props.activityIndicatorColor || 'black'}
          style={[{
            height: 20,
          }, styles.spinner]}
          styleAttr={'Inverse'}
        />
      );
    }
    return (
      <Text style={[styles.textButton, this.props.textStyle]}>
        {this.props.children}
      </Text>
    );
  }
  renderInnerTextiOS() {
    if (this.props.isLoading) {
      return (
        <ActivityIndicatorIOS
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
  renderInnerText() {
    if (Button.isAndroid) {
      return this.renderInnerTextAndroid();
    }
    return this.renderInnerTextiOS();
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
    let touchableProps = {
      activeOpacity: this.props.isDisabled ? 1 : 0.7,
      onPress: !this.props.isDisabled && this.props.onPress,
      onPressIn: this.props.onPressIn,
      onPressOut: this.props.onPressOut,
      onLongPress: this.props.onLongPress
    };
    if (Button.isAndroid) {
      touchableProps = Object.assign(touchableProps, {
          /* eslint-disable new-cap */
        background: this.props.background || TouchableNativeFeedback.SelectableBackground()
        /* eslint-enable new-cap */
      });
      return (
        <TouchableNativeFeedback {...touchableProps}>
          <Text style={[styles.button, this.props.style]}>
            {this.renderInnerTextAndroid()}
          </Text>
        </TouchableNativeFeedback>
      );
    }
    return (
      <TouchableOpacity
        {...touchableProps}
        style={[styles.button, this.props.style]}
      >
        {this.renderInnerTextiOS()}
      </TouchableOpacity>
    );
  }
}

Button.displayName = 'Button';

Button.propTypes = {
  activityIndicatorColor: PropTypes.string,
  background: (TouchableNativeFeedback.propTypes)
    ? TouchableNativeFeedback.propTypes.background
    : PropTypes.any,
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
