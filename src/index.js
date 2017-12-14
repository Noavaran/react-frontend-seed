import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
// import {store, persistor} from './store/store';
// import store from './store/store';
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from './store/store'

const { persistor, store } = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root'));
    registerServiceWorker();
