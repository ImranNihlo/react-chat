import React, { useEffect } from 'react';
import style from './messages.module.css';
import { useDispatch } from 'react-redux';
import { deleteMessage } from '../../redux/actions';
import PropTypes from 'prop-types';

function IncomingMessages(props) {
  const dispatch = useDispatch();

  const handleDeleteMessage = (id) => {
    dispatch(deleteMessage(id));
  };

  function scrollDown() {
    document.getElementById('scroll').scrollTop =
      document.getElementById('scroll').scrollHeight;
  }

  useEffect(() => scrollDown());

  return (
    <div className={style.incoming}>
      <div className={style['message-flex']}>
        <div>{props.message.content}</div>
        <div className={style['message-delete']}>
          <i
            className="fas fa-trash-alt"
            onClick={() => handleDeleteMessage(props.message._id)}
          ></i>
        </div>
      </div>
      <div className={style.date}>
        {props.message.time.substr(11, 5)}
        {props.message.read ? (
          <i className="fas fa-check-square"></i>
        ) : (
          <i className="fas fa-check"></i>
        )}
      </div>
    </div>
  );
}

IncomingMessages.propTypes = {
  content: PropTypes.string,
  _id: PropTypes.string,
  time: PropTypes.string,
  read: PropTypes.bool,
};

export default IncomingMessages;
