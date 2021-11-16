import React from 'react';
import style from "./profile.module.css";
import {useParams} from "react-router-dom";
import Social from "./Social";
import PropTypes from "prop-types";

function Socials(props) {
    const id = useParams().id;

    return (
        <div className={style.container}>
            <p className={style.bold}>Social</p>
            {props.contacts.map(contact => {
                if (id === contact._id) {
                    return <Social key={contact._id} contact={contact}/>
                } else {
                    return false
                };
            })}
        </div>
    );
}

Socials.propTypes = {
    contacts: PropTypes.array.isRequired
}

export default Socials;

