export const
    GET_USER = 'APP/USER/GET/USER',
    USER_FETCH_SUCCESSFUL = 'APP/USER/FETCH/SUCCESSFUL',
    USER_FETCH_FAILED = 'APP/USER/FETCH/FAILED',
    USER_LOGOUT = 'APP/USER/LOGOUT';

export const login = user => {
    return {
        type: GET_USER,
        payload: user
    }
};

export const logout = () => {
    return {
        type: USER_LOGOUT
    }
};

const fetchUser = data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(data.password === '1') {
                resolve(data)
            } else {
                reject();
            }
        }, 1000);
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