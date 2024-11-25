import { ArrowLeftIcon, ArrowRightIcon } from '@/assets/icons';
import React from 'react';

const SlideButton = () => {
    return (
        <div className="space-x-2">
            <button
                className="transform -translate-y-1/2 border border-purple-600 hover:bg-purple-600 text-white p-2 rounded-full"

            >
                <ArrowLeftIcon className="text-purple-600 hover:text-white" />
            </button>
            <button
                className=" transform -translate-y-1/2 border border-purple-600 hover:bg-purple-600 text-white p-2 rounded-full"

            >
                <ArrowRightIcon className="text-purple-600 hover:text-white" />
            </button>
        </div>
    );
};

export default SlideButton;