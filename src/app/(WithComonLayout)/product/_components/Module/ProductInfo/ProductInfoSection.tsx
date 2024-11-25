'use client'
import { useState } from "react";
import ProductDetailsComponent from "./ProductDetailsComponent";
import ProductRatingComponent from "./ProductRatingComponent";
import ProductDiscussion from "./ProductDiscussion";


const ProductInfoSection = () => {
    const [activeTab, setActiveTab] = useState("details"); // Default to 'details'

    // Function to change active tab
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };


    const sampleProduct = {
        name: "Gaming Laptop Pro",
        price: 1499.99,
        category: "Electronics",
        stock: 8,
        brand: "TechBrand",
        sku: "GAM-LTP-123",
        description: "A high-performance gaming laptop with stunning visuals and advanced cooling.",
        specifications: [
            "16GB RAM",
            "1TB SSD",
            "NVIDIA RTX 3070",
            "17-inch 4K Display",
            "Intel i7 12th Gen Processor",
        ],
    };







    return (
        <div>
            {/* Dynamic Content Section */}
            <div className="my-[50px] ">
                <div className="flex lg:space-x-[72px] ">
                    <button
                        onClick={() => handleTabClick("details")}
                        className={`py-2 px-6 font-semibold lg:text-[19px] ${activeTab === "details" ? "text-[#7E53D4] " : "text-[#747474] "} `}
                    >
                        Details
                    </button>
                    <button
                        onClick={() => handleTabClick("rating")}
                        className={`py-2 px-6 font-semibold lg:text-[19px] ${activeTab === "rating" ? "text-[#7E53D4] " : "text-[#747474] "} `}
                    >
                        Review & Rating
                    </button>
                    <button
                        onClick={() => handleTabClick("discussion")}
                        className={`py-2 px-6 font-semibold lg:text-[19px] ${activeTab === "discussion" ? "text-[#7E53D4] " : "text-[#747474] "} `}
                    >
                        Discussion
                    </button>
                </div>

                <div className="mt-10">
                    {/* Conditional Rendering based on active tab */}
                    {activeTab === "details" && <ProductDetailsComponent product={sampleProduct} />}
                    {activeTab === "rating" && <ProductRatingComponent />}
                    {activeTab === "discussion" && <ProductDiscussion />}
                </div>
            </div>
        </div>
    );
};

export default ProductInfoSection;