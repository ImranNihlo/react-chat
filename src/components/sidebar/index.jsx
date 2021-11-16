import React from 'react';
import style from "./users.module.css"
import Input from "./Input";
import Users from "./Users";
import PropTypes from "prop-types";

function Sidebar(props) {
    return (
        <div className={style.row}>
            <Input contacts={props.contacts}/>
            <Users contacts={props.contacts}/>
        </div>
    );
}

Sidebar.propTypes = {
    contacts: PropTypes.array.isRequired
}

export default Sidebar;