
type THeadingProps = {
    heading: string;
    subHeading: string;
}

const HeadingComponent = ({ heading, subHeading }: THeadingProps) => {
    return (
        <div className="space-y-1">
            <p className="text-lg text-purple-600 uppercase ">{subHeading} </p>
            <h1 className="text-4xl font-bold text-black">{heading} </h1>
        </div>
    );
};

export default HeadingComponent;