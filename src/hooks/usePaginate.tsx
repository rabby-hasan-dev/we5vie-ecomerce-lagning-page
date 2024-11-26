import { useState } from "react";

export const usePagination = <T,>(items: T[], itemsPerPage: number) => {
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate paginated items
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = items.slice(startIndex, endIndex);

    // Total pages
    const totalPages = Math.ceil(items.length / itemsPerPage);

    // Handle page change
    const handlePageChange = (direction: "prev" | "next") => {
        if (direction === "prev" && currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        } else if (direction === "next" && currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    return { paginatedItems, currentPage, totalPages, handlePageChange };
};
