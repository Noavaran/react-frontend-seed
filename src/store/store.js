import {createStore, applyMiddleware, compose} from "redux";
import reducers from "./reducers";

const composeEnhancers = compose;

const middleware = composeEnhancers(
    applyMiddleware()
);

const initialState = {};


const store = createStore(
    reducers,
    initialState,
    middleware
);

export default store;