
'use client'
import { useEffect, useState } from "react";
import Container from "@/Components/UI/Container";
import SlideContent from "@/Components/Slider/SlideContent";
import AnimateSlider from "@/Components/Slider/AnimateSlider";


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

        <section className="mb-20 ">
            <Container>
                <AnimateSlider
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
        </section>

    );
};

export default CollectionSlide;
