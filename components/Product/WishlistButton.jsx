"use client";
import { addWishlist } from "@/lib/wishlistAction";
import toast from "react-hot-toast";
import { IoMdHeartEmpty } from "react-icons/io";

export default function WishlistButton({ product }) {
  return (
    <button
      className="flex items-center gap-2 cursor-pointer hover:bg-amber-400 p-1 rounded-lg"
      onClick={() =>
        toast.promise(addWishlist(product), {
          loading: "Adding to wishlist...",
          success: "Product added to wishlist!",
          error: "already added product to wishlist",
        })
      }
    >
      <IoMdHeartEmpty color="gray" size={24} />
      <span>Add to wishlist</span>
    </button>
  );
}
