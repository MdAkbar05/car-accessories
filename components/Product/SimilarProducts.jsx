import { getProducts } from "@/lib/getProducts";
import SectionHeader from "../Layout/SectionHeader";
import ProductCard from "../ProductCard";

export default async function SimilarProducts({ productName }) {
  const products = await getProducts({ query: productName.slice(0, 5) });
  return (
    <section className="space-y-4 my-8">
      {/* //Topbar  */}
      <SectionHeader title="Similar Products" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 content-center ">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
