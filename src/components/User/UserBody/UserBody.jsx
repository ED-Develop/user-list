import React from 'react';
import style from './UserBody.module.css';

const UserBody = ({birth_date, gender, job, biography}) => {
    return (
        <div className={style.userBody}>
            <div>Date of Birth: {birth_date}</div>
            <div>Gender: {gender}</div>
            <div>Profession: {job}</div>
            <div className={style.biography}>
                <div>Biography:</div>
                <p>{biography}</p>
            </div>
        </div>
    )
};

export default UserBody;