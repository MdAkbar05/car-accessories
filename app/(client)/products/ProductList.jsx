import AddProduct, { AddWishlist } from "@/components/addProduct";
import Link from "next/link";

export default function ProductList({ products }) {
  if (!products?.length)
    return <p className="text-gray-500 text-center">No products found.</p>;

  return (
    <div className="grid grid-cols-1 md::grid-cols-2  lg:grid-cols-4 sm:gap-2 md:gap-4">
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
              className="md:w-56 md:h-40 sm:w-44 sm:h-32 object-contain rounded-md"
            />
          </Link>
          <div className="mt-4 text-center">
            <h2 className="text-lg font-semibold text-gray-800 truncate">
              {product.name}
            </h2>
            <span className="text-gray-500 text-sm capitalize">
              {product.brand} • {product.category?.name || "Uncategorized"}
            </span>
            <p className="text-xs text-gray-400 mt-1">
              ⭐ {product.reviews?.length || 0} Reviews
            </p>
            <div className="flex justify-between items-center">
              <p className="text-blue-600 font-semibold mt-1 text-xl">
                ${product.price.toLocaleString()}
              </p>
              <AddWishlist
                className="text-white px-3 py-2 bg-transparent rounded-lg hover:bg-slate-100 transition-all duration-500 cursor-pointer"
                product={product}
              >
                Add to wishlist
              </AddWishlist>
            </div>
            <AddProduct product={product} />
          </div>
        </div>
      ))}
    </div>
  );
}
