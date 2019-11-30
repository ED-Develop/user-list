import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import userListReducer from "./userListReducer";
import thunkMiddleware from 'redux-thunk';
import userProfileReducer from "./userProfileReducer";
import appReducer from "./appReducer";
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
    userList: userListReducer,
    userProfile: userProfileReducer,
    app: appReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store;