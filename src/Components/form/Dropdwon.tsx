
import { ArrowDownIcon } from "@/assets/icons";
import Link from "next/link";
import { useState } from "react";

type TDropdwonProps = {
    buttonLabel: string,
    options: Array<string>

}


const Dropdown = ({ buttonLabel = "Select Option", options = [] }: TDropdwonProps) => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle dropdown visibility
    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="relative inline-block text-left">
            {/* Dropdown Button */}
            <button
                onClick={toggleDropdown}
                className="  font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-600 border-2 hover:text-white border-purple-600 focus:outline-none"
            >
                <span className="flex items-center font-semibold gap-2 ">{buttonLabel}
                    <ArrowDownIcon /></span>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute left-0 mt-2 w-48   border-2 hover:text-white border-purple-600 rounded-md shadow-lg">
                    <ul className="py-1">
                        {options.map((option, index) => (
                            <li key={index}>
                                <Link
                                    href="#"
                                    className="block px-4 py-2 bg-gray-200 text-black hover:text-white hover:bg-purple-600 "
                                >
                                    {option}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
