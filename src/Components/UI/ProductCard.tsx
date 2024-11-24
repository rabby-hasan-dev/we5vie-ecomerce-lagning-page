import Image from 'next/image';


const ProductCard = () => {
    return (
        <div className="shadow-md hover:shadow-lg transition-shadow w-full max-w-sm overflow-hidden mx-auto m-2  border border-gray-200">
            {/* Image Section */}
            <div className="relative ">
                <Image
                    src="/hero.png"
                    alt="Product-image"
                    layout="responsive"
                    width={1920}
                    height={1080}
                    className="object-cover m-2"
                />
                {/* Discount Badge */}

                <div className=" flex flex-col justify-center items-center rounded-b-full absolute top-0 right-4 bg-purple-600 text-white font-bold  shadow-md px-2 pb-2 pt-1">
                    <span>Up</span> <span>to </span>  <span>40% </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-2">
                {/* Rating */}
                <p className="text-sm mb-2">⭐⭐⭐⭐⭐(10)</p>

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

export default ProductCard;