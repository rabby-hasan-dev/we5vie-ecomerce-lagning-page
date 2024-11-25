export type TProduct = {
    id: number;
    name: string;
    brand: string;
    price: number;
    image: string;
    rating: number;
    reviews: number;
    discount: string;
    category: string;
    description: string;
    specifications: {
        material: string;
        length: string;
        washCare: string;
    };
    availableSizes: string[];
    availableColors: string[];
};

