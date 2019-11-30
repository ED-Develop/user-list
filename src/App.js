import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import UserListContainer from "./components/UserList/UserListContainer";
import {connect, Provider} from "react-redux";
import store from "./Redux/store";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import UserContainer from "./components/User/UserContainer";
import ModalWindow from "./components/common/ModalWindow/ModalWindow";
import {setGlobalError, toggleIsFetching} from "./Redux/appReducer";
import EditUser from "./components/EditUser/EditUser";

class App extends Component {
    hideModalWindow = () => {
        this.props.setGlobalError(null);
    };

    render() {
        const Modal = (<ModalWindow modalTitle='Global Error'
                                    hideModalWindow={this.hideModalWindow}>
            <p>Oops! Error: {this.props.globalError}.</p>
        </ModalWindow>);
        return (
            <div className='appContainer'>
                {this.props.globalError && Modal}
                <Header/>
                <Switch>
                    <Route exact path='/' component={UserListContainer}/>
                    <Route path='/user/:id?' component={UserContainer}/>
                    <Route path='/edit/:id?' component={EditUser}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        globalError: state.app.globalError
    }
};

const AppContainer = connect(mapStateToProps, {setGlobalError, toggleIsFetching})(App);

const UserListApp = () => {
    return (
        <div>
            <BrowserRouter>
                <Provider store={store}>
                    <AppContainer/>
                </Provider>
            </BrowserRouter>
        </div>
    )
};

export default UserListApp;
