import React from 'react';
import style from "./users.module.css"
import Input from "./Input";
import User from "./User";

function Users(props) {
    return (
        <div className={style.row}>
            <Input />
            <User />
        </div>
    );
}

export default Users;