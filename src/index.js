//persisit

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import {BrowserRouter} from 'react-router-dom';
// import {Provider} from 'react-redux';
// import { PersistGate } from 'redux-persist/es/integration/react';
// import configureStore from './store/store';
// import 'normalize.css';
//
// const { persistor, store } = configureStore();
//
// ReactDOM.render(
//     <Provider store={store}>
//         <PersistGate persistor={persistor}>
//             <BrowserRouter>
//                     <App />
//             </BrowserRouter>
//         </PersistGate>
//     </Provider>,
//     document.getElementById('root'));
//     registerServiceWorker();


//not persist

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store/store';
import 'normalize.css';


ReactDOM.render(
    <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();