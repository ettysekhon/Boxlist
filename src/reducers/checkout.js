import objectAssign from 'object-assign';
import ActionTypes from '../actions/types.js';

const checkout = (state = {
  error: false,
  isLoading: false
}, action) => {
  switch (action.type) {
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
