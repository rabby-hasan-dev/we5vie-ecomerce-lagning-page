import { ArrowUpRight03Icon } from "@/assets/icons";
import { ReactNode } from "react";


const ButtonComponet = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex justify-start items-center">
            <button className="bg-purple-500  hover:bg-purple-700 hover:text-white p-2 rounded-full " >{children}</button>
            <button className="bg-purple-500  hover:bg-purple-700 hover:text-white p-2 rounded-full " >< ArrowUpRight03Icon color="#FFFFFF" />
            </button>
        </div>
    );
};

export default ButtonComponet;