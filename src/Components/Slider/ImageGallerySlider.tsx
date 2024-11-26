
'use client'
import { ArrowLeftIcon, ArrowRightIcon } from "@/assets/icons";
import Image from "next/image";
import { useState } from "react";

const ImageGallerySlider = ({ slides }: { slides: string[] }) => {
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
                {slides.map((src, idx) => (
                    <div key={idx} className="w-full flex-shrink-0">
                        <Image
                            src={src}
                            alt={`Slide ${idx}`}
                            width={1200}
                            height={600}
                            className="w-full h-auto bg-purple-50  object-cover"
                        />
                    </div>
                ))}
            </div>
            {/* Page Number */}
            <div className="relative w-full  lg:hidden  ">
                <div className="absolute bottom-4  right-1 transform -translate-x-1/2 bg-[#E0DCF8] px-4 py-2 text-[13px] text-black font-semibold rounded-[25px] shadow-md">
                    <span>{current + 1}</span> / <span>{slides.length}</span>
                </div>
            </div>
            {/* Navigation Buttons */}
            <button
                aria-label="Previous slide"
                className="absolute top-1/2 right-2 transform -translate-y-1/2 border border-purple-600 hover:bg-purple-600 text-white p-3 rounded-full"
                onClick={prevSlide}
            >
                <ArrowRightIcon className="text-purple-600 hover:text-white" />

            </button>
            <button
                aria-label="Next slide"
                className="absolute top-1/2 left-2 transform -translate-y-1/2 border border-purple-600 hover:bg-purple-600 text-white p-3 rounded-full"
                onClick={nextSlide}
            >
                <ArrowLeftIcon className="text-purple-600 hover:text-white" />
            </button>



            {/* Thumbnail Navigation */}
            <div className="hidden  lg:flex   justify-center mt-4 space-x-4 overflow-y-auto">
                {slides.map((src, idx) => (
                    <div
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`cursor-pointer w-24 h-24 rounded-md border-2 ${current === idx ? "border-purple-600" : "border-transparent"
                            }`}
                    >
                        <Image
                            src={src}
                            alt={`Thumbnail ${idx}`}
                            width={100}
                            height={100}
                            className="w-full h-full object-cover bg-purple-50 rounded-md"
                        />
                    </div>
                ))}
            </div>


        </div>
    );
};

export default ImageGallerySlider;


