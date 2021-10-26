import React from 'react';
import style from "./messages.module.css";

function Message(props) {
    return (
        <div className={style.message}>
            <div className={style.incoming}>
                Hello!
            </div>
            <div className={style.incoming}>
                Lorem ipsum
            </div>
            <div className={style.vizov}>
                Пропущенный вызов
            </div>
            <div className={style.outgoing}>
                <div className={style.favicon}>
                    К
                </div>
                <div className={style.text}>
                    Ipsum dolor, lorem
                </div>
            </div>
            <div className={style.incoming}>
                dus amet!
            </div>
            <div className={style.lorem}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
            </div>
            <div className={style.lorem}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
            </div>
            <div className={style.lorem}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
            </div>
            <div className={style.lorem}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
            </div>
        </div>
    );
}

export default Message;