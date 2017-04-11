import ActionTypes from './types';
import createAction from './createAction';
import API from '../api';
import { getItem } from '../utils/storage';

const appBootstrap = createAction(ActionTypes.APP_BOOTSTRAP);
const productsRequest = createAction(ActionTypes.PRODUCTS_REQUEST);
const productsSuccess = createAction(ActionTypes.PRODUCTS_SUCCESS);
const productsFailure = createAction(ActionTypes.PRODUCTS_FAILURE);

const loadProducts = (page, category, query) => {
  return (dispatch) => {
    dispatch(productsRequest());
    // get some initial state from storage
    getItem('APP_STATE')
      .then((item) => {
        let appState = {
          account: null
        };
        if (item) {
          appState = JSON.parse(item);
        }
        dispatch(appBootstrap({
          account: appState
        }));
        API.loadProducts(page, category, query)
        .then((payload) => {
          dispatch(productsSuccess({
            category,
            products: payload.products || []
          }));
          dispatch({
            type: ActionTypes.SET_CATEGORIES,
            payload: {
              categories: payload.categories
            },
            error: null
          });
        })
        .catch((err) => {
          dispatch(productsFailure(null, err));
        });
      });
  };
};

export default loadProducts;
