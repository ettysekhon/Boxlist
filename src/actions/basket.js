import ActionTypes from './types';
import createAction from './createAction';

const addProdct = createAction(ActionTypes.ADD_PRODUCT);
const removeProdct = createAction(ActionTypes.REMOVE_PRODUCT);
const selectProdct = createAction(ActionTypes.SELECT_PRODUCT);
const clearBkt = createAction(ActionTypes.CLEAR_BASKET);
const selectDvlryOption = createAction(ActionTypes.SELECT_DELIVERY_OPTION);

export const addProduct = (product) => {
  return (dispatch) => {
    dispatch(addProdct({
      product
    }));
  };
};

export const selectDeliveryOption = (deliveryOption) => {
  return (dispatch, getState) => {
    let companyName = '';
    let address = {
      street1: '',
      street2: '',
      townCity: '',
      postalCode: ''
    };
    const { app } = getState();
    if (deliveryOption === 'Order online & collect in store') {
      companyName = 'FG Halladeys & Sons';
      address = {
        street1: 'Unit 11 Orient Ind Park',
        street2: 'Simonds Rd',
        townCity: 'London',
        postalCode: 'E10 7DE'
      };
    } else if (app.account) {
      companyName = app.account.companyName;
      address = {
        street1: app.account.street1,
        street2: app.account.street2,
        townCity: app.account.townCity,
        postalCode: app.account.postalCode
      };
    }
    dispatch(selectDvlryOption({
      deliveryOption,
      companyName,
      address
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
