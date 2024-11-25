'use client'
const AddToCart = () => {
    return (
        <div className="mt-4">
            <button
                onClick={(e) => {
                    e.stopPropagation();// Stop navigation on button click
                    e.preventDefault();
                }}

                type="button"
                className="w-full  py-2 border hover:bg-purple-600 hover:text-white text-[#7E53D4] border-[#7E53D4]  font-semibold rounded-lg"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default AddToCart;