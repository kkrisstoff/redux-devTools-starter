import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers from '../reducers';
import createSagaMiddleware from 'redux-saga'
import createLogger from 'redux-logger'

const reducer =  combineReducers(reducers);
const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

import mySaga from '../sagas';

function configureStore(initialState) {
  return createStore(
    reducer,
    applyMiddleware(
      sagaMiddleware, // lets us dispatch() functions
      loggerMiddleware // neat middleware that logs actions
    ));
}

const configuredStore = configureStore();

sagaMiddleware.run(mySaga);

export default configuredStore;