import React from 'react';
import style from './messages.module.css';
import Header from './Header';
import Message from './Message';
import Input from './Input';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function Messages(props) {
  const id = useParams().id;

  if (!id) {
    return (
      <div className={style.row}>
        <div className={style.null}>Выберите чат для общения</div>
      </div>
    );
  }

  return (
    <div className={style.row}>
      <Header contacts={props.contacts} />
      <Message messages={props.messages} profileId={props.profileId} />
      <Input contacts={props.contacts} />
    </div>
  );
}

Messages.propTypes = {
  contacts: PropTypes.array.isRequired,
  messages: PropTypes.array.isRequired,
  profileId: PropTypes.string,
};

export default Messages;
