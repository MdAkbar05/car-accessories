import Product from "@/components/Product/Product";
import RelatedProducts from "@/components/Product/RelatedProducts";
import SimilarProducts from "@/components/Product/SimilarProducts";
import TabContent from "@/components/Product/TabContent";
import Link from "next/link";

export default function ProductPage() {
  return (
    <>
      {/* Breadcrumb  */}
      <section className="space-y-4 mt-8 mb-20">
        <div className="flex gap-4 text-lg">
          <Link
            className="text-gray-400"
            href={"/products?category=Tools%and%Equipment"}
          >
            Tools and Equipment /
          </Link>{" "}
          <Link
            className="text-gray-400"
            href={"/products?category=Gaskets%and%Seals"}
          >
            Gaskets and Seals /
          </Link>
          <Link href={"/products?category=Tires%and%Wheels"}>
            Tires & Wheels
          </Link>
        </div>
      </section>
      <Product />
      {/* product tab content  */}
      <section className="space-y-4 mt-8 mb-20">
        <TabContent />
      </section>
      {/* Related Product Section */}
      <RelatedProducts />
      {/* Similar Product Section */}
      <SimilarProducts />
    </>
  );
}
