
'use client'
import { useEffect, useState } from "react";
import Container from "@/Components/UI/Container";
import Slider from "@/Components/Slider/Slider";
import SlideContent from "@/Components/Slider/SlideContent";

export interface ISlide {
    image: string;
    title: string;
    description: string;
    buttonText: string;
}


const CollectionSlide = () => {
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
                    <SlideContent
                        key={index}
                        imageSrc={slide.image}
                        title={slide.title}
                        description={slide.description}
                        buttonText={slide.buttonText}
                    />
                ))}
            />
        </Container>
    );
};

export default CollectionSlide;
