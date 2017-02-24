import { combineReducers } from 'redux';
import productsReducer from './products';
import basketReducer from './basket';
import checkoutReducer from './checkout';
import categoriesReducer from './categories';

export default combineReducers({
  basket: basketReducer,
  checkout: checkoutReducer,
  products: productsReducer,
  categories: categoriesReducer
});
