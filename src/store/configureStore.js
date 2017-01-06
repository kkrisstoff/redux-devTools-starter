// if (__DEV__) {
//   module.exports = require('./configureStore.dev');
// } else {
//   module.exports = require('./configureStore.prod');
// }

import { createStore, combineReducers } from 'redux';
import * as reducers from '../reducers';

const reducer =  combineReducers(reducers);

export default function configureStore(initialState) {
    return createStore(reducer, initialState);
}
