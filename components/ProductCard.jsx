import { AddWishlist } from "@/components/addProduct";
import Image from "next/image";
import Link from "next/link";
import { PiShuffleAngularBold } from "react-icons/pi";
export default function ProductCard({ product }) {
  return (
    <div className="max-w-md  border flex items-center justify-between flex-col p-4 gap-2">
      <div className="relative h-72 w-full">
        <Image
          src={product?.images[0]}
          alt={product?.name}
          fill
          className="object-contain "
        />
        <div className="absolute top-6 right-2 border rounded-full  p-2">
          <AddWishlist product={product} />
        </div>
        <div className="absolute top-20 right-2 border rounded-full  p-2">
          <PiShuffleAngularBold className="text-gray-400" size={20} />
        </div>
      </div>
      <div className="space-y-2 w-full">
        <h2 className="text-xl ">{product?.name}</h2>
        <div className="flex justify-between items-center">
          <Link
            href={`/products?category=${product?.category?.id}`}
            className="text-primary text-lg"
          >
            {product?.category?.name}
          </Link>
          <Link
            href={`/products?brand=${product?.brand.toLowerCase()}`}
            className="text-gray-600 text-lg"
          >
            {" "}
            {product?.brand} Brand
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 w-full">
        <div className="flexCenter gap-2">
          <b className="text-2xl text-primary font-bold">
            ${product?.price * 0.8}
          </b>
          <p className="line-through text-red-500">${product?.price}</p>
        </div>
        <p className="text-green-500">{product?.stock} in Stock</p>
      </div>
      <Link
        href={`/products/${product?.id}`}
        className="w-full rounded-lg border py-2 text-lg text-primary hover:bg-primary hover:text-white transition-all duration-300  cursor-pointer border-primary text-center"
      >
        View Details
      </Link>
    </div>
  );
}
