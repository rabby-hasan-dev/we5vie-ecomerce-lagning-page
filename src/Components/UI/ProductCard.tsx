import Image from 'next/image';
import Rating from './Rating';
import Link from 'next/link';
import AddToCart from '../Button/AddToCart';
import { TProduct } from '@/types';


const ProductCard = ({ product }: { product: TProduct }) => {
    const { image, discount, name, price, rating, } = product
    return (
        <>
            <Link href={`/product/:1`}>
                <div className="shadow-md hover:shadow-lg rounded-lg transition-shadow w-full max-w-sm overflow-hidden mx-auto m-2  border border-gray-200">
                    {/* Image Section */}
                    <div className="relative h-[252px] rounded-lg m-2 ">
                        <Image
                            alt="Mountains"
                            src={image}
                            fill
                            sizes="(min-width: 808px) 50vw, 100vw"
                            style={{
                                objectFit: 'cover', // cover, contain, none

                            }}
                            className='bg-purple-50'
                        />
                        {/* Discount Badge */}

                        <div className=" flex flex-col  justify-center items-center rounded-b-full absolute top-0 right-4 bg-[#7E53D4] text-white font-bold  shadow-md px-2 pb-2 pt-1">
                            <span>Up</span> <span>to </span>  <span>{discount} </span>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-2">
                        {/* Rating */}
                        <div className="text-sm mb-2 flex justify-start items-center"><Rating rating={rating} /> ({rating})</div>

                        {/* Product Info */}
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="text-lg">{name} </h3>
                            <p className="text-xl font-bold text-black">{price}</p>
                        </div>

                        {/* Add to Cart Button */}
                        <AddToCart />

                    </div>
                </div>


            </Link>

        </>


    );
};

export default ProductCard;