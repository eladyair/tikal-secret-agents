import React from 'react';

// Styles
import './mission.styles.scss';

export default function Mission({ data }) {
    return (
        <div className='mission'>
            <div className='mission__column mission__column--agentId'>{data.agent}</div>
            <div className='mission__column mission__column--country'>{data.country}</div>
            <div className='mission__column mission__column--address'>{data.address}</div>
            <div className='mission__column mission__column--date'>{data.date}</div>
        </div>
    );
}
