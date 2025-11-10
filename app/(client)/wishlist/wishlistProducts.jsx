"use client";

import WishlistDeleteButton from "@/components/wishlistDeleteButton";
import Image from "next/image";
import Link from "next/link";

export default function WishlistProducts({ products, userId }) {
  return (
    <>
      {products.length === 0 ? (
        <div>
          <p className="text-gray-600 text-center">Your wishlist is empty.</p>
          <Link
            href={"/products"}
            className="flexCenter gap-2 font-bold text-primary text-xl mt-4"
          >
            View All Products
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                  Price
                </th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product) => (
                <tr
                  key={product.id}
                  className="border-b hover:bg-gray-50 transition "
                >
                  <td className="flex items-center gap-4 px-6 py-4">
                    <div className=" flex-shrink-0 ">
                      <Image
                        src={product.images?.[0]}
                        alt={product.name}
                        width={64}
                        height={64}
                        className="object-cover rounded-md "
                      />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">
                        {product.name}
                      </p>
                      <p className="text-sm text-gray-500 line-clamp-1">
                        {product.description}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700 font-semibold">
                    ${product.price}
                  </td>
                  <td className="px-6 py-4 text-center space-x-3 flex items-center ">
                    <Link
                      href={`/products/${product.id}`}
                      className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm transition"
                    >
                      Visit
                    </Link>
                    <WishlistDeleteButton
                      userId={userId}
                      productId={product?.id}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
