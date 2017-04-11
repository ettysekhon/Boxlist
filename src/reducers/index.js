import { combineReducers } from 'redux';
import appReducer from './app';
import productsReducer from './products';
import basketReducer from './basket';
import checkoutReducer from './checkout';
import categoriesReducer from './categories';

export default combineReducers({
  app: appReducer,
  basket: basketReducer,
  checkout: checkoutReducer,
  products: productsReducer,
  categories: categoriesReducer
});
