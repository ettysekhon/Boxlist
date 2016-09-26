import React, {
  PropTypes,
} from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import Header from './Header';

const NavBarContainer = (props) => {
  return (
    <View style={styles.container}>
      <Header
        leftItem={props.leftItem}
        rightItem={props.rightItem}
        title={props.title}
      />
      {
        props.children
      }
    </View>
  );
};

NavBarContainer.displayName = 'NavBarContainer';

NavBarContainer.propTypes = {
  children: PropTypes.node.isRequired,
  leftItem: PropTypes.shape({
    content: PropTypes.node,
    onPress: PropTypes.func,
    title: PropTypes.string
  }),
  rightItem: PropTypes.shape({
    content: PropTypes.node,
    onPress: PropTypes.func,
    title: PropTypes.string
  }),
  title: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});

export default NavBarContainer;
