// if (__DEV__) {
//   module.exports = require('./Root.dev');
// } else {
//   module.exports = require('./Root.prod');
// }

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import AccessCnt from './AccessCnt';
//import App from './App'
import Chat from './Chat'

import configureStore from '../store/configureStore';

const store = configureStore();

console.log(store);

store.subscribe( () => {
    console.log("New State", store.getState());
});

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Chat />
            </Provider>
        );
    }
}