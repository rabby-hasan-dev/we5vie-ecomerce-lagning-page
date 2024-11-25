
import Image from "next/image";
import ButtonComponet from "../Button/ButtonComponet";

type SlideContentProps = {
    imageSrc: string,
    title: string,
    description: string,
    buttonText: string
}


const SlideContent = ({ imageSrc, title, buttonText }: SlideContentProps) => (

    <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 p-4 lg:p-8">
        {/* Image Section */}
        <div className=" relative w-full lg:w-1/2">
            {/* Background */}
            <div className="absolute inset-x-0 bottom-0 h-[80%] bg-[#EEECFB] z-0" />
            {/* Image placed above background */}
            <div className="relative z-10 w-[328px] h-[358px] lg:w-[468px] lg:h-[566px] overflow-hidden">
                <Image
                    src={imageSrc}
                    alt="Slider-content"
                    layout="fixed"  // This ensures fixed dimensions
                    width={468}     // Fixed width for all images
                    height={566}    // Fixed height for all images
                    objectFit="cover"  // Maintain aspect ratio while filling the container
                    priority
                />
            </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 ">
            <h2 className="font-semibold text-3xl lg:text-5xl mb-4">
                {title}
            </h2>
            <ButtonComponet>{buttonText}</ButtonComponet>
        </div>
    </div>


);

export default SlideContent;
