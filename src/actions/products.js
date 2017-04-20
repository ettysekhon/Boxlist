import ActionTypes from './types';
import createAction from './createAction';
import API from '../api';
import { getItem } from '../utils/storage';
import { trackEvent } from '../common/Tracker';

const appBootstrap = createAction(ActionTypes.APP_BOOTSTRAP);
const productsRequest = createAction(ActionTypes.PRODUCTS_REQUEST);
const productsSuccess = createAction(ActionTypes.PRODUCTS_SUCCESS);
const productsFailure = createAction(ActionTypes.PRODUCTS_FAILURE);

const loadProducts = (page, category, query) => {
  trackEvent('search', `category: ${category}, query: ${query}, page: ${page}`);
  return (dispatch) => {
    dispatch(productsRequest());
    // get some initial state from storage
    getItem('APP_STATE')
      .then((item) => {
        const appState = {
          account: null
        };
        if (item) {
          appState.account = JSON.parse(item);
        }
        dispatch(appBootstrap(appState));
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
