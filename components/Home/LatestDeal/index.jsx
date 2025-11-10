import SectionHeader from "@/components/Layout/SectionHeader";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/getProducts";

export default async function LatestDeal() {
  const products = await getProducts({ filter: "topSell" });
  return (
    <section className="space-y-4 my-8">
      {/* //Topbar  */}
      <SectionHeader title="Latest Deal" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 content-center ">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
