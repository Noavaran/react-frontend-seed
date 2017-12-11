export const
    ADD_COUNT = 'APP/DATA/ADD/COUNT',
    REMOVE_COUNT = 'APP/DATA/REMOVE/COUNT';

export const addCount = data => {
    return {
        type: ADD_COUNT,
        payload: data
    }
};

export const removeCount = data => {
    return {
        type: REMOVE_COUNT,
        payload: data
    }
};