import Container from "@/Components/UI/Container";
import ProductSlider from "../_components/Module/ProductSlider/ProductSlider";

const ProductDetailsPage = () => {
    return (
        <Container>
            <div className="mt-8">
                {/* header */}
                <header>
                    <h2>Feature Product / New Arrival</h2>
                </header>
                <main className="lg:flex space-x-6 mt-6">
                    <div className="lg:w-1/2">
                        <ProductSlider />
                    </div>

                    <div className="lg:w-1/2">

                        <section className="product-overview">
                            <header className="product-header space-y-6 ">
                                <button className="product-tag bg-purple-950 py-[9.5px] px-14 text-white font-semibold rounded-lg">New Arrival</button>
                                <h3 className="product-title font-semibold text-[33px] ">White Hoodie</h3>
                                <div className="product-rating">
                                    <span>⭐⭐⭐⭐⭐ (4.0) </span>
                                    <span className="product-reviews text-purple-600 font-medium"> 121 reviews</span>
                                </div>
                                <h4 className="product-price text-[28px] uppercase font-bold ">bdt 2500</h4>
                            </header>
                            <hr className="my-8 border-dashed" />
                            <section className="product-options flex justify-between items-center">
                                <article className="product-sizes">
                                    <h2 className="options-title text-lg font-semibold mb-4">Available Size</h2>
                                    <div className="space-x-2">
                                        <button className="size-button py-[9.5px]  px-4 hover:border-2 hover:border-purple-600 rounded-lg uppercase transition-all duration-300 transform focus:outline-none focus:ring-4 focus:ring-purple-600 hover:scale-105 hover:shadow-lg ">S</button>
                                        <button className="size-button py-[9.5px]  px-4 hover:border-2 hover:border-purple-600 rounded-lg uppercase transition-all duration-300 transform focus:outline-none focus:ring-4 focus:ring-purple-600 hover:scale-105 hover:shadow-lg ">M</button>
                                        <button className="size-button py-[9.5px]  px-4 hover:border-2 hover:border-purple-600 rounded-lg uppercase transition-all duration-300 transform focus:outline-none focus:ring-4 focus:ring-purple-600 hover:scale-105 hover:shadow-lg ">L</button>
                                        <button className="size-button py-[9.5px]  px-4 hover:border-2 hover:border-purple-600 rounded-lg uppercase transition-all duration-300 transform focus:outline-none focus:ring-4 focus:ring-purple-600 hover:scale-105 hover:shadow-lg ">XL</button>


                                    </div>
                                </article>
                                <article className="product-colors hidden lg:block">
                                    <h2 className="options-title options-title text-lg font-semibold mb-4">Available Color</h2>

                                    <div className="flex justify-around items-center space-x-2">
                                        <label className="flex items-center space-x-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="color"
                                                className="w-5 h-5 border-2 border-purple-600 rounded-full text-purple-600 focus:ring-2 focus:ring-purple-600 focus:outline-none"
                                            />
                                            <span className="text-lg font-medium text-gray-700 hover:text-purple-600 transition-colors">
                                                Off White
                                            </span>
                                        </label>
                                        <label className="flex items-center space-x-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="color"
                                                className="w-5 h-5 border-2 border-purple-600 rounded-full text-purple-600 focus:ring-2 focus:ring-purple-600 focus:outline-none"
                                            />
                                            <span className="text-lg font-medium text-gray-700 hover:text-purple-600 transition-colors">
                                                Black
                                            </span>
                                        </label>
                                    </div>
                                </article>
                            </section>
                            <hr className="my-8 border-dashed" />

                            <section className="product-actions space-y-8">
                                <article className="product-quantity space-y-4">
                                    <h2 className="quantity-title font-bold">Quantity</h2>
                                    <div className="flex items-center justify-start">
                                        <div className="quantity-controls bg-[#ECE9FE] p-4 flex items-center space-x-[30.5px] rounded-full">
                                            <button className="decrement font-semibold">-</button>
                                            <p className="quantity-value font-semibold">0</p>
                                            <button className="increment font-semibold">+</button>
                                        </div>
                                    </div>
                                </article>
                                <article className="product-buttons lg:flex  space-y-4 lg:space-y-0 lg:space-x-4">
                                    <button className="buy-now-button w-full rounded-lg py-[9.5px] px-14 hover:bg-purple-600 hover:text-white border border-purple-600 text-purple-600 font-semibold">Buy Now</button>
                                    <button className="add-to-cart-button w-full rounded-lg py-[9.5px] px-14 hover:bg-purple-600 hover:text-white border border-purple-600 text-purple-600 font-semibold">Add To Cart</button>
                                </article>
                            </section>

                        </section>
                    </div>



                </main>

            </div>
        </Container>
    );
};

export default ProductDetailsPage;