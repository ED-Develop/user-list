import React from 'react';
import User from "./User";
import {compose} from "redux";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {getUserProfile} from "../../Redux/userProfileReducer";
import {toggleIsSuccess} from "../../Redux/appReducer";
import {deleteUser} from "../../Redux/userListReducer";

class UserContainer extends React.Component {
    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.id);
        this.props.toggleIsSuccess(false);
    }

    render() {
        if (this.props.isSuccess) {
            return <Redirect to='/'/>
        }
        return (
            <div>
                <User deleteUser={this.props.deleteUser} isFetching={this.props.isFetching} user={this.props.user}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.userProfile.user,
        isFetching: state.app.isFetching,
        isSuccess: state.app.isSuccess
    }
};

export default compose(connect(mapStateToProps, {getUserProfile, toggleIsSuccess, deleteUser}), withRouter)(UserContainer)