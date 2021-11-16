import React from 'react';
import style from './profile.module.css';
import Profile from './Profile';
import Socials from './Socials';
import Media from './Media';
import PropTypes from 'prop-types';

function Profiles(props) {
  return (
    <div className={style.active}>
      <Profile contacts={props.contacts} />
      <Socials contacts={props.contacts} />
      <Media />
    </div>
  );
}

Profiles.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default Profiles;
