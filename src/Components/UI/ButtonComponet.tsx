import { ArrowUpRight03Icon } from "@/assets/icons";
import { ReactNode } from "react";


const ButtonComponet = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex justify-start items-center mt-6">
            <button className="bg-[#8F71E1] p-2 rounded-full " >{children}</button>
            <button className="bg-[#8F71E1] p-2 rounded-full " >< ArrowUpRight03Icon />
            </button>
        </div>
    );
};

export default ButtonComponet;