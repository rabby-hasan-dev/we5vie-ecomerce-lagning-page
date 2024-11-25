
import Image from "next/image";
import ButtonComponet from "../Button/ButtonComponet";

type SlideContentProps = {
    imageSrc: string,
    title: string,
    description: string,
    buttonText: string
}


const SlideContent = ({ imageSrc, title, description, buttonText }: SlideContentProps) => (
    <div className="lg:flex items-center gap-10">
        <div className="bg-[#EEECFB]">
            <Image
                src={imageSrc}
                width={427}
                height={459}
                alt="Discount-man"
                className="object-cover"
            />
        </div>
        <div>
            <p className="text-[#6F42C1] text-2xl mb-2">{description}</p>
            <h2 className="font-semibold text-5xl">
                <span className="text-[#6F42C1]">30% </span>
                {title}
            </h2>
            <ButtonComponet>{buttonText} </ButtonComponet>
        </div>
    </div>

);

export default SlideContent;
