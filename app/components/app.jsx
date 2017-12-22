import React from 'react';
import { Provider } from 'react-redux';
import Nav from './nav';
import Main from './main';

export default ({ store }) => (
  <Provider store={store}>
    <React.Fragment>
      <header>
        <h1>Zen Reddit</h1>
      </header>
      <div className="container">
        <Nav />
        <Main />
      </div>
    </React.Fragment>
  </Provider>
);
