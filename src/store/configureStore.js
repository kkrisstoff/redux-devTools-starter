import React from 'react';
import { createStore as initialCreateStore, compose } from 'redux';

// import { combineReducers } from 'redux';
// import * as reducers from '../reducers';

// const reducer = combineReducers(reducers);


export let createStore = initialCreateStore;

createStore = compose(
  // Middleware you want to use in development:
  //applyMiddleware(d1, d2, d3),
  // Required! Enable Redux DevTools with the monitors you chose
  require('redux-devtools').instrument(),
  require('redux-devtools').persistState(
    window.location.href.match(/[?&]debug_session=([^&]+)\b/)
  ),
  createStore
);

// console.log(finalCreateStore)
// export default function configureStore(initialState) {
//   const store = finalCreateStore;

//   // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
//   // if (module.hot) {
//   //   module.hot.accept('../reducers', () =>
//   //     store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
//   //   );
//   // }

//   return store;
// }