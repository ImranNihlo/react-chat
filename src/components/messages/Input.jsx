import React, { useState } from 'react';
import style from './messages.module.css';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../redux/actions';
import { useParams } from 'react-router-dom';

function Input(props) {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const date = new Date().toISOString();
  const id = useParams().id;

  const handleAddClick = () => {
    dispatch(addMessage(text, date, id));
    setText('');
  };

  return (
    <div className={style.enter}>
      <input
        className={style.input}
        type="text"
        placeholder="Введите сообщение"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className={style.icons}>
        <div className={style['icons-clip']}>
          <i className="fas fa-paperclip"></i>
        </div>
        <div className={style.changing} onClick={handleAddClick}>
          {text.length > 0 ? (
            <i className="fas fa-paper-plane"></i>
          ) : (
            <i className="fas fa-microphone"></i>
          )}
        </div>
      </div>
    </div>
  );
}

export default Input;
