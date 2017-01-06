//import 'todomvc-app-css/index.css';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import configureStore from './store/configureStore';
import Chat from './containers/Chat'

const store = configureStore();

store.subscribe( () => {
    console.log("New State", store.getState());
});

render(
    <Provider store={store}>
        <Chat/>
    </Provider>,
    document.getElementById('root')
);
