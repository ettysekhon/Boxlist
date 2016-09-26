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

import constants from './utils/constants';

// TODO: refactor navigator
const renderRoute = (route, navigator) => {
  switch (route.route) {
  case constants.routes.CONFIRMATION:
    return (
      <ConfirmationView
        navigator={navigator}
      />
    );
  case constants.routes.SUPPLIER:
    return (
      <SupplierView
        navigator={navigator}
      />
    );
  case constants.routes.BASKET:
    return (
      <BasketView
        navigator={navigator}
      />
    );
  case constants.routes.CHECKOUT:
    return (
      <CheckoutView
        navigator={navigator}
      />
    );
  case constants.routes.PRODUCT:
    return (
      <ProductView
        navigator={navigator}
      />
    );
  default:
    return (
      <ProductsView
        navigator={navigator}
      />
    );
  }
};

class BoxListNavigator extends Component {
  render() {
    return (
      <Navigator
        configureScene={this.configureScene}
        initialRoute={{
          route: 'PRODUCTS'
        }}
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
