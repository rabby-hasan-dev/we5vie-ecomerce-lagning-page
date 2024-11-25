import Image from 'next/image';


const FeaturedProductCard = () => {
    return (
        <div className="shadow-md hover:shadow-lg rounded-lg transition-shadow w-full max-w-sm overflow-hidden mx-auto m-2  border border-gray-200">
            {/* Image Section */}
            <div className="relative ">
                <Image
                    src="/hero.png"
                    alt="Product-image"
                    layout="responsive"
                    width={1920}
                    height={1080}
                    className="object-cover m-2 bg-purple-50"
                />
            </div>

            {/* Content Section */}
            <div className="p-2">

                {/* Product Info */}
                <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg">Indian Sharee</h3>
                    <p className="text-xl font-bold text-black">BDT 2,300</p>
                </div>

                {/* Add to Cart Button */}
                <button
                    type="button"
                    className="w-full mt-4 py-2 border hover:bg-purple-600 hover:text-white text-purple-600 border-purple-600  font-semibold rounded-lg"
                >
                    Add to Cart
                </button>
            </div>
        </div>



    );
};

export default FeaturedProductCard;