import * as actionTypes from './actions';

const initialState = {
    logged: false
}

const reducer = (state = initialState, action) => {

    switch(action.type) {

        case actionTypes.USER_LOGGED: {
            return {
                ...state,
                logged: action.value
            }
        }
        default:
    }

    return state;
}

export default reducer;