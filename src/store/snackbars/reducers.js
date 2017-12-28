import {SHOW_SNACK_BAR, HIDE_SNACK_BAR} from './';

const snackBars = (state = {message: '', open: false}, action) => {

    switch (action.type) {
        case SHOW_SNACK_BAR: {
            return {...state, message: action.payload, open: true}
        }
        case HIDE_SNACK_BAR: {
            return {...state, message: '', open: false}
        }
        default: {
            return {...state}
        }
    }

};

export default snackBars