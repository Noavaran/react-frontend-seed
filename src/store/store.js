import {createStore, applyMiddleware, compose} from "redux";
import reducers from "./reducers";
import { install } from 'redux-loop';

const middleware = compose(
    applyMiddleware(),
    install()
);

const initialState = {};


const store = createStore(
    reducers,
    initialState,
    middleware
);

export default store;