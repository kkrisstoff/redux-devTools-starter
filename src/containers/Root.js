// if (__DEV__) {
//   module.exports = require('./Root.dev');
// } else {
//   module.exports = require('./Root.prod');
// }

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AccessCnt from './AccessCnt';
import App from './App'

export default class Root extends Component {
    render() {
        const { store } = this.props;

        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}