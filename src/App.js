import React from 'react';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';

import user from './json/user.json';
import friends from './json/friends.json';
import statisticalData from './json/statistical-data.json';
import transactions from './json/transactions.json';

import './base.css'


export default function App(){
    return(
        <div>
            <h2>Task 1</h2>
            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <br/>
            <h2>Task 2</h2>
            <FriendList friends={friends} />

            <br/>
            <h2>Task 3</h2>
            <Statistics title="Upload stats" stats={statisticalData} />

            <br/>
            <h2>Task 4</h2>
            <TransactionHistory items={transactions} />
        </div>
    );
}