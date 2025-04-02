import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk';

import reducers from './reducers';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

const store = configureStore({reducer: reducers}, compose(applyMiddleware(thunk)));

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
)