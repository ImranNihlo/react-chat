import React from 'react';
import style from "./profile.module.css";
import Profile from "./Profile";
import Social from "./Social";
import Media from "./Media";

function Profiles(props) {

    return (
        <div className={style.active}>
            <Profile contacts={props.contacts}/>
            <Social contacts={props.contacts}/>
            <Media />
        </div>
    );
}

export default Profiles;