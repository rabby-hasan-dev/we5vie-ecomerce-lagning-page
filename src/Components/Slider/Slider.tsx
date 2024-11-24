'use client'
import { ArrowLeftIcon, ArrowRightIcon } from "@/assets/icons";
import { ReactNode, useState } from "react";

const Slider = ({ slides }: { slides: ReactNode[] }) => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div className="relative w-full max-w-screen-xl mx-auto overflow-hidden">
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((slide: ReactNode, idx: number) => (
                    <div key={idx} className="w-full flex-shrink-0">
                        {slide} {/* Render the passed JSX */}
                    </div>
                ))}
            </div>
            <button
                className="absolute top-1/2 left-2 transform -translate-y-1/2 border border-purple-600 hover:bg-purple-600 text-white p-2 rounded-full"
                onClick={prevSlide}
            >
                <ArrowLeftIcon className="text-purple-600 hover:text-white" />
            </button>
            <button
                className="absolute top-1/2 right-2 transform -translate-y-1/2 border border-purple-600 hover:bg-purple-600 text-white p-2 rounded-full"
                onClick={nextSlide}
            >
                <ArrowRightIcon className="text-purple-600 hover:text-white" />
            </button>
            <div className="flex justify-center mt-2 space-x-2">
                {slides.map((_, idx: number) => (
                    <div
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`w-8 h-2 rounded-lg cursor-pointer ${idx === current ? "bg-purple-600" : "bg-purple-200"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
