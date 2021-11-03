import React from 'react';
import style from "./profile.module.css";
import {useParams} from "react-router-dom";

function Profile(props) {
    const id = useParams().id;

    return (
        <div className={style.profile}>
            {props.contacts.map(contact => {
                if (id === contact._id) {
                    return <div key={contact._id}>
                        <div className={style.favicon}>
                            {contact.fullname.substr(0,1)}
                        </div>
                        <div className={style.user}>
                            {contact.fullname}
                        </div>
                        <div className={style.link}>
                            @{contact.username}
                        </div>
                        <div className={style.action}>
                            <div className={style.icons}>
                                <i className="fas fa-phone"></i>
                            </div>
                            <div className={style.icons}>
                                <i className="fas fa-video"></i>
                            </div>
                            <div className={style.icons}>
                                <i className="fas fa-envelope"></i>
                            </div>
                        </div>
                    </div>
                } else {
                    return false
                }
            })}
        </div>
    );
}

export default Profile;