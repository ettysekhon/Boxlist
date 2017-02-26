import objectAssign from 'object-assign';
import ActionTypes from '../actions/types';

const categories = (state = {
  categories: []
}, action) => {
  switch (action.type) {
  case ActionTypes.SET_CATEGORIES:
    const categories = state.categories.length === 0
      ? action.payload.categories
      : state.categories;
    return objectAssign({}, state, {
      categories
    });
  default:
    return state;
  }
};

export default categories;
