
type THeadingProps = {
    heading: string;
    subHeading: string;
}

const HeadingComponent = ({ heading, subHeading }: THeadingProps) => {
    return (
        <div className="space-y-1">
            <p className="lg:text-lg text-purple-600 uppercase ">{subHeading} </p>
            <h1 className="lg:text-4xl text-[28px] font-bold text-black">{heading} </h1>
        </div>
    );
};

export default HeadingComponent;