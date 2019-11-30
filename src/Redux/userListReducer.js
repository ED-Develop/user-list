import {userListAPI} from "../api/api";
import {setGlobalError, toggleIsFetching, toggleIsSuccess} from "./appReducer";

const SET_USERS = 'userList/SET_USERS';
const DELETE_USER_SUCCESS = 'userList/DELETE_USER_SUCCESS';

const initialState = {
    users: [],
};

let userListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case DELETE_USER_SUCCESS: {
            return {
                ...state,
                users: state.users.filter(u => u.id !== action.userId)
            }
        }
        default:
            return state;
    }
};

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
};
export const deleteUserSuccess = (userId) => {
    return {
        type: DELETE_USER_SUCCESS,
        userId
    }
};


export const getUsers = () => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    try {
        let data = await userListAPI.getUsers();
        dispatch(setUsers(data));
        dispatch(toggleIsFetching(false));
    } catch (error) {
        dispatch(setGlobalError(error.response.statusText));
        dispatch(toggleIsFetching(false));
    }

};

export const deleteUser = (userId) => async (dispatch) => {
    try {
        await userListAPI.deleteUser(userId);
        dispatch(deleteUserSuccess(userId));
        dispatch(toggleIsSuccess(true));
    } catch (error) {
        dispatch(setGlobalError(error.response.statusText));
    }
};

export const addNewUser = (userData) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    try {
        await userListAPI.addUser(userData);
        dispatch(toggleIsSuccess(true));
    } catch (error) {
        dispatch(setGlobalError(error.response.statusText));
        dispatch(toggleIsFetching(false));
    }
};

export default userListReducer;