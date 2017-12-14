import {combineReducers} from "redux";
import data from './data/reducers';
import { reducer as formReducer } from 'redux-form';

const appReducers = combineReducers(
    {
        data
    }
);

const app = (state, action) => {
    // if (action.type === USER_LOGGED_OUT) {
    //     state = undefined;
    // }
    return appReducers(state, action)
};

const reducers = combineReducers(
    {
        app
    }
);

export default {
    reducer: reducers,
    form: formReducer

};