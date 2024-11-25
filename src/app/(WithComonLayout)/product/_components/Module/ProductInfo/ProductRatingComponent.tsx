import React from 'react';
import RatingUIComponent from '../../UI/RatingUIComponent';

const ProductRatingComponent = () => {
    return (
        <div className='flex'>
            <div className='w-2/3'>
                comment
            </div>
            <div className='w-1/3'>
                <RatingUIComponent />
            </div>
        </div>
    );
};

export default ProductRatingComponent;