import { ShoppingIcon } from '@/assets/icons';
import React from 'react';

const Badges = () => {
    return (
        <div className="w-[100px] h-[100px] bg-[#581FC1] text-white p-4 text-center rounded-l-lg flex flex-col items-center justify-center space-y-1">
            <ShoppingIcon className="text-white text-2xl " />
            <p className="font-bold text-sm">Your Bag</p>
            <p className="text-sm">0</p>
        </div>
    );
};

export default Badges;