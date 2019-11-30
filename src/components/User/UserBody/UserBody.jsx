import React from 'react';
import style from './User.module.css';
import edit from '../../assets/image/edit.png';
import {NavLink} from "react-router-dom";

const User = ({user}) => {
    return (
        <div className={style.container}>
            <div className={style.userHeader}>
                <div className={style.delete}>&times;</div>
                {user.is_active ? <div className={style.active}>User active</div>
                    : <div className={style.inactive}>User inactive</div>}
                <div className={style.row}>
                    <h2 className={style.fullName}>{`${user.first_name} ${user.last_name}`}</h2>
                    <div className={style.edit}>
                        <NavLink to='/edit/3'><img src={edit} alt="edit"/></NavLink>
                    </div>
                </div>
            </div>
            <div className={style.userBody}>
                <div>Date of Birth: {user.birth_date}</div>
                <div>Gender: {user.gender}</div>
                <div>Profession: {user.job}</div>
                <div className={style.biography}>
                    <div>Biography:</div>
                    <p>{user.biography}</p>
                </div>
            </div>

        </div>
    )
};

export default User;