import { TProduct } from "@/types";
import { useState, useEffect } from "react";



type UseProductsReturn = {
    products: TProduct[];
    isLoading: boolean;
    error: string | null;
};

export const useProducts = (): UseProductsReturn => {
    const [products, setProducts] = useState<TProduct[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await fetch("/product.json");

                if (!response.ok) {
                    throw new Error(`Failed to fetch products: ${response.statusText}`);
                }

                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : "An unknown error occurred");
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { products, isLoading, error };
};
