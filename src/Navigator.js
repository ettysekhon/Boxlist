import React, {
  Component,
} from 'react';

import {
  BackAndroid,
  Platform,
  StyleSheet,
  Navigator
} from 'react-native';

import BasketView from './views/BasketView';
import ConfirmationView from './views/ConfirmationView';
import SupplierView from './views/SupplierView';
import CheckoutView from './views/CheckoutView';
import ProductView from './views/ProductView';
import ProductsView from './views/ProductsView';
import CategoryView from './views/CategoryView';
import FilterView from './views/FilterView';
import RegisterView from './views/RegisterView';

import constants from './utils/constants';
import { trackScreenView } from './common/Tracker';

// TODO: refactor navigator
const configureRoute = (route) => {
  if (Platform.OS === 'android') {
    return Navigator.SceneConfigs.FloatFromBottomAndroid;
  }
  if (route.route === constants.routes.REGISTER) {
    return Navigator.SceneConfigs.FloatFromBottom;
  }
  return Navigator.SceneConfigs.PushFromRight;
};

const renderRoute = (route, navigator) => {
  switch (route.route) {
  case constants.routes.CONFIRMATION:
    trackScreenView('ConfirmationView');
    return (
      <ConfirmationView
        navigator={navigator}
      />
    );
  case constants.routes.SUPPLIER:
    trackScreenView('SupplierView');
    return (
      <SupplierView
        navigator={navigator}
      />
    );
  case constants.routes.BASKET:
    trackScreenView('BasketView');
    return (
      <BasketView
        navigator={navigator}
      />
    );
  case constants.routes.CHECKOUT:
    trackScreenView('CheckoutView');
    return (
      <CheckoutView
        navigator={navigator}
      />
    );
  case constants.routes.PRODUCT:
    trackScreenView('ProductView');
    return (
      <ProductView
        navigator={navigator}
      />
    );
  case constants.routes.CATEGORY:
    trackScreenView('CategoryView');
    return (
      <CategoryView
        category={route.category}
        navigator={navigator}
      />
    );
  case constants.routes.FILTER:
    trackScreenView('FilterView');
    return (
      <FilterView
        navigator={navigator}
      />
    );
  case constants.routes.REGISTER:
    trackScreenView('RegisterView');
    return (
      <RegisterView
        navigator={navigator}
      />
    );
  case constants.routes.PRODUCTS:
    trackScreenView('ProductsView');
    return (
      <ProductsView
        navigator={navigator}
      />
    );
  default:
    trackScreenView('ProductsView');
    return (
      <ProductsView
        navigator={navigator}
      />
    );
  }
};

const handlers = [];

class BoxListNavigator extends Component {
  constructor() {
    super();
    this.handleBackButton = this.handleBackButton.bind(this);
  }
  getChildContext() {
    return {
      addBackButtonListener: this.addBackButtonListener,
      removeBackButtonListener: this.removeBackButtonListener,
    };
  }
  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBackButton);
  }
  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBackButton);
  }
  handleBackButton() {
    for (let i = handlers.length - 1; i >= 0; i -= 1) {
      if (handlers[i]()) {
        return true;
      }
    }

    const { navigator } = this;
    if (navigator && navigator.getCurrentRoutes().length > 1) {
      navigator.pop();
      return true;
    }

    return false;
  }
  render() {
    return (
      <Navigator
        configureScene={configureRoute}
        initialRoute={{
          route: 'PRODUCTS'
        }}
        ref={(c) => { this.navigator = c; }}
        renderScene={renderRoute}
        style={styles.container}
      />
    );
  }
}

BoxListNavigator.childContextTypes = {
  addBackButtonListener: React.PropTypes.func,
  removeBackButtonListener: React.PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default BoxListNavigator;
