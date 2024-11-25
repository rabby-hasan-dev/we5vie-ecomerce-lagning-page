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
                    {activeTab === "details" && <ProductDetailsComponent />}
                    {activeTab === "rating" && <ProductRatingComponent />}
                    {activeTab === "discussion" && <ProductDiscussion />}
                </div>
            </div>
        </div>
    );
};

export default ProductInfoSection;