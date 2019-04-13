import CLICK_UPDATE_PATH from '../actions/actionTypes';

const initialState = {
    path: ''
};

const pathReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK_UPDATE_PATH:
        return {
            ...state,
            path: action.path
        };
        default:
        return state;
    }
};

export default pathReducer;