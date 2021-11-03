import React, {useEffect} from 'react';
import Messages from "./messages";
import Profiles from "./profiles";
import style from "./chat.module.css";
import {useDispatch, useSelector} from "react-redux";
import {contactLoad, messagesLoad, profileLoad} from "../redux/actions";
import {useParams} from "react-router-dom";
import Sidebar from "./sidebar";

function Chat(props) {
    const dispatch = useDispatch();
    const id = useParams().id;

    useEffect(() => {
        dispatch(contactLoad())
        dispatch(profileLoad())
        dispatch(messagesLoad(id))
    }, [id]);

    const contacts = useSelector(state => state.contacts.items);
    const messages = useSelector(state => state.messages.items);
    const profile = useSelector(state => state.profile.profile);

    return (
        <div className={style.main}>
            <Sidebar contacts={contacts}/>
            <Messages contacts={contacts} messages={messages} profile={profile}/>
            <Profiles contacts={contacts}/>
        </div>
    );
}

export default Chat;