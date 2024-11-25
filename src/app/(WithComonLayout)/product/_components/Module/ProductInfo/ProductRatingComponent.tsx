import React from 'react';
import RatingUIComponent from '../../UI/RatingUIComponent';
import Dropdown from '@/Components/form/Dropdwon';
import ReviewCard from '../../UI/ReviewCard';


const ProductRatingComponent = () => {
    const options = ["Option 1", "Option 2", "Option 3", "Option 4"];
    return (
        <div className='lg:flex '>
            <div className='lg:w-2/3'>
                <Dropdown buttonLabel='Newest' options={options} />

                <ReviewCard />
                <hr className='my-6' />
                <ReviewCard />
            </div>
            <div className='lg:w-1/3'>
                <RatingUIComponent />
            </div>
        </div>
    );
};

export default ProductRatingComponent;