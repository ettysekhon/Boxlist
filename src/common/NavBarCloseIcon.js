import React from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import colors from '../styles/colors';

const NavBarCloseIcon = (props) => {
  return (
    <View
      style={styles.rightItem}
    >
      <EvilIcons
        color={colors.primary}
        name={'close'}
        size={20}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rightItem: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    paddingRight: 10
  },
});

export default NavBarCloseIcon;
