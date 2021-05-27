import React from 'react';
import CollectionPreview from '../../components/preview.collection/collection-preview.component';
import Data from './shop.data';
class ShopPage extends React.Component{
    constructor(){
        super();
        this.state = {
            collections: Data
        }
    }
    render(){
        const {collections} = this.state;
        return(
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherProps}) => (
                        <CollectionPreview key={id} {...otherProps} />
                    ))
                }
            </div>
        )
    }
}
export default ShopPage;