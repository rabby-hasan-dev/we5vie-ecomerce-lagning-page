import { ReactNode } from "react";


const Container = ({ children }: { children: ReactNode }) => {
    return (
        <div className="container mx-auto max-w-7xl px-6 ">
            {children}
        </div>
    );
};

export default Container;