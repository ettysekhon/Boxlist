import React, {
  PropTypes,
} from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import Header from './Header';
import HomePageHeader from './HomePageHeader';

const NavBarContainer = (props) => {
  const header = props.simple
    ? (
      <Header
        leftItem={props.leftItem}
        rightItem={props.rightItem}
        title={props.title}
      />
    )
    : (
      <HomePageHeader
        leftItem={props.leftItem}
        onTabClick={props.onTabClick}
        rightItem={props.rightItem}
        tabs={props.tabs}
        title={props.title}
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

NavBarContainer.displayName = 'NavBarContainer';

NavBarContainer.defaultProps = {
  simple: true
};

NavBarContainer.propTypes = {
  simple: PropTypes.bool,
  children: PropTypes.node.isRequired,
  /* eslint-disable react/forbid-prop-types */
  leftItem: PropTypes.object,
  rightItem: PropTypes.object,
  /* eslint-enable react/forbid-prop-types */
  tabs: PropTypes.arrayOf(PropTypes.string),
  onTabClick: PropTypes.func,
  title: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});

export default NavBarContainer;
