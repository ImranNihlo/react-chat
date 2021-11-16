import React from 'react';
import style from './profile.module.css';
import { useParams } from 'react-router-dom';
import ProfileContact from './ProfileContact';
import PropTypes from 'prop-types';

function Profile(props) {
  const id = useParams().id;

  return (
    <div className={style.profile}>
      {props.contacts.map((contact) => {
        if (id === contact._id) {
          return <ProfileContact key={contact._id} contact={contact} />;
        } else {
          return false;
        }
      })}
    </div>
  );
}

Profile.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default Profile;
