import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

const NavBarTextLeftButton = (props) => {
  return (
    <View
      style={styles.leftItem}
    >
      <Text style={styles.leftText}>Cancel</Text>
    </View>);
};

const styles = StyleSheet.create({
  leftItem: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    paddingLeft: 15
  },
  leftText: {
    fontSize: fonts.size.m,
    color: colors.primary,
    marginLeft: 5
  }
});

export default NavBarTextLeftButton;
