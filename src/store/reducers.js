import {combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form';
import user from './user/reducers';
import data from './data/reducers';
import layout from './layout/reducers';

const appReducers = combineReducers(
    {
        data,
        user,
        layout
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