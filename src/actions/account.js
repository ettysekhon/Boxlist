import ActionTypes from './types';
import createAction from './createAction';
import constants from '../utils/constants';
import { setItem } from '../utils/storage';

const setAccountDetails = createAction(ActionTypes.SET_ACCOUNT);
const saveAppState = (state) => {
  setItem('APP_STATE', state);
};

/* eslint-disable import/prefer-default-export */
export const setAccount = (account, navigator) => {
  return (dispatch) => {
    dispatch(setAccountDetails({
      account
    }));
    saveAppState(account);
    if (navigator) {
      requestAnimationFrame(() => {
        return navigator.replace({
          route: constants.routes.CHECKOUT
        });
      });
    }
  };
};
/* eslint-enable import/prefer-default-export */
