
'use client'
import { ArrowLeftIcon, ArrowRightIcon } from "@/assets/icons";
import Image from "next/image";
import { ReactNode, useState } from "react";

const Slider = ({ slides }: { slides: ReactNode[] }) => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div className="relative w-full max-w-screen-xl mx-auto overflow-hidden">
            {/* Main Slide Container */}
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((slide: ReactNode, idx: number) => (
                    <div key={idx} className="w-full flex-shrink-0">
                        {slide} {/* Render the passed JSX */}
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                aria-label="Previous slide"
                className="absolute top-1/2 left-2 transform -translate-y-1/2 border border-purple-600 hover:bg-purple-600 text-white p-3 rounded-full"
                onClick={prevSlide}
            >
                <ArrowLeftIcon className="text-purple-600 hover:text-white" />
            </button>
            <button
                aria-label="Next slide"
                className="absolute top-1/2 right-2 transform -translate-y-1/2 border border-purple-600 hover:bg-purple-600 text-white p-3 rounded-full"
                onClick={nextSlide}
            >
                <ArrowRightIcon className="text-purple-600 hover:text-white" />
            </button>

            {/* Thumbnail Navigation */}
            <div className="flex  justify-center mt-4 space-x-4 overflow-x-auto">
                {slides.map((slide: ReactNode, idx: number) => (
                    <div
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`cursor-pointer rounded-lg `}
                    >
                        <Image
                            src={slide.props.src}
                            height={60}
                            width={60}
                            alt={`thumbnail-${idx}`}
                            className="w-full bg-purple-50 h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;

