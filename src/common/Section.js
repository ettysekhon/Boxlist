import React, {
  PropTypes,
} from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const FormSection = ({ title, children }) => {
  const header = (
    <Text
      style={styles.header}
    >
      {
        title
      }
    </Text>
  );
  return (
    <View style={styles.container}>
      {
        header
      }
      {
        children
      }
    </View>
  );
};

FormSection.displayName = 'FormSection';

FormSection.propTypes = {
  children: PropTypes.node.isRequired,
  /* eslint-disable react/forbid-prop-types */
  title: PropTypes.string
  /* eslint-enable react/forbid-prop-types */
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'red'
  },
  header: {
    fontSize: 18,
    color: 'rgb(74,74,74)',
    marginBottom: 10,
    paddingLeft: 10
  }
});

export default FormSection;
