import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

export default function TransactionHistory({items}){
    return (
        <table class={styles.transaction_history}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {
                    items.map(item => (
                        <tr key={item.id}>
                            <td>{item.type}</td>
                            <td>{item.amount}</td>
                            <td>{item.currency}</td>
                        </tr>
                    ))
                }

            </tbody>
        </table>
    );
}

TransactionHistory.defaultProps = {
    items:[]
}

TransactionHistory.propTypes = {
    items:PropTypes.array.isRequired
}