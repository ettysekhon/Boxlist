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
        color={colors.dark.color}
        name={'close'}
        size={30}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rightItem: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    paddingRight: 15
  },
});

export default NavBarCloseIcon;
