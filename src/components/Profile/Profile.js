import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

export default function Profile({name, tag, location, avatar, stats}){
    return (
        <div class={styles.profile}>
            <div class={styles.description}>
                <img
                src={avatar}
                alt="Аватар пользователя"
                class={styles.avatar}
                />
                <p class={styles.name}>{name}</p>
                <p class={styles.tag}>{tag}</p>
                <p class={styles.location}>{location}</p>
            </div>

            <ul class={styles.stats}>
                <li>
                    <span class={styles.label}>Followers</span>
                    <span class={styles.quantity}>{stats.followers}</span>
                </li>
                <li>
                    <span class={styles.label}>Views</span>
                    <span class={styles.quantity}>{stats.views}</span>
                </li>
                <li>
                    <span class={styles.label}>Likes</span>
                    <span class={styles.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}

Profile.defaultProps = {
    name:"Petra Marica",
    tag:"@pmarica",
    location:"Salvador, Brasil",
    avatar:"https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg",
    stats:{
        "followers": 0,
        "views": 0,
        "likes": 0
      }
};
  
Profile.propTypes = {
    name:PropTypes.string.isRequired,
    tag:PropTypes.string.isRequired,
    location:PropTypes.string.isRequired,
    avatar:PropTypes.string.isRequired,
    status:PropTypes.object.isRequired,
}