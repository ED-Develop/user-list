import React from 'react';
import UserList from "./UserList";
import {connect} from "react-redux";
import {deleteUser, getUsers} from "../../Redux/userListReducer";
import Preloader from "../common/Preloader/Preloader";
import {toggleIsSuccess} from "../../Redux/appReducer";

class UserListContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers();
        this.props.toggleIsSuccess(false);
    }
    render() {
        return (
            <div>
                {this.props.isFetching && <Preloader/>}
                <UserList {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.userList.users,
        isFetching: state.app.isFetching
    }
};

export default connect(mapStateToProps, {getUsers, deleteUser, toggleIsSuccess})(UserListContainer);