import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={style.header}>
            <div className={style.wrapper}>
                <div className={style.logo}>
                    <NavLink to='/'>User-List</NavLink>
                </div>
            </div>
        </header>
    )
};

export default Header;