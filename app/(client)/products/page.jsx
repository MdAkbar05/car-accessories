import ProductList from "@/app/(client)/products/ProductList";
import { getProducts } from "@/lib/getProducts";

export default async function ProductsPage(params) {
  const { searchParams } = await params;
  const products = await getProducts(searchParams);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">🛍 All Products</h1>
      <ProductList products={products} />
    </div>
  );
}
