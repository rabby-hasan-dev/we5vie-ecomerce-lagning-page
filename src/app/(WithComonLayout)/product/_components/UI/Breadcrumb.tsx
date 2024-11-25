import React from 'react';

const Breadcrumb = () => {
    return (
        <ul className="flex items-center justify-center space-x-4 font-[sans-serif]">
            <li className="text-gray-500 font-semibold text-base cursor-pointer">
                Feature Product
            </li>
            <li className="text-gray-500 font-semibold  text-lg">/</li>
            <li className="font-semibold text-purple-600 text-base cursor-pointer">
                New Arrival
            </li>


        </ul>
    );
};

export default Breadcrumb;