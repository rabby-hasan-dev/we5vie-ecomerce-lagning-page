
import Container from '@/Components/UI/Container';
import ButtonComponet from '@/Components/Button/ButtonComponet';
import { ExchangeIcon, PaymentIcon, TruckDeliveryIcon } from '@/assets/icons';




const HeroSection = () => {
    return (
        <div className="relative bg-[url('/hero.png')] lg:bg-no-repeat lg:bg-cover flex justify-center items-center h-[600px] mb-5">
            <div className="absolute inset-0 bg-black/30 z-10" /> {/* Semi-transparent overlay */}

            <Container>
                {/* Hero Content */}
                <div className="relative z-20 text-white text-center px-4  lg:p-5 space-y-5">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                        Elevate Your Everyday Style
                    </h2>
                    <p className="text-md md:text-lg mb-8">
                        Discover the Latest Trends in Sustainable Fashion
                    </p>
                    <div className="flex justify-center items-center">
                        <ButtonComponet>Shop Now</ButtonComponet>
                    </div>
                </div>
            </Container>
            {/* Feature Section */}

            <div className="absolute bottom-0 left-0 w-full bg-[url('/option.png')] bg-no-repeat bg-cover rounded-t-lg">
                {/* Overlay for better text visibility */}
                <div className="absolute inset-0 bg-[#6441C2]/90 z-10" />

                {/* Content Section */}
                <div className="relative z-20 max-w-screen-xl mx-auto flex flex-col md:flex-row justify-start lg:justify-between items-center gap-8 py-6 lg:px-4 text-white">
                    {/* Free Shipping Feature */}
                    <div className="flex items-center gap-4">
                        <TruckDeliveryIcon color="#fff" />
                        <div className="space-y-1">
                            <h3 className="uppercase font-semibold text-lg">Free Shipping</h3>
                            <p className="text-sm">Buy BDT 3000+ & Get Free Delivery</p>
                        </div>
                    </div>

                    {/* 7 Days Exchange Feature */}
                    <div className="flex items-center gap-4">
                        <ExchangeIcon color="#fff" />
                        <div className="space-y-1">
                            <h3 className="uppercase font-semibold text-lg">7 Days Exchange</h3>
                            <p className="text-sm">Exchange within 7 days with similar products</p>
                        </div>
                    </div>

                    {/* 100% Secure Payment Feature */}
                    <div className="flex items-center gap-4">
                        <PaymentIcon color="#fff" />
                        <div className="space-y-1">
                            <h3 className="uppercase font-semibold text-lg">100% Payment Secure</h3>
                            <p className="text-sm">Cash on delivery and secured online payment</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>


    );
};

export default HeroSection;