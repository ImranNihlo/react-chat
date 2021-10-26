import React from 'react';
import style from "./messages.module.css"
import Header from "./Header";
import Message from "./Message";

function Messages(props) {
    return (
        <div className={style.row}>
            <Header />
            <Message />
        </div>
    );
}

export default Messages;