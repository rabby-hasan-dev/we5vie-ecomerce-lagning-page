
import Container from '@/Components/UI/Container';
import ButtonComponet from '@/Components/Button/ButtonComponet';
import { ExchangeIcon, PaymentIcon, TruckDeliveryIcon } from '@/assets/icons';



const HeroSection = () => {
    return (
        <section className="mb-[46px]">
            {/* Hero Section */}
            <header className="relative bg-[url('/hero.png')] bg-no-repeat bg-cover bg-left-top flex justify-center items-center h-[350px] lg:h-[600px]">
                <div className="absolute inset-0 bg-black/30 z-10" /> {/* Semi-transparent overlay */}
                <Container>
                    <div className="relative z-20 text-white text-center px-4 py-[90px] lg:py-0 lg:p-5 space-y-5">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                            Elevate Your Everyday Style
                        </h1>
                        <p className="text-md md:text-lg mb-8">
                            Discover the Latest Trends in Sustainable Fashion
                        </p>
                        <div className="flex justify-center items-center">
                            <ButtonComponet>Shop Now</ButtonComponet>
                        </div>
                    </div>
                </Container>
            </header>

            {/* Feature Section */}
            <section className="relative w-full bg-[url('/option.png')] bg-no-repeat bg-cover">
                {/* Overlay for better text visibility */}
                <div className="absolute inset-0 bg-[#6441C2E5] z-10 shadow-[#9F9F9F1A]" />

                <div className="relative z-20 max-w-screen-xl mx-auto flex flex-col md:flex-row justify-start lg:justify-between items-center gap-8 py-6 lg:px-4 text-white">
                    {/* Free Shipping Feature */}
                    <article className="flex items-center gap-4">
                        <TruckDeliveryIcon color="#fff" />
                        <div className="space-y-1">
                            <h2 className="uppercase font-semibold text-[20px] ">Free Shipping</h2>
                            <p className="text-[13px] uppercase">Buy BDT 3000+ & Get Free Delivery</p>
                        </div>
                    </article>

                    {/* 7 Days Exchange Feature */}
                    <article className="flex items-center gap-4">
                        <ExchangeIcon color="#fff" />
                        <div className="space-y-1">
                            <h2 className="uppercase font-semibold text-[20px] ">7 Days Exchange</h2>
                            <p className="text-[13px] uppercase" >Exchange within 7 days with similar products</p>
                        </div>
                    </article>

                    {/* 100% Secure Payment Feature */}
                    <article className="flex items-center gap-4">
                        <PaymentIcon color="#fff" />
                        <div className="space-y-1">
                            <h2 className="uppercase font-semibold text-[20px] ">100% Payment Secure</h2>
                            <p className="text-[13px] uppercase">Cash on delivery and secured online payment</p>
                        </div>
                    </article>
                </div>
            </section>
        </section>


    );
};

export default HeroSection;