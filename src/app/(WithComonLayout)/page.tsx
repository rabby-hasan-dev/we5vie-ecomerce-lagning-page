
import CollectionSlide from "./_components/module/Collection/CollectionSlide";
import Discount from "./_components/module/Discount/Discount";
import HeroSection from "./_components/module/HeroSection/HeroSection";
import FeaturedProject from "./_components/module/FeaturedProject/FeaturedProject";
import BigdealSection from "./_components/module/BigdealSection/BigdealSection";


export default function Home() {
  return (
    <div className="space-y-[75px] " >
      <HeroSection />
      <FeaturedProject />
      <Discount />
      <CollectionSlide />
      <BigdealSection />

    </div>
  );
}
