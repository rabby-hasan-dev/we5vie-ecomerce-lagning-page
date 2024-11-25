import Container from "@/Components/UI/Container";
import ProductSlider from "../_components/Module/ProductSlider/ProductSlider";
import ProductOverviewCard from "../_components/UI/ProductOverviewCard";
import HeadingComponent from "@/Components/UI/HeadingComponent";
import FeaturedProductCard from "@/Components/UI/FeaturedProductCard";
import SlideButton from "@/Components/Button/SlideButton";
import Breadcrumb from "../_components/UI/Breadcrumb";
import Badges from "@/Components/UI/Badges";


const ProductDetailsPage = () => {
    return (
        <Container>
            <div className=" hidden lg:block absolute top-96 right-1 ">
                <Badges />
            </div>
            <div className="mt-8">
                {/* header */}
                <header className="flex justify-start">
                    < Breadcrumb />
                </header>

                <main className="lg:flex space-y-6 lg:space-y-0 space-x-6 mt-6">

                    <div className="lg:w-1/2">
                        <ProductSlider />
                    </div>
                    <div className="lg:w-1/2">
                        <ProductOverviewCard />

                    </div>

                </main>
                <main className="my-20">
                    {/* Related Product */}
                    <div>
                        {/* header part */}
                        <div className="flex justify-between items-center">
                            <HeadingComponent heading="Related Products" subHeading="" />
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

                    </div>
                </main>

            </div>
        </Container>
    );
};

export default ProductDetailsPage;