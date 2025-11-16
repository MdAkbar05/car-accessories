import Breadcrumbs from "@/components/Home/Hero/Breadcrumbs";
import Product from "@/components/Product/Product";
import RelatedProducts from "@/components/Product/RelatedProducts";
import SimilarProducts from "@/components/Product/SimilarProducts";
import TabContent from "@/components/Product/TabContent";
import { getProductById } from "@/lib/getProductById";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getProductById(id);
  return {
    title: product?.name.slice(0, 100),
    description: product?.description,
    openGraph: {
      title: product?.name,
      description: product?.description,
      images: [product?.images?.[0]],
    },
  };
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) return <p className="p-10">Product not found</p>;
  return (
    <>
      {/* Breadcrumb  */}
      <section className="space-y-4 mt-4 ">
        <Breadcrumbs breadcrumbs={["", "Products", product?.name]} />
      </section>
      {product && <Product key={product.id} product={product} />}
      {/* product tab content  */}
      <section className="space-y-4 mt-8 mb-20">
        {product && <TabContent key={product.id} product={product} />}
      </section>
      {/* Related Product Section */}
      {product?.categoryId && (
        <RelatedProducts id={1} category={product.categoryId} />
      )}
      {/* Similar Product Section */}
      {product?.name && <SimilarProducts key={2} productName={product.name} />}
    </>
  );
}
