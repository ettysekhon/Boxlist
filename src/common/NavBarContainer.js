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
  leftItem: PropTypes.object,
  rightItem: PropTypes.object,
  title: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});

export default NavBarContainer;
