import ActionTypes from './types';
import createAction from './createAction';
import API from '../api';

const productsRequest = createAction(ActionTypes.PRODUCTS_REQUEST);
const productsSuccess = createAction(ActionTypes.PRODUCTS_SUCCESS);
const productsFailure = createAction(ActionTypes.PRODUCTS_FAILURE);

const loadProducts = () => {
  return (dispatch) => {
    dispatch(productsRequest());
    API.loadProducts()
    .then((payload) => {
      dispatch(productsSuccess({
        products: payload
      }));
    }).catch((err) => {
      dispatch(productsFailure(null, err));
    });
  };
};

export default loadProducts;
