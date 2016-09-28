import React, {
  PropTypes,
} from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import HeaderItem from './HeaderItem';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

const Header = ({ leftItem, title, rightItem }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftItem}>
        <HeaderItem
          item={leftItem}
        />
      </View>
      <View
        accessibilityLabel={title}
        accessibilityTraits={'header'}
        accessible
        style={styles.centerItem}
      >
        <Text style={styles.titleText}>{title}</Text>
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
  title: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark.backgroundColor,
    paddingTop: 23,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: colors.primary
  },
  titleText: {
    color: 'black',
    fontSize: fonts.size.s
  },
  leftItem: {
    flex: 1,
    height: 61,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  centerItem: {
    flex: 1,
    height: 61,
    marginTop: -3,
    alignItems: 'center',
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
