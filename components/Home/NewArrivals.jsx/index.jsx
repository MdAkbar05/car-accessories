import PortraitAdsBanner from "@/components/Home/LatestDeal/PortraitAdsBanner";
import DiscountBanner from "@/components/Home/NewArrivals.jsx/DiscountBanner";
import SectionHeader from "@/components/Layout/SectionHeader";
import ProductCard from "@/components/ProductCard";
import SpecialCollectionCard from "@/components/SpecialCollectionCard";

export default function NewArrivals() {
  return (
    <section className="flex justify-start gap-4 my-12 flex-wrap">
      <div className="flex-3/12 space-y-8 ">
        <PortraitAdsBanner />

        <DiscountBanner />
      </div>
      <div className="space-y-8 flex-8/12 ">
        <div className="grid grid-cols-1  lg:grid-cols-2 object-center gap-8">
          <SpecialCollectionCard
            bannerUrl={"/assets/dummy/specialCollectionBG.png"}
          />
          <SpecialCollectionCard
            bannerUrl={"/assets/dummy/specialCollectionBG.png"}
          />
        </div>
        <div className="my-8 space-y-4">
          <SectionHeader title="New Arrivals" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 content-center ">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
        <SpecialCollectionCard
          bannerUrl={"/assets/dummy/specialCollectionBG2.png"}
        />
      </div>
    </section>
  );
}
