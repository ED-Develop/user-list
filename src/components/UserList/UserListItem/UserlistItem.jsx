import React from 'react';
import style from './UserListItem.module.css';
import {NavLink} from "react-router-dom";

const UserListItem = ({first_name, last_name, birth_date, gender, id, deleteUser}) => {
    const onDeleteUser = () => {
        deleteUser(id);
    };
    return (
        <div className={style.container}>
            <div className={style.row}>
                <h2><NavLink to={`/user/${id}`}>{`${first_name} ${last_name}`}</NavLink></h2>
                <div onClick={onDeleteUser} className={style.delete}>&times;</div>
            </div>
            <div className={style.birthday}>Date of Birth: {birth_date}</div>
            <div className={style.gender}>Gender: {gender}</div>
        </div>
    )
};

export default UserListItem;