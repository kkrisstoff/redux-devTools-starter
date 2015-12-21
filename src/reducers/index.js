import { combineReducers } from 'redux';

import counter from "./counter";
import title from "./titleChanger";
import friends from "./friends";
import todos from "./todos";

export default combineReducers({
  counter,
  title,
  friends,
  todos
})
