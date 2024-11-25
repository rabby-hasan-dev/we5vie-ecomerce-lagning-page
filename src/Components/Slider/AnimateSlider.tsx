
'use client'
import { ReactNode, useState, useEffect } from "react";

const AnimateSlider = ({ slides }: { slides: ReactNode[] }) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length); // Go to the next slide, and loop back to the first one after the last slide
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup the interval when the component is unmounted
    }, [slides.length]); // Re-run the effect if the number of slides changes

    return (
        <div className="relative w-full  max-w-screen-xl mx-auto overflow-hidden">
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

export default AnimateSlider;
