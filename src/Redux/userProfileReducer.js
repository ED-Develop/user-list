import {userProfileAPI} from "../api/api";
import {setGlobalError, toggleIsFetching, toggleIsSuccess} from "./appReducer";

const SET_USER_PROFILE = 'userProfile/SET_USER_PROFILE';

const initialState = {
    user: {}
};

const userProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }
};

export const setUserProfile = (user) => {
    return {
        type: SET_USER_PROFILE,
        payload: {
            user
        }
    }
};

export const getUserProfile = (userId) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    try {
        let data = await userProfileAPI.getUser(userId);
        dispatch(setUserProfile(data));
        dispatch(toggleIsFetching(false));
    } catch (error) {
        dispatch(setGlobalError(error.response.statusText));
        dispatch(toggleIsFetching(false));
    }
};

export const editUserProfile = (userData, userId) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    try {
        await userProfileAPI.editUserData(userData, userId);
        dispatch(toggleIsSuccess(true));
    } catch (error) {
        dispatch(setGlobalError(error.response.statusText));
        dispatch(toggleIsFetching(false));
    }
};

export default userProfileReducer;