import { TSProduct } from "@/types";



const ProductDetailsComponent = ({ product }: { product: TSProduct }) => {
    const { name, price, category, stock, specifications, description, brand, } = product;

    return (
        <div className="p-6  space-y-6">
            {/* Product Title and Basic Info */}
            <div>
                <h1 className="text-2xl font-bold text-black">{name}</h1>
                <div className="flex items-center justify-between mt-2">
                    <p className="text-sm capitalize"><span>Category:</span> {category}</p>
                    <span className="px-3 py-1 text-sm rounded-md bg-green-100 text-green-700">
                        {stock > 0 ? "In Stock" : "Out of Stock"}
                    </span>
                </div>
                <p className="text-sm  mt-1 capitalize">Brand: {brand}</p>
                <p className="text-lg font-semibold text-gray-900 mt-4">${price}</p>
            </div>
            <hr className='my-6' />
            {/* Specifications Section */}
            <div>
                <h2 className="text-lg font-medium text-black">Specifications</h2>
                <ul className=" text-sm  mt-2 space-y-1">
                    {specifications?.map((spec, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <span className="font-semibold text-gray-700">
                                {Object.keys(spec)[0]}:
                            </span>
                            <span className="text-gray-600">{Object.values(spec)[0]}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <hr className='my-6' />
            {/* Description Section */}
            <div>
                <h2 className="text-lg font-medium text-black">Description</h2>
                <p className="text-sm  mt-2">{description}</p>
            </div>


        </div>
    );
};

export default ProductDetailsComponent;
