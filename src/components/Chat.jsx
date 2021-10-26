import React from 'react';
import Users from "./users";
import Messages from "./messages";
import Profiles from "./profiles";
import style from "./chat.module.css";

function Chat(props) {
    return (
        <div className={style.main}>
            <Users />
            <Messages />
            <Profiles />
        </div>
    );
}

export default Chat;