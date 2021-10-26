import React from 'react';
import style from "./profile.module.css";

function Social(props) {
    return (
        <div className={style.container}>
            <p className={style.bold}>Social</p>
            <div className={style.social}>
                <div className={style.item}>
                    <div className={style.icons}>
                        <i className="fab fa-instagram"></i>
                    </div>
                    <div className={style.bold}>kuduzow</div>
                </div>
                <div className={style.item}>
                    <div className={style.icons}>
                        <i className="fab fa-twitter"></i>
                    </div>
                    <div className={style.bold}>kuduzow</div>
                </div>
                <div className={style.item}>
                    <div className={style.icons}>
                        <i className="fab fa-facebook-f"></i>
                    </div>
                    <div className={style.bold}>kuduzow</div>
                </div>
            </div>
        </div>
    );
}

export default Social;