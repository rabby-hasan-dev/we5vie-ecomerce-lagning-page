
import Container from "@/Components/UI/Container";
import ProductSlider from "../_components/Module/ProductSlider/ProductSlider";
import ProductOverviewCard from "../_components/UI/ProductOverviewCard";
import Breadcrumb from "../_components/UI/Breadcrumb";
import Badges from "@/Components/UI/Badges";
import ProductInfoSection from "../_components/Module/ProductInfo/ProductInfoSection";
import RelatedProductSection from "../_components/Module/RelatedProduct/RelatedProductSection";


const ProductDetailsPage = () => {


    return (
        <Container>
            <aside className=" hidden lg:block absolute top-96 right-1 ">
                <Badges />
            </aside>
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

                <main>
                    < ProductInfoSection />
                </main>
                {/* Related product */}
                <main className="my-20">
                    <RelatedProductSection />
                </main>
            </div>
        </Container>
    );
};

export default ProductDetailsPage;