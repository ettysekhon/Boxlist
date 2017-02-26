import ActionTypes from './types';

export const applyCategories = (selectedCategories) => {
  return {
    type: ActionTypes.CATEGORY_FILTER_APPLY,
    payload: {
      selectedCategories
    }
  };
};

export const clearCategory = () => {
  return {
    type: ActionTypes.CATEGORY_FILTER_CLEAR
  };
};

export const toggleCategory = (category) => {
  return {
    type: ActionTypes.CATEGORY_FILTER_TOGGLE,
    payload: {
      category
    }
  };
};
