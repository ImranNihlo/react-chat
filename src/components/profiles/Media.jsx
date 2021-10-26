import React from 'react';
import style from "./profile.module.css";

function Media(props) {
    return (
        <div className={style.container}>
            <p className={style.bold}>Media</p>
            <div className={style.media}>
                <div className={style.item}> </div>
                <div className={style.bold}>desktop-chat.pdf</div>
            </div>
        </div>
    );
}

export default Media;