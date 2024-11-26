'use client'

import SlideButton from '@/Components/Button/SlideButton';
import Alert from '@/Components/UI/Alert';
import FeaturedProductCard from '@/Components/UI/FeaturedProductCard';
import HeadingComponent from '@/Components/UI/HeadingComponent';
import Spinner from '@/Components/UI/Spiner';
import { useProducts } from '@/hooks/useProducts.hook';
import useResponsivePagination from '@/hooks/useResponsivePagination';
import { TProduct } from '@/types';
import React, { useMemo } from 'react';

const RelatedProductSection = () => {
    const { products, isLoading, error } = useProducts()
    const { currentPage, paginatedItems: paginatedProducts, handlePageChange, totalPages }
        = useResponsivePagination(products, 4)

    const renderContent = useMemo(() => {
        // Handle loading, error, and empty states
        if (isLoading) {
            return (
                <div className="flex justify-center items-center">
                    <Spinner />
                </div>
            );
        }

        if (error) {
            return <Alert message="Something Went Wrong" type="error" />;
        }

        if (products.length === 0) {
            return <Alert message="No products available." type="info" />;
        }

        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                {paginatedProducts?.map((product: TProduct) => (
                    <FeaturedProductCard key={product.id} product={product} />
                ))}
            </div>
        );
    }, [isLoading, error, products, paginatedProducts]);


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
                {renderContent}
            </main>

            <div className="text-center mt-6">
                <button className="font-semibold px-6 py-2 bg-purple-600 rounded-lg text-white" >See more</button>
            </div>

        </section>

    );
};

export default RelatedProductSection;