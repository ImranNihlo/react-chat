import React from 'react';
import style from "./users.module.css";
import {Link, useParams} from "react-router-dom";

function User(props) {
    const id = useParams().id;

    return (
        <Link to={`/${props.contact._id}`}>
            <div className={id === props.contact._id ? style.active : style.user}>
                <div className={style.favicon}>
                    {props.contact.fullname.substr(0, 1)}
                </div>
                <div className={style.info}>
                    <div className={style.name}>
                        {props.contact.fullname}
                    </div>
                    <div className={style.message}>
                        {props.contact.lastMessage.content}...
                    </div>
                </div>
                <div className={style.date}>
                    {props.contact.lastMessage.time.substr(11, 5)}
                </div>
                <div className={props.contact.online ? style.online : style.none}>

                </div>
            </div>
        </Link>
    );
}

export default User;

