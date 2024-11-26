import Container from "@/Components/UI/Container";
import Image from "next/image";
import DManImage from '@/assets/Add/two-man.png'
import ButtonComponet from "@/Components/Button/ButtonComponet";



const Discount = () => {
    return (
        <section className="mb-[91px] ">
            <Container>

                <div className="lg:flex justify-around items-center bg-purple-500/10">
                    <div className="lg:flex flex-col justify-center items-center lg:justify-start lg:items-start text-center lg:text-start  px-4 sm:px-6 md:px-8">
                        <div>
                            <p className="text-[#6F42C1] text-2xl  mb-2 font-[Pacifico] ">Big Deal</p>
                            <h2 className="font-semibold text-[28px] lg:text-5xl mb-6">
                                <span className="text-[#6F42C1]  ">30% </span>
                                Off for New Customers
                            </h2>
                        </div>
                        <div className="flex justify-center">
                            <ButtonComponet>Shop Now</ButtonComponet>
                        </div>
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
        </section>
    );
};

export default Discount;