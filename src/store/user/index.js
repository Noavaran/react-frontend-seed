export const
    GET_USER = 'APP/USER/GET/USER',
    USER_FETCH_SUCCESSFUL = 'APP/USER/FETCH/SUCCESSFUL',
    USER_FETCH_FAILED = 'APP/USER/FETCH/FAILED';

export const login = user => {
    return {
        type: GET_USER,
        payload: user
    }
};

const fetchUser = data => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 3000);
    });
};

const userFetchSuccessfulAction = user => {
    return {
        type: USER_FETCH_SUCCESSFUL,
        payload: user
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