
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
            <div className="relative w-full  h-[357px] lg:h-[566px] md:h-[700px]  "  >
                <Image
                    alt="Mountains"
                    src={imageSrc}
                    sizes="100vw"
                    fill

                />
            </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 ">
            <h2 className="font-semibold text-3xl uppercase lg:text-5xl mb-4">
                {title}
            </h2>
            <ButtonComponet>{buttonText}</ButtonComponet>
        </div>
    </div>


);

export default SlideContent;
