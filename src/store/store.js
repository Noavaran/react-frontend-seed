import {createStore, applyMiddleware, compose} from "redux";
import reducers from "./reducers";
import { install } from 'redux-loop';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

const middleware = compose(
    applyMiddleware()
);

const initialState = {};


// const store = createStore(
//     reducers,
//     initialState,
//     middleware
// );
/////////////////////////
const config = {
    key: 'root',
    storage,
};

const reducer = persistCombineReducers(config, reducers);

const configureStore = () => {
    let store = createStore(reducer, initialState, middleware, install());
    let persistor = persistStore(store);
    return { persistor, store }
};


export default configureStore;