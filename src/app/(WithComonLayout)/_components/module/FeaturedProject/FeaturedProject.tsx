
import SlideButton from "@/Components/Button/SlideButton";
import Container from "@/Components/UI/Container";
import FeaturedProductCard from "@/Components/UI/FeaturedProductCard";
import HeadingComponent from "@/Components/UI/HeadingComponent";

const FeaturedProject = () => {
    return (
        <Container>
            {/* header part */}
            <div className="flex justify-between items-center">
                <HeadingComponent heading="New Arrivals" subHeading="featured product" />
                <SlideButton />
            </div>

            {/* main content */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
                <FeaturedProductCard />
                <FeaturedProductCard />
                <FeaturedProductCard />
                <FeaturedProductCard />

            </div>

            <div className="text-center mt-6">
                <button className="font-semibold px-6 py-2 bg-purple-600 rounded-lg text-white" >See more</button>
            </div>

        </Container>
    );
};

export default FeaturedProject;