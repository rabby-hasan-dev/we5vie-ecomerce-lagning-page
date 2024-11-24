import Container from "@/Components/UI/Container";
import Image from "next/image";
import DManImage from '@/assets/Add/two-man.png'
import ButtonComponet from "@/Components/UI/ButtonComponet";



const Discount = () => {
    return (
        <Container>

            <div className="lg:flex justify-around items-center bg-purple-500/10">
                <div>
                    <p className="text-[#6F42C1] text-2xl mb-2 ">Big Deal</p>
                    <h2 className="font-semibold text-5xl">
                        <span className="text-[#6F42C1] ">30% </span>
                        Off for New Customers
                    </h2>
                    <ButtonComponet>Shop Now</ButtonComponet>
                </div>

                <div>
                    <Image
                        src={DManImage}
                        width={427}
                        height={459}
                        alt="Discont-man"
                    />
                </div>
            </div>

        </Container>
    );
};

export default Discount;