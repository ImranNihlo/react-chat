import React, { useEffect } from 'react';
import Messages from './messages';
import Profiles from './profiles';
import { useDispatch, useSelector } from 'react-redux';
import { contactLoad, messagesLoad, profileLoad } from '../redux/actions';
import { useParams } from 'react-router-dom';
import Sidebar from './sidebar';
import { CSSTransition } from 'react-transition-group';

function Chat(props) {
  const dispatch = useDispatch();
  const id = useParams().id;

  useEffect(() => {
    dispatch(contactLoad());
    dispatch(profileLoad());
    dispatch(messagesLoad(id));
  }, [dispatch, id]);

  const contacts = useSelector((state) => state.contacts.items);
  const messages = useSelector((state) => state.messages.items);
  const profileId = useSelector((state) => state.profile.profile._id);
  const change = useSelector((state) => state.contacts.change);

  return (
    <div className="main">
      <Sidebar contacts={contacts} />
      <Messages contacts={contacts} messages={messages} profileId={profileId} />
      <CSSTransition
        in={change}
        unmountOnExit
        timeout={1000}
        classNames="profile"
      >
        <Profiles contacts={contacts} change={change} />
      </CSSTransition>
    </div>
  );
}

export default Chat;
