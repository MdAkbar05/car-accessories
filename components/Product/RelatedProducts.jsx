import { getProducts } from "@/lib/getProducts";
import SectionHeader from "../Layout/SectionHeader";
import ProductCard from "../ProductCard";

export default async function RelatedProducts({ category }) {
  const products = await getProducts({ category: category });
  return (
    <section className="space-y-4 mt-8 mb-20">
      {/* //Topbar  */}
      <SectionHeader title="Related Products" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 content-center ">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
