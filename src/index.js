import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import store from './state.js'

ReactDOM.render(<App />, document.getElementById('root'));

store.subscribe(() => console.log('New state', store.getState()));

console.log(1);
store.dispatch({
  type: 'INCREASE_COUNTER'
})

console.log(2);
store.dispatch({
  type: 'INCREASE_COUNTER'
})

console.log(4);
store.dispatch({
  type: 'RESET_COUNTER'
})

console.log(4);
store.dispatch({
  type: 'CHANGE_TITLE',
  payload: "new title"
})
