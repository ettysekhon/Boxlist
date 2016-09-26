import objectAssign from 'object-assign';
import ActionTypes from '../actions/types.js';

const products = (state = {
  error: false,
  isLoading: false,
  products: []
}, action) => {
  switch (action.type) {
  case ActionTypes.PRODUCTS_REQUEST:
    return objectAssign({}, state, {
      error: false,
      isLoading: true,
      products: []
    });
  case ActionTypes.PRODUCTS_SUCCESS:
    return objectAssign({}, state, {
      error: false,
      isLoading: false,
      products: action.payload.products
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
