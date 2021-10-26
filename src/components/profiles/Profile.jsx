import React from 'react';
import style from "./profile.module.css";
import search from "../search.png";

function Profile(props) {
    return (
        <div className={style.profile}>
            <div className={style.favicon}>
                К
            </div>
            <div className={style.user}>
                Кудузов Ахмад
            </div>
            <div className={style.link}>
                @kuduzow
            </div>
            <div className={style.action}>
                <div>
                    <i className="fas fa-phone"></i>
                </div>
                <div>
                    <i className="fas fa-video"></i>
                </div>
                <div>
                    <i className="fas fa-envelope"></i>
                </div>
            </div>
        </div>
    );
}

export default Profile;