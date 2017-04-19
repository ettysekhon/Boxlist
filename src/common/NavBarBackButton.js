import React from 'react';

import {
  Text,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {
  create,
} from './StyleSheet';
import fonts from '../styles/fonts';
import colors from '../styles/colors';

const NavBarBackButton = (props) => {
  return (
    <View
      style={styles.leftItem}
    >
      <Icon
        color={colors.primary}
        name={'ios-arrow-back'}
        size={17.5}
        style={styles.icon}
      />
      <Text style={styles.leftText}>Back</Text>
    </View>);
};

const styles = create({
  leftItem: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    paddingLeft: 15
  },
  icon: {
    android: {
      marginTop: 1
    }
  },
  leftText: {
    fontSize: fonts.size.s,
    color: colors.primary,
    marginLeft: 5
  }
});

export default NavBarBackButton;
