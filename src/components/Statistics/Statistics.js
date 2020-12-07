import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export default function Statistics({title, stats}){
    const itemBackgroundColor = ['#50c4f5', '#a43cf3', '#e64c66', '#20b8c5', '#4caf50']
    return (
        <section class={styles.statistics}>
            <h2 class={styles.title}>{title}</h2>
        
            <ul class={styles.stat_list}>
               
                {stats.map((stat, index)=>(
                    <li class={styles.item} key={stat.id} style={{'background-color':itemBackgroundColor[index % itemBackgroundColor.length]}}>
                        <span class={styles.label}>{stat.label}</span>
                        <span class={styles.percentage}>{stat.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

Statistics.defaultProps = {
    title:"Upload stats",
    stats:[]
};

Statistics.propTypes = {
    title:PropTypes.string.isRequired,
    stats:PropTypes.array.isRequired
}