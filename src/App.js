import React from 'react';

import {
  StatusBar,
  StyleSheet,
  View
} from 'react-native';

import Navigator from './Navigator';

import colors from './styles/colors';

const App = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'rgba(0, 0, 0, 0.2)'}
        barStyle={'default'}
        translucent
      />
      <Navigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark.backgroundColor,
    flex: 1
  },
});

export default App;
