import React from 'react';
import style from './messages.module.css';
import PropTypes from 'prop-types';

function OutgoingMessages(props) {
  return (
    <div className={style.outgoing}>
      <div className={style.favicon}>К</div>
      <div className={style.text}>
        {props.message.content}
        <div className={style.date}>
          {props.message.time.substr(11, 5)} <i className="fas fa-check"></i>
        </div>
      </div>
    </div>
  );
}

OutgoingMessages.propTypes = {
  messages: PropTypes.string,
  time: PropTypes.string,
};

export default OutgoingMessages;
