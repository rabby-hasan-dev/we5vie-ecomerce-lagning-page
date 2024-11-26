
const Rating = ({ rating }: { rating: number }) => {
    const totalStars = 5;
    const IntegierRating = Math.floor(rating);


    return (
        <div className="flex justify-start space-x-1.5">
            {[...Array(totalStars)].map((_, index) => (
                <svg
                    key={index}
                    className={`w-4 ${index < IntegierRating ? "fill-[#facc15]" : "fill-[#CED5D8]"}`}
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
            ))}
        </div>
    );
};

export default Rating;





