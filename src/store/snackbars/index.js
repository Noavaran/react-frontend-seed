export const
    SHOW_SNACK_BAR = 'APP/SHOW/SNACK/BAR',
    HIDE_SNACK_BAR = 'APP/HIDE/SNACK/BAR';

export const showSnackBars = message => {
    return {
        type: SHOW_SNACK_BAR,
        payload: message
    }
};

export const hideSnackBar = () => {
    return {
        type: HIDE_SNACK_BAR
    }
};