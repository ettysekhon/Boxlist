import objectAssign from 'object-assign';
import ActionTypes from '../actions/types';

const emptyCheckout = {
  error: false,
  isLoading: false,
  selectedDeliveryOption: 'Order online & collect in store',
  companyName: 'FG Halladeys & Sons',
  address: {
    street1: 'Unit 11 Orient Ind Park',
    street2: 'Simonds Rd',
    townCity: 'London',
    postalCode: 'E10 7DE'
  },
  addressLocation: {
    latitude: 51.5639151,
    longitude: 0.0692
  }
};

const checkout = (state = emptyCheckout, action) => {
  switch (action.type) {
  case ActionTypes.CLEAR_BASKET:
    return objectAssign({}, emptyCheckout);
  case ActionTypes.SET_ACCOUNT:
    return { ...state,
      address: {
        street1: action.payload.account.street1,
        street2: action.payload.account.street2,
        townCity: action.payload.account.townCity,
        postalCode: action.payload.account.postalCode
      },
      companyName: action.payload.account.companyName
    };
  case ActionTypes.SELECT_DELIVERY_OPTION:
    return { ...state,
      address: {
        street1: action.payload.address.street1,
        street2: action.payload.address.street2,
        townCity: action.payload.address.townCity,
        postalCode: action.payload.address.postalCode
      },
      companyName: action.payload.companyName,
      selectedDeliveryOption: action.payload.deliveryOption
    };
  case ActionTypes.SET_ADDRESS_LOCATION:
    return { ...state,
      addressLocation: {
        latitude: action.payload.latitude,
        longitude: action.payload.longitude
      }
    };
  case ActionTypes.PLACE_ORDER_SUCCESS:
    return objectAssign({}, state, {
      error: false,
      isLoading: false
    });
  case ActionTypes.PLACE_ORDER_REQUEST:
    return objectAssign({}, state, {
      error: false,
      isLoading: true
    });
  case ActionTypes.PLACE_ORDER_FAILURE:
    return objectAssign({}, state, {
      error: true,
      isLoading: false
    });
  default:
    return state;
  }
};

export default checkout;
