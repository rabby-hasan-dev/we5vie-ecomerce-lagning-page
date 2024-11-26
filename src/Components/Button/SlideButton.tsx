import { ArrowLeftIcon, ArrowRightIcon } from '@/assets/icons';
import React from 'react';

type SlideButtonProps = {
    onPrev: () => void;
    onNext: () => void;
    disablePrev: boolean;
    disableNext: boolean;
};


const SlideButton = ({ onPrev, onNext, disablePrev, disableNext }: SlideButtonProps) => {
    return (
        <div className="space-x-2">
            <button
                disabled={disablePrev}
                onClick={onPrev}
                className="transform -translate-y-1/2 border border-purple-600 hover:bg-purple-600 text-white p-2 rounded-full"

            >
                <ArrowLeftIcon className="text-purple-600 hover:text-white" />
            </button>
            <button
                disabled={disableNext}
                onClick={onNext}
                className=" transform -translate-y-1/2 border border-purple-600 hover:bg-purple-600 text-white p-2 rounded-full"

            >
                <ArrowRightIcon className="text-purple-600 hover:text-white" />
            </button>
        </div>
    );
};

export default SlideButton;

