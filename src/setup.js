import React, {
} from 'react';

import { Provider } from 'react-redux';

import App from './App';
import createStore from './store';
import bootstrap from './actions/app';

const store = createStore();
// trigger app bootstrap
store.dispatch(bootstrap());

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;
