import React, {
  PropTypes,
} from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import Header from './Header';

const SimpleNavBarContainer = (props) => {
  const header = (
    <Header
      leftItem={props.leftItem}
      rightItem={props.rightItem}
    />
  );
  return (
    <View style={styles.container}>
      {
        header
      }
      {
        props.children
      }
    </View>
  );
};

SimpleNavBarContainer.displayName = 'SimpleNavBarContainer';

SimpleNavBarContainer.propTypes = {
  children: PropTypes.node.isRequired,
  /* eslint-disable react/forbid-prop-types */
  leftItem: PropTypes.object,
  rightItem: PropTypes.object,
  /* eslint-enable react/forbid-prop-types */
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});

export default SimpleNavBarContainer;
