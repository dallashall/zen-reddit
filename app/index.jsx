import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import App from './components/app';
// Remove after testing
import {
  getToApi,
  postToApi,
} from './utils/api';
window.getToApi = getToApi;
// Remove after testing

const preloadedState = {};

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore(preloadedState);
  ReactDOM.render(<App store={store} />, root);
});
