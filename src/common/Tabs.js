import React, {
  PropTypes,
} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

const Tabs = ({ tabs, onTabClick }) => {
  const theTabs = tabs.map((t, i) => {
    const thisClick = () => {
      return onTabClick(t);
    };
    return (
      <TouchableOpacity
        accessibilityTraits={'link'}
        accessible
        key={i}
        onPress={thisClick}
        style={styles.tab}
      >
        <View style={styles.icon}>
          <Icon
            color={'rgb(74, 74, 74)'}
            name={'ios-list-outline'}
            size={30}
          />
        </View>
        <Text style={styles.text}>{t}</Text>
      </TouchableOpacity>);
  });
  return (
    <View style={styles.container}>
      {
        theTabs
      }
    </View>
  );
};

Tabs.displayName = 'Tabs';

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  onTabClick: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.dark.backgroundColor
  },
  text: {
    height: 20,
    alignSelf: 'center',
    color: 'rgb(74, 74, 74)',
    fontSize: fonts.size.s
  },
  icon: {
    paddingRight: 10
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: '#ccc',
    borderRightWidth: 1,
    marginBottom: 5
  }
});

export default Tabs;
