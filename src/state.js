import {createStore, combineReducers} from 'redux';
import * as redusers from "./reducers"
import counterRuducer from "./reducers/counter.js";
import titleReducer from "./reducers/titleChanger";

const reducer = combineReducers(redusers);

const store = createStore(reducer);

export default store;
