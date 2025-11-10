"use client";

import { addWishlist } from "@/lib/wishlistAction";
import useCartStore from "@/store/cartStore";
import toast from "react-hot-toast";
import { FaRegHeart } from "react-icons/fa";

export default function AddProduct({ product }) {
  const { addToCart, cartItems } = useCartStore((state) => state);
  const item = cartItems.find((item) => item.id === product.id);
  return (
    <div className="flex justify-center items-center gap-4 mt-4">
      <button
        className="text-white px-3 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-500 cursor-pointer"
        onClick={() => {
          addToCart(product);
          toast.success("Add product in your cart.");
        }}
      >
        Add to cart {item ? `(${item.quantity})` : ""}
      </button>
      <AddWishlist
        className="text-white px-3 py-2 bg-slate-600 rounded-lg hover:bg-slate-700 transition-all duration-500 cursor-pointer"
        product={product}
      >
        Add to wishlist
      </AddWishlist>
    </div>
  );
}

export function AddWishlist({ product, className }) {
  return (
    <div
      onClick={() => {
        addWishlist(product);
      }}
      className={className}
    >
      <FaRegHeart
        className="text-gray-400 cursor-pointer hover:text-black"
        size={20}
      />
    </div>
  );
}
