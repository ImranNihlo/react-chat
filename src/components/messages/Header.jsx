import React from 'react';
import style from "./messages.module.css";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {changeProfile, searchMessages} from "../../redux/actions";
import PropTypes from "prop-types";

function Header(props) {
    const id = useParams().id;
    const dispatch = useDispatch();
    const handleChangeProfile = () => {
        dispatch(changeProfile())
    }

    const filter = useSelector(state => state.messages.filter);
    const handleSearchMessages = (event) => {
        dispatch(searchMessages(event.target.value));
    }

    const handleSearchClear = () => {
        dispatch(searchMessages(""))
    };

    return (
        <header>
            <div className={style.icons}>
                <i
                    className="fas fa-search"
                    onClick={handleSearchClear}
                >

                </i>
                <input
                    type="text"
                    placeholder="Поиск сообщений"
                    value={filter}
                    onChange={handleSearchMessages}
                />
            </div>
            {props.contacts.map(contact => {
                if (id === contact._id) {
                    return <div key={contact._id} className={style.user}>
                        <div>
                            {contact.fullname}
                        </div>
                        <div className={contact.online ? style.online : style.none}>

                        </div>
                    </div>
                } else {
                    return false
                }
            })}
            <div className={style.icons}>
                <i
                    className="fas fa-cog"
                    onClick={handleChangeProfile}
                >

                </i>
            </div>
        </header>
    );
}

Header.propTypes = {
    contacts: PropTypes.array.isRequired
}

export default Header;