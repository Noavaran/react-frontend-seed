import {ADD_COUNT, REMOVE_COUNT} from './';

const data = (state = {count: 0}, action) => {
    switch (action.type) {
        case ADD_COUNT: {
            return {...state, count: state.count + action.payload}
        }
        case REMOVE_COUNT: {
            return {...state, count: state.count - action.payload}
        }
        default:
            return state
    }
};

export default data;