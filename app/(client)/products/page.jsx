import ProductList from "@/app/(client)/products/ProductList";
import Breadcrumbs from "@/components/Home/Hero/Breadcrumbs";
import ProductFilters from "@/components/Products/ProductFilters";
import SortProducts from "@/components/Products/SortProducts";
import { getProducts } from "@/lib/getProducts";

export async function generateMetadata({ params }) {
  const { searchParams } = await params;
  const products = await getProducts(searchParams);

  return {
    title: `Products | ${products.length} results`,
    description: `Products | ${products.length} results`,
    openGraph: {
      images: `${process.env.NEXT_PUBLIC_BASE_URL}/api/og`,
      width: 1200,
      height: 600,
    },
  };
}

export default async function ProductsPage(params) {
  const { searchParams } = await params;
  const products = await getProducts(searchParams);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs breadcrumbs={["", "Products"]} />
      <div className="flex md:justify-between items-center my-4 sm:flex-col md:flex-row gap-2 sm:justify-start">
        <div className="flexCenter flex-wrap gap-6">
          <h1 className="md:text-3xl text-xl font-bold  text-gray-800 whitespace-nowrap">
            🛍 Products
          </h1>
          {/* add filters by brand category model and engine   */}
          <ProductFilters />
        </div>
        <div className="flexCenter gap-2">
          {/* add sort by  asc, desc, price asc, price desc*/}
          {/* add sort by topSell, mostViewed, newArrival */}
          <SortProducts />
        </div>
      </div>
      <ProductList products={products} />
    </div>
  );
}
