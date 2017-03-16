import ActionTypes from '../actions/types';

// TODO: persist account on email success!
const blankState = {
  bootstrapped: false,
  error: false,
  isLoading: false,
  account: {
    fullName: '',
    emailAddress: '',
    password: '',
    phoneNumber: '',
    address: [{
      paymentAddress: true,
      deliveryAddress: true,
      fullName: '',
      street1: '',
      street2: '',
      city: '',
      county: '',
      postcode: '',
      phone: '',
      country: 'United Kingdom'
    }]
  },
  token: ''
};

const reducer = (state = blankState, action) => {
  switch (action.type) {
  case ActionTypes.APP_BOOTSTRAP:
    return { ...blankState,
      emailAddress: action.payload.emailAddress,
      token: action.payload.token,
      notificationsEnabled: action.payload.notificationsEnabled,
      bootstrapped: true };
  case ActionTypes.SIGNIN_SUCCESS:
    return { ...state,
      isLoading: false,
      emailAddress: action.payload.emailAddress,
      token: action.payload.token,
      bootstrapped: true };
  case ActionTypes.LOGIN_REQUEST:
    return { ...state,
      isLoading: true,
      loggedIn: false,
      token: '',
      error: false,
      bootstrapped: true };
  default:
    return state;
  }
};

export default reducer;
