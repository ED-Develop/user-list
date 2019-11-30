const SET_GLOBAL_ERROR = 'app/SET_GLOBAL_ERROR';
const TOGGLE_IS_FETCHING = 'app/TOGGLE_IS_FETCHING';
const TOGGLE_IS_SUCCESS = 'app/TOGGLE_IS_SUCCESS';

const initialState = {
    globalError: null,
    isFetching: false,
    IsSuccess: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GLOBAL_ERROR:
        case TOGGLE_IS_FETCHING:
        case TOGGLE_IS_SUCCESS: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }
};

export const setGlobalError = (error) => {
    return {
        type: SET_GLOBAL_ERROR,
        payload: {
            globalError: error
        }
    }
};

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        payload: {
            isFetching
        }
    }
};
export const toggleIsSuccess = (isSuccess) => {
    return {
        type: TOGGLE_IS_SUCCESS,
        payload: {
            isSuccess
        }
    }
};

export default appReducer;