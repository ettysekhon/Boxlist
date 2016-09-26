import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

import reducers from '../reducers';

const thunk = ({ dispatch, getState }) => {
  return (next) => {
    return (action) => {
      if (typeof action === 'function') {
        return action(dispatch, getState);
      }
      return next(action);
    };
  };
};

const middleware = applyMiddleware(thunk, createLogger());

export default (data = {}) => {
  return createStore(reducers, data, middleware);
};
