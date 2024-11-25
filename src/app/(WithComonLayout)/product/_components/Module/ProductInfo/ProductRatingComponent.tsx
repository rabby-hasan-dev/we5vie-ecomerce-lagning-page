import React from 'react';
import RatingUIComponent from '../../UI/RatingUIComponent';
import Dropdown from '@/Components/form/Dropdwon';


const ProductRatingComponent = () => {
    const options = ["Option 1", "Option 2", "Option 3", "Option 4"];
    return (
        <div className='flex'>
            <div className='w-2/3'>
                <Dropdown buttonLabel='Newest' options={options} />
            </div>
            <div className='w-1/3'>
                <RatingUIComponent />
            </div>
        </div>
    );
};

export default ProductRatingComponent;