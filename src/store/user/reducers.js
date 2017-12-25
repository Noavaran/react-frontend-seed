import {GET_USER, USER_FETCH_SUCCESSFUL, USER_FETCH_FAILED} from './';
import { loop, Cmd } from 'redux-loop';
import {fetchUser, userFetchFailedAction, userFetchSuccessfulAction} from './';

const user = (state = {isLogin: true, details: {}, initStarted: false}, action) => {
    switch (action.type) {
        case GET_USER:
            // return loop(
            //     {...state, initStarted: true},
            //     Cmd.action(fetchUser(action.payload)) // <-- let the middleware sort it out
            // );
            return loop(
                {...state, initStarted: true},
                Cmd.run(fetchUser, {
                    successActionCreator: userFetchSuccessfulAction,
                    failActionCreator: userFetchFailedAction,
                    args: [action.payload]
                })
            );
        case USER_FETCH_SUCCESSFUL:
            return {...state, isLogin: true, initStarted: false, details: action.payload};
        case USER_FETCH_FAILED:
            return state;

        default:
            return state
    }
};

export default user