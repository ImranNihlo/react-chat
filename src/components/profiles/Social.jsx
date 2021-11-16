import React from 'react';
import style from './profile.module.css';
import PropTypes from 'prop-types';

function Social(props) {
  return (
    <div className={style.social}>
      {props.contact.socials === undefined ? (
        ''
      ) : (
        <div className={style.item}>
          <div className={style.icons}>
            <i className="fab fa-instagram"></i>
          </div>
          <div className={style.bold}>{props.contact.socials.instagram}</div>
        </div>
      )}
      {props.contact.socials === undefined ? (
        ''
      ) : (
        <div className={style.item}>
          <div className={style.icons}>
            <i className="fab fa-twitter"></i>
          </div>
          <div className={style.bold}>{props.contact.socials.facebook}</div>
        </div>
      )}
      {props.contact.socials === undefined ? (
        ''
      ) : (
        <div className={style.item}>
          <div className={style.icons}>
            <i className="fab fa-facebook-f"></i>
          </div>
          <div className={style.bold}>{props.contact.socials.twitter}</div>
        </div>
      )}
    </div>
  );
}

Social.propTypes = {
  socials: PropTypes.array,
};

export default Social;
