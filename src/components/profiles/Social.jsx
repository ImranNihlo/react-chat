import React from 'react';
import style from "./profile.module.css";
import {useParams} from "react-router-dom";

function Social(props) {
    const id = useParams().id;

    return (
        <div className={style.container}>
            <p className={style.bold}>Social</p>
            {props.contacts.map(contact => {
                if (id === contact._id) {
                    return <div key={contact._id} className={style.social}>
                        {contact.socials === undefined ? '' : (
                            <div className={style.item}>
                                <div className={style.icons}>
                                    <i className="fab fa-instagram"></i>
                                </div>
                                <div className={style.bold}>
                                    {contact.socials.instagram}
                                </div>
                            </div>
                        )}
                        {contact.socials === undefined ? '' : (
                            <div className={style.item}>
                                <div className={style.icons}>
                                    <i className="fab fa-twitter"></i>
                                </div>
                                <div className={style.bold}>
                                    {contact.socials.facebook}
                                </div>
                            </div>
                        )}
                        {contact.socials === undefined ? '' : (
                            <div className={style.item}>
                                <div className={style.icons}>
                                    <i className="fab fa-facebook-f"></i>
                                </div>
                                <div className={style.bold}>
                                    {contact.socials.twitter}
                                </div>
                            </div>
                        )}
                    </div>
                } else {
                    return false
                };
            })}
        </div>
    );
}

export default Social;

