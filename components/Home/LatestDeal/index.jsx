import SectionHeader from "@/components/Layout/SectionHeader";
import ProductCard from "@/components/ProductCard";

export default function LatestDeal() {
  return (
    <section className="space-y-4 my-8">
      {/* //Topbar  */}
      <SectionHeader title="Latest Deal" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 content-center ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}
