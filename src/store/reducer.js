import * as actionTypes from './actions';

const initialState = {
    logged: false,
    isModalOpen: false,
    currentShareUrl: '',
    currentShareTitle: ''
}

const reducer = (state = initialState, action) => {

    switch(action.type) {

        case actionTypes.USER_LOGGED: {
            return {
                ...state,
                logged: action.value
            }
        }
        case actionTypes.MODAL_VISIBILITY: {
            return {
                ...state,
                isModalOpen: action.value
            }
        }
        case actionTypes.SHARE_URL: {
            return {
                ...state,
                currentShareUrl: action.value
            }
        }
        case actionTypes.SHARE_TITLE: {
            return {
                ...state,
                currentShareTitle: action.value
            }
        }
        default:
    }

    return state;
}

export default reducer;