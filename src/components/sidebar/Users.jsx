import React from 'react';
import style from "./users.module.css";
import User from "./User";
import {useSelector} from "react-redux";
import PropTypes from "prop-types";

function Users(props) {
    const filter = useSelector(state => state.contacts.filter);

    const filtered = props.contacts.filter(item => item.fullname.indexOf(filter) > -1);

    return (
        <div className={style.users}>
                {filtered.map(contact => {
                    return <User key={contact._id} contact={contact}/>
                })}
        </div>
    )
}

Users.propTypes = {
    contacts: PropTypes.array.isRequired
}

export default Users;