import React from 'react';
import style from "./users.module.css";

function Input(props) {
    return (
        <div className={style.search}>
            <i className="fas fa-search"></i>
            <input className={style.inp} type="text" placeholder="Search contact"/>
        </div>
    );
}

export default Input;