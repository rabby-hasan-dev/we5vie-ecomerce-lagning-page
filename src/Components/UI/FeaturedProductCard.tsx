import Image from 'next/image';
import AddToCart from '../Button/AddToCart';
import Link from 'next/link';


const FeaturedProductCard = () => {
    return (
        <>
            <Link href={`/product/:1`}>
                <div className="shadow-md hover:shadow-lg rounded-lg transition-shadow w-full max-w-sm overflow-hidden mx-auto m-2  border border-gray-200">
                    {/* Image Section */}
                    <div className="relative h-[252px] rounded-lg m-2 ">
                        <Image
                            alt="Mountains"
                            src='/man.png'
                            fill
                            sizes="(min-width: 808px) 50vw, 100vw"
                            style={{
                                objectFit: 'cover', // cover, contain, none

                            }}
                            className='bg-purple-50'
                        />
                        {/* Discount Badge */}


                    </div>

                    {/* Content Section */}
                    <div className="p-2">
                        {/* Product Info */}
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="text-lg">Indian Sharee</h3>
                            <p className="text-xl font-bold text-black">BDT 2,300</p>
                        </div>

                        {/* Add to Cart Button */}
                        <AddToCart />
                    </div>
                </div>
            </Link>

        </>



    );
};

export default FeaturedProductCard;