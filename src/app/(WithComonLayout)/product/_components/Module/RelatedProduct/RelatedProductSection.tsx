'use client'

import SlideButton from '@/Components/Button/SlideButton';
import Alert from '@/Components/UI/Alert';
import FeaturedProductCard from '@/Components/UI/FeaturedProductCard';
import HeadingComponent from '@/Components/UI/HeadingComponent';
import Spinner from '@/Components/UI/Spiner';
import { usePagination } from '@/hooks/usePaginate';
import { useProducts } from '@/hooks/useProducts.hook';
import { TProduct } from '@/types';
import React from 'react';

const RelatedProductSection = () => {
    const { products, isLoading, error } = useProducts()
    const { paginatedItems: paginatedProducts, currentPage, totalPages, handlePageChange } =
        usePagination<TProduct>(products, 4);


    return (
        <section>
            {/* header part */}
            <header className="flex justify-between items-center">
                <HeadingComponent heading="Related Products" subHeading="" />
                <SlideButton
                    onPrev={() => handlePageChange('prev')}
                    onNext={() => handlePageChange('next')}
                    disablePrev={currentPage === 1}
                    disableNext={currentPage === totalPages}
                />
            </header>

            {/* main content */}
            <main>
                {/* Handle loading, error, and empty states */}
                {isLoading ? (
                    <div className="flex justify-center items-center">
                        <Spinner />
                    </div>
                ) : error ? (
                    <Alert message="Something Went Wrong" type="error" />
                ) : products.length === 0 ? (

                    <Alert message="No products available." type="info" />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                        {
                            paginatedProducts?.map((product: TProduct) => (<FeaturedProductCard key={product.id} product={product} />))
                        }
                    </div>
                )}
            </main>

            <div className="text-center mt-6">
                <button className="font-semibold px-6 py-2 bg-purple-600 rounded-lg text-white" >See more</button>
            </div>

        </section>

    );
};

export default RelatedProductSection;