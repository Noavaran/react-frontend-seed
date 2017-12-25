//persist

// import {createStore, applyMiddleware, compose} from "redux";
// import reducers from "./reducers";
// import { install } from 'redux-loop';
// import { persistStore, persistCombineReducers } from 'redux-persist';
// import storage from 'redux-persist/es/storage';
//
// const middleware = compose(
//     applyMiddleware(),
//     install()
// );
//
// const initialState = {};
//
//
// // const store = createStore(
// //     reducers,
// //     initialState,
// //     middleware
// // );
// /////////////////////////
// const config = {
//     key: 'root',
//     storage,
// };
//
// const reducer = persistCombineReducers(config, reducers);
//
// const configureStore = () => {
//     let store = createStore(reducer, initialState, middleware);
//     let persistor = persistStore(store);
//     return { persistor, store }
// };
//
//
// export default configureStore;


//not persist

import {createStore, applyMiddleware, compose} from "redux";
import reducers from "./reducers";
import { install } from 'redux-loop';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = composeEnhancers(
    applyMiddleware(),
    install()
);

const initialState = {};

let store = createStore(reducers, initialState, middleware);

export default store;