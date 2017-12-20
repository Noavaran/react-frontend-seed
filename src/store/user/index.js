export const
    GET_USER = 'APP/USER/GET/USER',
    USER_FETCH_SUCCESSFUL = 'APP/USER/FETCH/SUCCESSFUL',
    USER_FETCH_FAILED = 'APP/USER/FETCH/FAILED';

export const login = user => {
    console.log('user login store', user);
    return {
        type: GET_USER,
        payload: user
    }
};

const fetchUser = data => {
    console.log('fetchUser', data);
    return data
};

const userFetchSuccessfulAction = user => {
    console.log('userFetchSuccessfulAction', user);
    return {
        type: USER_FETCH_SUCCESSFUL,
        user
    };
};

const userFetchFailedAction = err => {
    return {
        type: USER_FETCH_FAILED,
        err
    }
};

export {
    fetchUser, userFetchSuccessfulAction, userFetchFailedAction
}