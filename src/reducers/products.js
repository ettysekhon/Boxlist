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
    return objectAssign({}, state, {
      error: false,
      isLoading: false,
      products: action.payload.category
        ? state.products
        : action.payload.products,
      filteredProducts: action.payload.category
        ? action.payload.products
        : state.filteredProducts
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
