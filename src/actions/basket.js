import ActionTypes from './types';
import createAction from './createAction';

const addProdct = createAction(ActionTypes.ADD_PRODUCT);
const removeProdct = createAction(ActionTypes.REMOVE_PRODUCT);
const selectProdct = createAction(ActionTypes.SELECT_PRODUCT);
const clearBkt = createAction(ActionTypes.CLEAR_BASKET);

export const addProduct = (product) => {
  return (dispatch) => {
    dispatch(addProdct({
      product
    }));
  };
};

export const clearBasket = () => {
  return (dispatch) => {
    dispatch(clearBkt());
  };
};

export const removeProduct = (product) => {
  return (dispatch) => {
    dispatch(removeProdct({
      product
    }));
  };
};

export const selectProduct = (product) => {
  return (dispatch) => {
    dispatch(selectProdct({
      product
    }));
  };
};
