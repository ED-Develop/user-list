import React from 'react';
import style from './UserHeader.module.css';
import edit from '../../../assets/image/edit.png';
import {NavLink} from "react-router-dom";

const   UserHeader = ({is_active, first_name, last_name, id, deleteUser}) => {
    const onDelete = () => {
        deleteUser(id);
    };
    return (
        <div className={style.userHeader}>
            <div onClick={onDelete} className={style.delete}>&times;</div>
            {is_active ? <div className={style.active}>User active</div>
                : <div className={style.inactive}>User inactive</div>}
            <div className={style.row}>
                <h2 className={style.fullName}>{`${first_name} ${last_name}`}</h2>
                <div className={style.edit}>
                    <NavLink to={`/edit/${id}`}><img src={edit} alt="edit"/></NavLink>
                </div>
            </div>
        </div>

    )
};

export default UserHeader;