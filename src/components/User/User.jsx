import React from 'react';
import style from './User.module.css';
import UserHeader from "./UserHeader/UserHeader";
import UserBody from "./UserBody/UserBody";
import Preloader from "../common/Preloader/Preloader";

const User = ({user, isFetching, deleteUser}) => {
    return (
        <div className={style.container}>
            {isFetching ? <Preloader/>
                : <div>
                    <UserHeader id={user.id} first_name={user.first_name} is_active={user.is_active}
                                last_name={user.last_name} deleteUser={deleteUser}/>
                    <UserBody birth_date={user.birth_date} biography={user.biography} gender={user.gender}
                              job={user.job}/>
                </div>}

        </div>
    )
};

export default User;