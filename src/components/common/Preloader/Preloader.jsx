import React from 'react';
import PreloaderSvg from '../../../assets/image/Preloader.svg';
import style from './Preloader.module.css';

const Preloader = () => {
    return(
        <div className={style.preloader}>
            <img  src={PreloaderSvg}/>
        </div>
    )
};

export default Preloader;