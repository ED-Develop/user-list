import React from 'react';
import style from './UserList.module.css';
import UserListItem from "./UserListItem/UserlistItem";

const UserList = () => {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <UserListItem/>
                <UserListItem/>
                <UserListItem/>
                <UserListItem/>
                <UserListItem/>
                <UserListItem/>
            </div>
        </div>
    )
};

export default UserList;