import SectionHeader from "../Layout/SectionHeader";
import ProductCard from "../ProductCard";

export default function RelatedProducts() {
  return (
    <section className="space-y-4 mt-8 mb-20">
      {/* //Topbar  */}
      <SectionHeader title="Related Products" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 content-center ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}
