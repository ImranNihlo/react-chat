import React from 'react';
import style from "./messages.module.css"
import Header from "./Header";
import Message from "./Message";
import Input from "./Input";
import {useParams} from "react-router-dom";

function Messages(props) {
    const id = useParams().id;

    if (!id) {
        return <div className={style.row}>
            <div className={style.null}>
                Выберите чат для общения
            </div>
        </div>
    }

    return (
        <div className={style.row}>
            <Header contacts={props.contacts}/>
            <Message messages={props.messages} profile={props.profile} />
            <Input contacts={props.contacts}/>
        </div>
    );
}

export default Messages;