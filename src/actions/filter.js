import ActionTypes from './types';
import { trackEvent } from '../common/Tracker';

export const applyCategories = (selectedCategories) => {
  trackEvent('filter', 'apply');
  return {
    type: ActionTypes.CATEGORY_FILTER_APPLY,
    payload: {
      selectedCategories
    }
  };
};

export const clearCategory = () => {
  trackEvent('filter', 'clear');
  return {
    type: ActionTypes.CATEGORY_FILTER_CLEAR
  };
};

export const toggleCategory = (category) => {
  trackEvent('filter', 'toggle');
  return {
    type: ActionTypes.CATEGORY_FILTER_TOGGLE,
    payload: {
      category
    }
  };
};
