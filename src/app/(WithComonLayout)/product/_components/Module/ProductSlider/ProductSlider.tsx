
import Container from "@/Components/UI/Container";

import ImageGallerySlider from "@/Components/Slider/ImageGallerySlider";

export interface ISlide {
    image: string;
    title: string;
    description: string;
    buttonText: string;
}

const ProductSlider = () => {

    const slides = [
        "/heroman.png",
        "/heroman.png",
        "/heroman.png",
        "/heroman.png",
    ];

    return (
        <Container>
            <div className="container mx-auto">
                <ImageGallerySlider slides={slides} />
            </div>
        </Container>
    );
};

export default ProductSlider;
