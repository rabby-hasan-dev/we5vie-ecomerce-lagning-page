import Rating from '@/Components/UI/Rating';
import Image from 'next/image';


const ReviewCard = () => {
    return (
        <article className="p-4 space-y-[15px] ">
            {/* Reviewer Info */}
            <header className="flex  items-center gap-4">
                <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s"
                    alt="Profile Image"
                    height={40}
                    width={40}
                    className="rounded-full object-cover"
                />
                <div className=' flex-col items-start '>
                    <div className="flex items-center space-x-2">
                        <h2 className="text-lg font-semibold">Cameron Williamson</h2>
                        <time dateTime="2024-11-22" className="text-sm text-gray-500">
                            3 days ago
                        </time>
                    </div>
                    <Rating />
                </div>
            </header>

            {/* Review Content */}
            <section className="mt-4">
                <p className="text-black font-bold">Very Nice!! </p>
            </section>

            {/* Likes Section */}
            <footer className="flex items-center gap-2 mt-4 ">
                <button
                    type="button"
                    aria-label="Like this review"
                    className="flex items-center gap-1"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M16 11.5V12.5C16 13.605 15.1046 14.5 14 14.5H13M14 14.5C14.5523 14.5 15 14.9481 15 15.5C15 16.605 14.1046 17.5 13 17.5H12M13 17.5C13.5235 17.5 13.9217 17.9705 13.8356 18.4868L13.7785 18.8292C13.6178 19.7936 12.7834 20.5 11.8057 20.5H10.3332C8.15984 20.5 7.07313 20.5 6.20799 20.1689C5.70614 19.9769 5.06612 19.4703 4.60361 19.0652C4.20359 18.7148 3.69618 18.5 3.1644 18.5H2M14 11.5H20.5C21.3284 11.5 22 10.8286 22 10.0002C22 9.17178 21.3284 8.5 20.5 8.5H10.5376L12.163 6.8797C12.8761 6.16877 12.8111 4.99772 12.0235 4.36965C11.4209 3.88907 10.5685 3.8758 9.95109 4.33738L5.35288 7.93707C4.47312 8.62579 3.11711 9 1.99983 9" />
                    </svg>
                    <span className="text-sm">10</span>
                </button>
            </footer>
        </article>
    );
};

export default ReviewCard;
