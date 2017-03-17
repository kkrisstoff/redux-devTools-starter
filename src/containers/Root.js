import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import configuredStore from '../store/configureStore';

import App from './App'
import Login from './Login';
import Chat from './Chat'
import List from './List'

const store = configuredStore;

const Root = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path="/access" component={Login} />
        <Route path="/chat" component={Chat} />
        <Route path="/list" component={List} />
      </Route>
    </Router>
  </Provider>
);

export default Root;