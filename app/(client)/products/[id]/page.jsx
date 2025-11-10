import Product from "@/components/Product/Product";
import RelatedProducts from "@/components/Product/RelatedProducts";
import SimilarProducts from "@/components/Product/SimilarProducts";
import TabContent from "@/components/Product/TabContent";
import { getProductById } from "@/lib/getProductById";
import Link from "next/link";

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) return <p className="p-10">Product not found</p>;
  return (
    <>
      {/* Breadcrumb  */}
      <section className="space-y-4 mt-8 mb-20">
        <div className="flex gap-4 text-lg">
          <Link className="text-gray-400" href={"/"}>
            Home
          </Link>{" "}
          \
          <Link className="text-gray-400" href={"/products"}>
            Products
          </Link>
          \<span className="text-primary">{product?.name}</span>
        </div>
      </section>
      <Product product={product} />
      {/* product tab content  */}
      <section className="space-y-4 mt-8 mb-20">
        <TabContent product={product} />
      </section>
      {/* Related Product Section */}
      <RelatedProducts category={product?.categoryId} />
      {/* Similar Product Section */}
      <SimilarProducts productName={product?.name} />
    </>
  );
}
