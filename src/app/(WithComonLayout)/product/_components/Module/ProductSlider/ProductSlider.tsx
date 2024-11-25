
'use client'
import { useEffect, useState } from "react";
import Container from "@/Components/UI/Container";
import Slider from "@/Components/Slider/Slider";
import Image from "next/image";

export interface ISlide {
    image: string;
    title: string;
    description: string;
    buttonText: string;
}

const ProductSlider = () => {
    const [slidesData, setSlidesData] = useState([]);

    // Fetch data on component mount
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/sliderData.json");
            const data = await response.json();
            setSlidesData(data);
        };

        fetchData();
    }, []);

    return (
        <Container>
            <Slider
                slides={slidesData.map((slide: ISlide, index) => (
                    <Image
                        key={index + 1}
                        src={slide.image}
                        alt="footer-image"
                        width={1200}
                        height={800}
                        layout="responsive"
                        className="object-cover h-[50vh] bg-purple-50 rounded-lg"
                    />
                ))}

            />
        </Container>
    );
};

export default ProductSlider;
