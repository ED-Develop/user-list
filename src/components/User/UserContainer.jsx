import React from 'react';
import style from './User.module.css';
import edit from '../../assets/image/edit.png';
import {NavLink} from "react-router-dom";

const User = ({first_name, last_name, birth_date, gender, job, biography, is_active}) => {
    return (
        <div className={style.container}>
            <div className={style.userHeader}>
                <div className={style.delete}>&times;</div>
                <div className={style.active}>User active</div>
                <div className={style.row}>
                    <h2 className={style.fullName}>Eduard Shvetsov</h2>
                    <div className={style.edit}>
                        <NavLink to='/edit/3'><img src={edit} alt="edit"/></NavLink>
                    </div>
                </div>
            </div>
            <div className={style.userBody}>
                <div>Date of Birth: 1999.07.26</div>
                <div>Gender: male</div>
                <div>Profession: front-end developer</div>
                <div className={style.biography}>
                    <div>Biography:</div>
                    <p>lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum lorem
                        upsum lorem upsum </p>
                </div>
            </div>

        </div>
    )
};

export default User;