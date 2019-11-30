import React from 'react';
import style from './UserList.module.css';
import UserListItem from "./UserListItem/UserlistItem";
import {NavLink} from "react-router-dom";

const UserList = ({users, deleteUser}) => {

    return (
        <div className={style.container}>
            <div className={style.add}>
                <NavLink to='/edit'><span>+</span> Add user</NavLink>
            </div>
            <div className={style.wrapper}>
                {users.map( u => {
                    return <UserListItem key={u.id} id={u.id} first_name={u.first_name} last_name={u.last_name}
                                         birth_date={u.birth_date} gender={u.gender} deleteUser={deleteUser}/>
                    }
                )}
            </div>
        </div>
    )
};

export default UserList;