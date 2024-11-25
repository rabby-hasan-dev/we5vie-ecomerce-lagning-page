
import SlideButton from "@/Components/Button/SlideButton";

import Container from "@/Components/UI/Container";
import HeadingComponent from "@/Components/UI/HeadingComponent";
import ProductCard from "@/Components/UI/ProductCard";


const BigdealSection = () => {


    return (
        <Container>
            {/* header part */}
            <div className="flex justify-between items-center">
                <HeadingComponent heading="Big Deal" subHeading="summer" />
                <SlideButton />
            </div>
            {/* main content */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>

            <div className="text-center mt-6">
                <button className="font-semibold px-6 py-2 bg-purple-600 rounded-lg text-white" >See more</button>
            </div>

        </Container>
    );
};

export default BigdealSection;