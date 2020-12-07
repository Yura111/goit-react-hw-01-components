import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';

export default function FriendList({friends}){
    return (
        <ul class={styles.friend_list}>
        {/* <!-- Произвольное кол-во FriendListItem, в зависимости от кол-ва объектов в массиве --> */}
        {friends.map(friend => (
            <FriendListItem key={friend.id} name={friend.name} avatar={friend.avatar} isOnline={friend.isOnline} />
        ))}
        </ul>
    )
}

FriendList.defaultProps = {
    friends:[]
};

FriendList.propTypes = {
    friends:PropTypes.array.isRequired
}