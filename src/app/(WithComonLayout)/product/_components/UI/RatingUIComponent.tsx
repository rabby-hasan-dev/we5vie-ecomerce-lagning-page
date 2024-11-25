import React from 'react';

const RatingUIComponent = () => {
    return (
        <div className="max-w-sm mx-auto bg-gray-100 p-6 font-sans">
            <div className='flex justify-between items-center'>
                <h3 className="text-black font-semibold ">Product Review</h3>
                <p className='text-purple-600 font-semibold '>121 reviews</p>
            </div>
            <div className="flex justify-between items-center my-4">

                <div className="flex justify-center space-x-1 mt-4">
                    <svg className="w-10 h-10 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg className="w-10 h-10 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg className="w-10 h-10 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg className="w-10 h-10 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg className="w-10 h-10 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                </div>
                <h3 className="text-black font-semibold text-sm">(4.0)</h3>

            </div>
            <hr className='my-4' />
            <div className="space-y-2">
                <div className="flex items-center">
                    <p className="text-base text-black">5</p>

                    <div className="bg-gray-300 rounded w-full h-[14px] ml-3">
                        <div className="w-2/3 h-full rounded bg-[#facc15]"></div>
                    </div>
                    <p className="text-base text-black  ml-3">66%</p>
                </div>
                <div className="flex items-center">
                    <p className="text-base text-black">4</p>
                    <div className="bg-gray-300 rounded w-full h-[14px] ml-3">
                        <div className="w-1/3 h-full rounded bg-[#facc15]"></div>
                    </div>
                    <p className="text-base text-black  ml-3">33%</p>
                </div>
                <div className="flex items-center">
                    <p className="text-base text-black">3</p>

                    <div className="bg-gray-300 rounded w-full h-[14px] ml-3">
                        <div className="w-1/6 h-full rounded bg-[#facc15]"></div>
                    </div>
                    <p className="text-base text-black  ml-3">16%</p>
                </div>
                <div className="flex items-center">
                    <p className="text-base text-black">2</p>

                    <div className="bg-gray-300 rounded w-full h-[14px] ml-3">
                        <div className="w-1/12 h-full rounded bg-[#facc15]"></div>
                    </div>
                    <p className="text-base text-black  ml-3">8%</p>
                </div>
                <div className="flex items-center">
                    <p className="text-base text-black">1</p>

                    <div className="bg-gray-300 rounded w-full h-[14px] ml-3">
                        <div className="w-[6%] h-full rounded bg-[#facc15]"></div>
                    </div>
                    <p className="text-base text-black  ml-3">6%</p>
                </div>
            </div>
        </div>
    );
};

export default RatingUIComponent;