import React from "react";

type SpinnerProps = {
    size?: number; // Size of the spinner
    color?: string; // Color of the spinner
    className?: string; // Additional custom classes
};

const Spinner: React.FC<SpinnerProps> = ({ size = 40, color = "currentColor", className = "" }) => {
    return (
        <div className={`text-center ${className}`}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`animate-spin`}
                viewBox="0 0 24 24"
                width={size}
                height={size}
                fill={color}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.001 5.04a2.32 2.32 0 1 0 0-4.64 2.32 2.32 0 0 0 0 4.64zm0 18.56a2.32 2.32 0 1 0 0-4.64 2.32 2.32 0 0 0 0 4.64zm9.197-14.23a2.32 2.32 0 1 1-2.32-4.02 2.32 2.32 0 0 1 2.32 4.02zM1.956 17.8a2.32 2.32 0 1 0 4.018-2.32 2.32 2.32 0 0 0-4.018 2.32zm16.922.85a2.32 2.32 0 1 1 2.32-4.02 2.32 2.32 0 0 1-2.32 4.02zM1.956 6.2a2.32 2.32 0 1 0 4.018 2.32A2.32 2.32 0 0 0 1.956 6.2z"
                />
            </svg>
        </div>
    );
};

export default Spinner;
