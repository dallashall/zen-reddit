import React from 'react';
import { Provider } from 'react-redux';

export default ({ store }) => (
  <Provider store={store}>
    <h1>Zen Reddit</h1>
  </Provider>
);
