import objectAssign from 'object-assign';
import ActionTypes from '../actions/types';

const products = (state = {
  error: false,
  isLoading: false,
  products: [],
  filteredProducts: []
}, action) => {
  switch (action.type) {
  case ActionTypes.PRODUCTS_REQUEST:
    return objectAssign({}, state, {
      error: false,
      isLoading: true
    });
  case ActionTypes.PRODUCTS_SUCCESS:
    const products = action.payload.category
    ? state.products
    : action.payload.products;
    const filteredProducts = action.payload.category
    ? action.payload.products
    : state.filteredProducts;
    return objectAssign({}, state, {
      error: false,
      isLoading: false,
      products,
      filteredProducts
    });
  case ActionTypes.PRODUCTS_FAILURE:
    return objectAssign({}, state, {
      isLoading: false,
      error: true
    });
  default:
    return state;
  }
};

export default products;
