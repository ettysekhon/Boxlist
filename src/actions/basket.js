import ActionTypes from './types.js';
import createAction from './createAction';

const addProduct = createAction(ActionTypes.ADD_PRODUCT);
const removeProduct = createAction(ActionTypes.REMOVE_PRODUCT);
const selectProduct = createAction(ActionTypes.SELECT_BASKET);
const emptyBkt = createAction(ActionTypes.EMPTY_BASKET);

export const addToBasket = (product) => {
  return (dispatch) => {
    dispatch(addProduct({
      product
    }));
  };
};

export const emptyBasket = () => {
  return (dispatch) => {
    dispatch(emptyBkt());
  };
};

export const removeFromBasket = (product) => {
  return (dispatch) => {
    dispatch(removeProduct({
      product
    }));
  };
};

export const selectProductForBasket = (product) => {
  return (dispatch) => {
    dispatch(selectProduct({
      product
    }));
  };
};
