import { ArrowLeftIcon, ArrowRightIcon } from "@/assets/icons";
import Container from "@/Components/UI/Container";
import FeaturedProductCard from "@/Components/UI/FeaturedProductCard";
import HeadingComponent from "@/Components/UI/HeadingComponent";

const FeaturedProject = () => {
    return (
        <Container>
            {/* header part */}
            <div className="flex justify-between items-center">
                <HeadingComponent heading="New Arrivals" subHeading="featured product" />
                <div className="space-x-2">
                    <button
                        className="transform -translate-y-1/2 border border-purple-600 hover:bg-purple-600 text-white p-2 rounded-full"

                    >
                        <ArrowLeftIcon className="text-purple-600 hover:text-white" />
                    </button>
                    <button
                        className=" transform -translate-y-1/2 border border-purple-600 hover:bg-purple-600 text-white p-2 rounded-full"

                    >
                        <ArrowRightIcon className="text-purple-600 hover:text-white" />
                    </button>
                </div>
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