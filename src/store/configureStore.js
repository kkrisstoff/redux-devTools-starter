import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers from '../reducers';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

const reducer =  combineReducers(reducers);
const loggerMiddleware = createLogger();

export default function configureStore(initialState) {
  return createStore(
    reducer,
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware // neat middleware that logs actions
    ));
}
