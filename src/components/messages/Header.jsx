import React from 'react';
import style from "./messages.module.css";

function Header(props) {
    return (
        <header>
            <div className={style.icons}>
                <i className="fas fa-search"></i>
            </div>
            <div className={style.user}>
                <div>
                    Кудузов Ахмад
                </div>
                <div className={style.online}>

                </div>
            </div>
            <div className={style.icons}>
                <i className="fas fa-cog"></i>
            </div>
        </header>
    );
}

export default Header;