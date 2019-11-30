import React from 'react';
import style from './UserList.module.css';
import UserListItem from "./UserListItem/UserlistItem";

const UserList = () => {
    return (
        <div className={style.wrapper}>
            <UserListItem/>
        </div>
    )
};

export default UserList;