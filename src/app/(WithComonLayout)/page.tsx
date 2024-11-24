
import CollectionSlide from "./_components/module/Collection/CollectionSlide";
import Discount from "./_components/module/Discount/Discount";
import HeroSection from "./_components/module/HeroSection/HeroSection";


export default function Home() {
  return (
    <div className="space-y-[75px] " >
      <HeroSection />
      <Discount />
      <CollectionSlide />
      <Discount />


    </div>
  );
}
