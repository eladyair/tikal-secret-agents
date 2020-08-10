import React from 'react';

// Styles
import './table-header.styles.scss';

export default function TableHeader() {
    return (
        <div className='header-container'>
            <div className='header-container__column header-container__column--title'>
                <div className='header-container__title'>Agent ID</div>
                <div className='header-container__separator'></div>
            </div>
            <div className='header-container__column header-container__column--country'>
                <div className='header-container__title'>Country</div>
                <div className='header-container__separator'></div>
            </div>
            <div className='header-container__column header-container__column--address'>
                <div className='header-container__title'>Adress</div>
                <div className='header-container__separator'></div>
            </div>
            <div className='header-container__column header-container__column--date'>
                <div className='header-container__title'>Date</div>
            </div>
        </div>
    );
}
