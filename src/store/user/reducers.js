import {GET_USER, USER_FETCH_SUCCESSFUL, USER_FETCH_FAILED, USER_LOGOUT} from './';
import { loop, Cmd } from 'redux-loop';
import {fetchUser, userFetchFailedAction, userFetchSuccessfulAction} from './';
import Storage from '../../utils/storage';
import {endLinear} from '../linearDeterminate';

const user = (state = {isLogin: false, details: {}, initStarted: false, error: ''}, action) => {
    let auth = Storage.get('AUTH');
    if(auth && auth.isLogin && auth.details && auth.details.username) {
        state = {isLogin: true, details: auth.details, initStarted: false}
    }
    switch (action.type) {
        case GET_USER:
            return loop(
                {...state, initStarted: true, error: ''},
                Cmd.run(fetchUser, {
                    successActionCreator: userFetchSuccessfulAction,
                    failActionCreator: userFetchFailedAction,
                    args: [action.payload]
                })
            );
        case USER_FETCH_SUCCESSFUL:
            Storage.set('AUTH', {isLogin: true, initStarted: false, details: action.payload});
            return {...state, isLogin: true, initStarted: false, details: action.payload, error: ''};
        case USER_FETCH_FAILED:
            Storage.set('AUTH', {isLogin: false, initStarted: false, details: {}});
            return loop(
                {...state, isLogin: false, initStarted: false, details: {}, error: 'پسورد اشتباه است.'},
                Cmd.action(endLinear())
            );
            // return {...state, isLogin: false, initStarted: false, details: {},  error: 'پسورد اشتباه است.'};
        case USER_LOGOUT:
            Storage.remove('AUTH');
            return {...state, isLogin: false, initStarted: false, details: {}};
        default:
            return state
    }
};

export default user