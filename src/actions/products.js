import ActionTypes from './types';
import createAction from './createAction';
import API from '../api';

const productsRequest = createAction(ActionTypes.PRODUCTS_REQUEST);
const productsSuccess = createAction(ActionTypes.PRODUCTS_SUCCESS);
const productsFailure = createAction(ActionTypes.PRODUCTS_FAILURE);

const loadProducts = (page, category, query) => {
  return (dispatch) => {
    dispatch(productsRequest());
    API.loadProducts(page, category, query)
    .then((payload) => {
      dispatch(productsSuccess({
        products: payload.products || []
      }));
      dispatch({
        type: ActionTypes.SET_CATEGORIES,
        payload: payload.categories,
        error: null
      });
    }).catch((err) => {
      dispatch(productsFailure(null, err));
    });
  };
};

export default loadProducts;
