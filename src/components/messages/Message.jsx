import React, {useEffect} from 'react';
import style from "./messages.module.css";
import {useDispatch, useSelector} from "react-redux";
import {deleteMessage} from "../../redux/actions";

function Message(props) {
    const dispatch = useDispatch();

    const handleDeleteMessage = (id) => {
        dispatch(deleteMessage(id))
    }

    function scrollDown() {
        document.getElementById('scroll').scrollTop =  document.getElementById('scroll').scrollHeight
    }

    useEffect(() => scrollDown());

    const filter = useSelector(state => state.messages.filter);

    const filtered = props.messages.filter(item => item.content.indexOf(filter) > -1);

    return (
        <div id="scroll" className={style.message}>
                {filtered.map(item => {
                    return item.toUserId !== props.profile._id ? (
                        <div key={item._id} className={props.change ? style['incoming-max'] : style.incoming}>
                            <div className={style['message-flex']}>
                                <div>
                                    {item.content}
                                </div>
                                <div className={style["message-delete"]}>
                                    <i
                                        className="fas fa-trash-alt"
                                        onClick={() => handleDeleteMessage(item._id)}
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
        </div>
    );
}

export default Message;