import React from 'react';

// Styles
import './isolation-degree.styles.scss';

export default function IsolationDegree({ isolationData }) {
    return (
        <div className='isolation-container'>
            <span className='isolation-container__country'>{isolationData.country}</span> has the highest degree of isolation of{' '}
            <span className='isolation-container__degree'>{isolationData.degree}</span>
        </div>
    );
}
