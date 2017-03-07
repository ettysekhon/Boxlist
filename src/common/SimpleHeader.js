import React, {
  PropTypes,
} from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import HeaderItem from './HeaderItem';
import colors from '../styles/colors';

const Header = ({ leftItem, rightItem }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftItem}>
        <HeaderItem
          item={leftItem}
        />
      </View>
      <View style={styles.rightItem}>
        <HeaderItem
          item={rightItem}
        />
      </View>
    </View>
  );
};

Header.displayName = 'Header';

Header.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  leftItem: PropTypes.object,
  rightItem: PropTypes.object,
  /* eslint-enable react/forbid-prop-types */
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark.backgroundColor,
    paddingTop: 23,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: colors.primary
  },
  leftItem: {
    flex: 1,
    height: 61,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  rightItem: {
    flex: 1,
    height: 61,
    alignItems: 'flex-end',
    justifyContent: 'center'
  }
});

export default Header;
