import React from 'react';

// Styles
import './table-footer.styles.scss';

export default function TableFooter({ totalMissions }) {
    return <div className='footer-container'>{totalMissions} missions</div>;
}
