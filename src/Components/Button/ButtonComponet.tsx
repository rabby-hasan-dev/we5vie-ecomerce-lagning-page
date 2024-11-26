import { ArrowUpRight03Icon } from "@/assets/icons";
import { ReactNode } from "react";


const ButtonComponet = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex items-center">
            <button className="bg-[#8F71E1]  hover:bg-[#6F42C1] hover:text-[#F4F8FF] p-2 rounded-full " >{children}</button>
            <button className="bg-[#8F71E1]  hover:bg-[#6F42C1] hover:text-[#F4F8FF] p-2 rounded-full " >< ArrowUpRight03Icon color="#FFFFFF" />
            </button>
        </div>
    );
};

export default ButtonComponet;