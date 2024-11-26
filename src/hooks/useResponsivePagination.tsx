'use client'

import { useEffect, useState } from 'react';
import { usePagination } from './usePaginate';

const useResponsivePagination = <T,>(items: T[], initialItemsPerPage: number) => {
    const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);

    // Adjust items per page based on window width
    useEffect(() => {
        const updateItemsPerPage = () => {
            if (window.innerWidth < 640) {
                setItemsPerPage(1); // Small screen (phones)
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(4); // Medium screen (tablets)
            } else {
                setItemsPerPage(itemsPerPage); // Large screen (desktops) (adjust as needed)
            }
        };

        updateItemsPerPage(); // Set the initial value based on current window size

        window.addEventListener('resize', updateItemsPerPage); // Update on window resize
        return () => window.removeEventListener('resize', updateItemsPerPage);
    }, [itemsPerPage]);

    // Use the pagination hook with type safety
    const { paginatedItems, currentPage, totalPages, handlePageChange } =
        usePagination<T>(items, itemsPerPage);

    return { paginatedItems, currentPage, totalPages, handlePageChange };
};

export default useResponsivePagination;
