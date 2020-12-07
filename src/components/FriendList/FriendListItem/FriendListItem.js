import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

export default function FriendListItem({name, avatar, isOnline}){
    const styleStatus = isOnline == true ? styles.active : styles.noActive
    return (
        <li class={styles.item}>
            <span class={styleStatus}></span>
            <img class={styles.avatar} src={avatar} alt="" width="48" />
            <p class={styles.name}>{name}</p>
        </li>
    )
}

FriendListItem.defaultProps = {
    name:"Name",
    avatar:"https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg",
    isOnline:false
};

FriendListItem.propTypes = {
    name:PropTypes.string.isRequired,
    avatar:PropTypes.string.isRequired,
    isOnline:PropTypes.bool.isRequired
}