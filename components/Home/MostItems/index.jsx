import FreeDelivery from "@/components/Home/MostItems/FreeDelivery";
import MiniProductCard from "@/components/Home/MostItems/MiniProductCard";
import SectionHeader from "@/components/Layout/SectionHeader";
import ProductCard from "@/components/ProductCard";

export default function MostItemsSection() {
  return (
    <section className="flex justify-start gap-4 my-12 flex-wrap">
      <div className="flex-3/12 space-y-14 mr-2">
        <MiniProductCard title="Most Viewed" />
        <MiniProductCard title="Most Purchased" />
      </div>
      <div className="flex-8/12 space-y-8">
        {/* Essentials Section  */}
        <div className=" space-y-4">
          <SectionHeader title="Most Essential" />
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 object-center gap-8">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>

        {/* Free Delivery Banner  */}
        <FreeDelivery />

        {/* Top Selling section  */}
        <div className=" space-y-4">
          <SectionHeader title="Top Selling" />
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 object-center gap-8">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </section>
  );
}
