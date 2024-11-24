
import CollectionSlide from "./_components/module/Collection/CollectionSlide";
import Discount from "./_components/module/Discount/Discount";


export default function Home() {
  return (
    <div className="space-y-[75px] " >
      <Discount />
      <CollectionSlide />
      <Discount />


    </div>
  );
}
