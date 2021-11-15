import React from 'react';
import style from "./messages.module.css";
import {useSelector} from "react-redux";
import IncomingMessages from "./IncomingMessages";
import OutgoingMessages from "./OutgoingMessages";

function Message(props) {
    const loading = useSelector(state => state.messages.loading);

    const filter = useSelector(state => state.messages.filter);

    const filtered = props.messages.filter(item => item.content.indexOf(filter) > -1);

    if (loading) {
        return (
            <div className={style.message}>
                <div className={style.load}>
                    Загрузка сообщений...
                </div>
            </div>
        )
    }

    return (
        <div id="scroll" className={style.message}>
                {filtered.map(message => {
                    return message.toUserId !== props.profile._id ? (
                        <IncomingMessages key={message._id} message={message}/>
                    ) : (
                        <OutgoingMessages key={message._id} message={message}/>
                    )
                })}
        </div>
    );
}

export default Message;