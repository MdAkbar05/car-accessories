import AddProduct from "@/components/addProduct";
import Link from "next/link";

export default function ProductList({ products }) {
  if (!products?.length)
    return <p className="text-gray-500 text-center">No products found.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-xl p-4 shadow-sm hover:shadow-md transition bg-white"
        >
          <Link
            href={`/products/${product.id}`}
            className="flex justify-center"
          >
            <img
              src={product.images?.[0] || "/placeholder.png"}
              alt={product.name}
              className="w-56 h-40 object-contain rounded-md"
            />
          </Link>
          <div className="mt-4 text-center">
            <h2 className="text-lg font-semibold text-gray-800 truncate">
              {product.name}
            </h2>
            <span className="text-gray-500 text-sm capitalize">
              {product.brand} • {product.category?.name || "Uncategorized"}
            </span>
            <span className="text-xs text-gray-400 mt-1">
              ⭐ {product.reviews?.length || 0} Reviews
            </span>
            <p className="text-blue-600 font-semibold mt-1">
              ${product.price.toLocaleString()}
            </p>
            <AddProduct product={product} />
          </div>
        </div>
      ))}
    </div>
  );
}
