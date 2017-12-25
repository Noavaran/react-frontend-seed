import {START_LINEAR, END_LINEAR} from './';

const linearDeterminate = (state = {start: false}, action) => {
    switch (action.type) {
        case START_LINEAR: {
            return {...state, start: true}
        }
        case END_LINEAR: {
            return {...state, start: false}
        }
        default:
            return state
    }
};

export default linearDeterminate;