import React from 'react';
import style from './profile.module.css';
import PropTypes from 'prop-types';

function ProfileContact(props) {
  return (
    <div>
      <div className={style.favicon}>{props.contact.fullname.substr(0, 1)}</div>
      <div className={style.user}>{props.contact.fullname}</div>
      <div className={style.link}>@{props.contact.username}</div>
      <div className={style.action}>
        <div className={style.icons}>
          <i className="fas fa-phone"></i>
        </div>
        <div className={style.icons}>
          <i className="fas fa-video"></i>
        </div>
        <div className={style.icons}>
          <i className="fas fa-envelope"></i>
        </div>
      </div>
    </div>
  );
}

ProfileContact.propTypes = {
  username: PropTypes.string,
  fullname: PropTypes.string,
};

export default ProfileContact;
