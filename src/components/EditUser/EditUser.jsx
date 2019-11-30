import React from 'react';
import style from './EditUser.module.css'
import EditUserForm from "./EditUserForm/EditUserForm";
import {compose} from "redux";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {addNewUser} from "../../Redux/userListReducer";
import {editUserProfile, getUserProfile} from "../../Redux/userProfileReducer";
import Preloader from "../common/Preloader/Preloader";

class EditUser extends React.Component {
    componentDidMount() {
        if (this.props.match.params.id && !this.props.userData.id) {
            this.props.getUserProfile(this.props.match.params.id);
        }
    }

    onSubmit = (formData) => {
        if (this.props.match.params.id) {
            this.props.editUserProfile(formData, this.props.match.params.id);
        } else {
            let formatUserData = this.formatDate(formData);
            this.props.addNewUser(formatUserData);
        }
    };
    formatDate = (formData) => {
        let date = formData.birth_date;
        return {
            ...formData,
            birth_date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        }
    };

    render() {
        if (this.props.isSuccess && !this.props.match.params.id) {
            return <Redirect to='/'/>
        }
        if (this.props.isSuccess) {
            return <Redirect to={`/user/${this.props.match.params.id}`}/>
        }
        return (
            <div className={style.container}>
                {this.props.isFetching && <Preloader/>}
                {this.props.match.params.id ? <h1>Edit user</h1> : <h1>Add new user</h1>}
                {this.props.match.params.id && this.props.userData.id || !this.props.match.params.id
                    ? <EditUserForm initialValues={this.props.match.params.id ? this.props.userData : null}
                                    id={this.props.match.params.id} onSubmit={this.onSubmit}/>
                    : false}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.userProfile.user,
        addUserIsSuccess: state.userList.addUserIsSuccess,
        isSuccess: state.app.isSuccess,
        isFetching: state.app.isFetching
    }
};

export default compose(connect(mapStateToProps, {addNewUser, editUserProfile, getUserProfile}), withRouter)(EditUser);