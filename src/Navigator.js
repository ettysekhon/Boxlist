import React, {
  Component,
} from 'react';

import {
  StyleSheet,
  Navigator
} from 'react-native';

import BasketView from './components/views/BasketView';
import ConfirmationView from './components/views/ConfirmationView';
import SupplierView from './components/views/SupplierView';
import CheckoutView from './components/views/CheckoutView';
import ProductView from './components/views/ProductView';
import ProductsView from './components/views/ProductsView';

// TODO: refactor navigator
const renderRoute = (route, navigator) => {
  if (route.confirmation) {
    return (
      <ConfirmationView
        navigator={navigator}
      />
    );
  }
  if (route.supplier) {
    return (
      <SupplierView
        navigator={navigator}
      />
    );
  }
  if (route.basket) {
    return (
      <BasketView
        navigator={navigator}
      />
    );
  }
  if (route.checkout) {
    return (
      <CheckoutView
        navigator={navigator}
      />
    );
  }
  if (route.product) {
    return (
      <ProductView
        navigator={navigator}
      />
    );
  }
  if (route.products) {
    return (
      <ProductsView
        navigator={navigator}
      />
    );
  }
  return (<ProductsView
    navigator={navigator}
  />);
};

class BoxListNavigator extends Component {
  render() {
    return (
      <Navigator
        configureScene={this.configureScene}
        initialRoute={{}}
        renderScene={renderRoute}
        style={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default BoxListNavigator;
