'use client'
import { useState } from "react";
import ProductDetailsComponent from "./ProductDetailsComponent";
import ProductRatingComponent from "./ProductRatingComponent";
import ProductDiscussion from "./ProductDiscussion";


const ProductInfoSection = () => {
    const [activeTab, setActiveTab] = useState("rating"); // Default to 'details'

    // Function to change active tab
    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };


    const sampleProduct = {
        name: "Gaming Laptop Pro",
        price: 1499.99,
        category: "Electronics",
        stock: 8,
        brand: "TechBrand",
        description: "A high-performance gaming laptop with stunning visuals and advanced cooling.",
        specifications: [
            {
                material: "Silk"
            },
            {
                length: "6 meters"
            },
            {
                washCare: "Dry clean only"
            }
        ],
    };


    const discussionDataSample = [
        {
            username: "Alice",
            question: "Does this product come with a warranty?",
            answer: "Yes, it includes a 1-year warranty.",
            date: "2024-11-22",
        },
        {
            username: "Bob",
            question: "What is the size of this product?",
            answer: null, // No answer yet
            date: "2024-11-23",
        },
    ];



    return (
        <section>
            {/* Dynamic Content Section */}
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
                {activeTab === "discussion" && <ProductDiscussion discussions={discussionDataSample} />}
            </div>
        </section>
    );
};

export default ProductInfoSection;