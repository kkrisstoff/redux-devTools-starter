// if (__DEV__) {
//   module.exports = require('./Root.dev');
// } else {
//   module.exports = require('./Root.prod');
// }

import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import configureStore from '../store/configureStore';

//import AccessCnt from './AccessCnt';
//import App from './App'
import Chat from './Chat'

const store = configureStore();

const Root = ({ store }) => (
  <Provider store={store}>
      <Router history={browserHistory}>
          <Route path="/" component={Chat} />
      </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;