import React from 'react';
import './menu-item.style.css';
const MenuItem = ({title, imageURL, size}) => (
    <div className={'menu-item ' + size}>
        <div className='background-image' style={{
            backgroundImage: 'url(' + imageURL + ')'
        }}></div>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);
export default MenuItem;