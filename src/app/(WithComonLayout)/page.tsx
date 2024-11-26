
import CollectionSlide from "./_components/module/Collection/CollectionSlide";
import Discount from "./_components/module/Discount/Discount";
import HeroSection from "./_components/module/HeroSection/HeroSection";

import BigdealSection from "./_components/module/BigdealSection/BigdealSection";
import FeaturedProduct from "./_components/module/FeaturedProject/FeaturedProduct";



export default function Home() {
  return (
    <div className="bg-[#FFFFFF] " >

      <HeroSection />
      <FeaturedProduct />
      <Discount />
      <CollectionSlide />
      <BigdealSection />


    </div>
  );
}
