import React from 'react';
import style from "./profile.module.css";
import Profile from "./Profile";
import Social from "./Social";
import Media from "./Media";
import {useSelector} from "react-redux";

function Profiles(props) {
    const change = useSelector(state => state.contacts.change);

    if (change) {
        return null
    }

    return (
        <div id="active" className={style.active}>
            <Profile contacts={props.contacts}/>
            <Social contacts={props.contacts}/>
            <Media />
        </div>
    );
}

export default Profiles;