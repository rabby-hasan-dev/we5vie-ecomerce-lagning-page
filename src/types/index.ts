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
    stock: number;
    description: string;
    specifications: [
        {
            material: string;
            length: string;
            washCare: string;
        }
    ];
    availableSizes: string[];
    availableColors: string[];
};

export type TDiscussion = {
    username: string;
    question: string;
    answer: string | null; // Nullable if there's no answer yet
    date: string; // ISO format date string
};


// type Specification = {
//     [key: string]: string; // Key-value pairs for specifications
// };
type Specification = {
    material?: string;
    length?: string;
    washCare?: string;
};

export type TSProduct = {
    name: string;
    price: number;
    category: string;
    stock: number;
    brand: string;
    description: string;
    specifications: Specification[]; // Array of specification objects
};