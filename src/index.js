import React from 'react';
import App from './App'
import ReactDOM, { render } from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
render(
    <Provider store={store}>
        <CssBaseline />
        <App />
    </Provider>
    , document.querySelector('#root')
)