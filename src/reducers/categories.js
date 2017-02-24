import objectAssign from 'object-assign';
import ActionTypes from '../actions/types';

const categories = (state = {
  categories: []
}, action) => {
  switch (action.type) {
  case ActionTypes.SET_CATEGORIES:
    return objectAssign({}, state, {
      products: action.payload.categories
    });
  default:
    return state;
  }
};

export default categories;
