import React from 'react';
import style from "./users.module.css";
import {useDispatch, useSelector} from "react-redux";
import {searchContact} from "../../redux/actions";

function Input(props) {
    const filter = useSelector(state => state.contacts.filter);
    const dispatch = useDispatch();

    const handleSearchContact = (event) => {
        dispatch(searchContact(event.target.value));
    }

    const handleSearchClear = () => {
        dispatch(searchContact(""));
    }

    return (
        <div className={style.search}>
            <i
                className="fas fa-search"
                onClick={handleSearchClear}
            >
            </i>
            <input
                className={style.input}
                type="text"
                placeholder="Поиск контакта"
                value={filter}
                onChange={handleSearchContact}
            />
        </div>
    );
}

export default Input;