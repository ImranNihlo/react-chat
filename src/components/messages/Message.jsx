import React, {useEffect} from 'react';
import style from "./messages.module.css";
import {useDispatch} from "react-redux";
import {deleteMessage} from "../../redux/actions";
import {useParams} from "react-router-dom";

function Message(props) {
    const dispatch = useDispatch();
    const id = useParams().id;

    const handleDeleteMessage = () => {
        dispatch(deleteMessage(id))
    }

    function scrollDown() {
        document.getElementById('scroll').scrollTop =  document.getElementById('scroll').scrollHeight
    }

    useEffect(() => scrollDown());

    return (
        <div id="scroll" className={style.message}>
            {props.messages.map(item => {
                return item.toUserId !== props.profile._id ? (
                    <div key={item._id} className={props.change ? style['incoming-max'] : style.incoming}>
                        <div className={style['message-flex']}>
                            <div>
                                {item.content}
                            </div>
                            <div className={style["message-delete"]}>
                                <i
                                    className="fas fa-trash-alt"
                                    onClick={handleDeleteMessage}
                                >
                                </i>
                            </div>
                        </div>
                        <div className={style.date}>
                            {item.time.substr(11,5)}
                            {item.read ? <i className="fas fa-check-square"></i> : <i className="fas fa-check"></i> }
                        </div>
                    </div>
                ) : (
                    <div key={item._id} className={style.outgoing}>
                        <div className={style.favicon}>
                            К
                        </div>
                        <div className={style.text}>
                            {item.content}
                            <div className={style.date}>
                                {item.time.substr(11,5)} <i className="fas fa-check"></i>
                            </div>
                        </div>
                    </div>
                )
            })}
            <div id="down"/>
        </div>
    );
}

export default Message;