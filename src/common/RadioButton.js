import React, {
  PropTypes,
} from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import colors from '../styles/colors';

const RadioButton = (props) => {
  const { title, isChecked, onToggle } = props;
  const style = isChecked
    ? { backgroundColor: colors.primary }
    : { borderColor: colors.light.borderColorExtaLight, borderWidth: 1 };
  const accessibilityTraits = ['button'];
  if (isChecked) {
    accessibilityTraits.push('selected');
  }
  return (
    <TouchableOpacity
      accessibilityTraits={accessibilityTraits}
      activeOpacity={0.8}
      onPress={onToggle}
      style={styles.container}
    >
      <View style={[styles.checkbox, style]} />
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

RadioButton.propTypes = {
  isChecked: PropTypes.bool,
  onToggle: PropTypes.func,
  title: PropTypes.string,
};

const size = 24;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkbox: {
    width: size,
    height: size,
    borderRadius: size / 2,
    marginRight: 10,
  },
  title: {
    fontSize: 17,
    color: 'rgb(74,74,74)',
    flex: 1,
  },
});

export default RadioButton;
