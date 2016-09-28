import React, {
  Component,
} from 'react';

import {
  StyleSheet,
  View,
  Modal,
  ActivityIndicator
} from 'react-native';

const SIZES = ['small', 'normal', 'large'];

class Spinner extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: this.props.visible };
  }
  componentWillReceiveProps(nextProps) {
    const { visible } = nextProps;
    /* eslint-disable react/no-set-state */
    this.setState({ visible });
    /* eslint-enable react/no-set-state */
  }
  close() {
    /* eslint-disable react/no-set-state */
    this.setState({ visible: false });
    /* eslint-enable react/no-set-state */
  }
  renderSpinner() {
    const { visible } = this.state;

    if (!visible) {
      return (
        <View />
      );
    }

    const spinner = (
      <View
        key={`spinner_${Date.now()}`}
        style={styles.container}
      >
        <View
          style={[
            styles.background,
            { backgroundColor: this.props.overlayColor }
          ]}
        >
          <ActivityIndicator
            color={this.props.color}
            size={this.props.size}
            style={{ flex: 1 }}
          />
        </View>
      </View>
    );

    return (
      <Modal
        onRequestClose={() => {
          return this.close();
        }}
        transparent
        visible={visible}
      >
        {spinner}
      </Modal>
    );
  }
  render() {
    return this.renderSpinner();
  }
}

Spinner.defaultProps = {
  visible: false,
  color: 'white',
  size: 'large', // 'normal',
  overlayColor: 'rgba(0, 0, 0, 0.5)'
};

Spinner.propTypes = {
  color: React.PropTypes.string,
  overlayColor: React.PropTypes.string,
  size: React.PropTypes.oneOf(SIZES),
  visible: React.PropTypes.bool
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Spinner;
