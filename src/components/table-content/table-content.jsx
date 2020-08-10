import React, { Fragment } from 'react';

// Styles
import './table-content.styles.scss';

// Components
import Mission from '../mission/mission';

export default function TableContent({ missions }) {
    return (
        <div className='content-container'>
            {missions.map((mission, index) => (
                <Mission key={index} data={mission} />
            ))}
        </div>
    );
}
