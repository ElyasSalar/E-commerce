import React from 'react';
import './collection-item.style.css';

const CollectionItem = ({id, name, price, imageUrl}) => (
    <div className='collection-item'>
        <div className='image' style={{backgroundImage: 'url(' + imageUrl + ')'}} />
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="name text-align-right">{price}</span>
        </div>
    </div>
);

export default CollectionItem;