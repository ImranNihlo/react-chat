import React from 'react';
import style from "./users.module.css";
import User from "./User";

function Users(props) {
    return (
        <div className={style.users}>
                {props.contacts.map(contact => {
                    return <User key={contact._id} contact={contact}/>
                })}
        </div>
    )
}

export default Users;