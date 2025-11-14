"use client";

import { addWishlist } from "@/lib/wishlistAction";
import useCartStore from "@/store/cartStore";
import toast from "react-hot-toast";
import { FaCartArrowDown, FaRegHeart } from "react-icons/fa";

export default function AddProduct({ product }) {
  const { addToCart, cartItems } = useCartStore((state) => state);
  const item = cartItems.find((item) => item.id === product.id);
  return (
    <div className="border w-full mt-4">
      <button
        className="md:block hidden whitespace-nowrap text-white px-3 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-500 cursor-pointer w-full"
        onClick={() => {
          addToCart(product);
          toast.success("Add product in your cart.");
        }}
      >
        Add to cart {item ? `(${item.quantity})` : ""}
      </button>
      <button
        className="sm:flex md:hidden text-white px-3 py-2 whitespace-nowrap bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-500 cursor-pointer flexCenter w-full"
        onClick={() => {
          addToCart(product);
          toast.success("Add product in your cart.");
        }}
      >
        <FaCartArrowDown /> {item ? `(${item.quantity})` : ""}
      </button>
    </div>
  );
}

export function AddWishlist({ product, className }) {
  return (
    <div
      onClick={() => {
        toast.promise(addWishlist(product), {
          loading: "Adding to wishlist...",
          success: "Product added to wishlist!",
          error: "already added product to wishlist",
        });
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
