import ActionTypes from '../actions/types';

const reducer = (state = { account: null }, action) => {
  switch (action.type) {
  case ActionTypes.SET_ACCOUNT:
    return { ...state, account: action.payload.account };
  case ActionTypes.APP_BOOTSTRAP:
    return { ...state, account: action.payload.account };
  default:
    return state;
  }
};

export default reducer;
