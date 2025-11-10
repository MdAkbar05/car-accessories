"use client";

import { removeWishlist } from "@/lib/wishlistAction";
import toast from "react-hot-toast";

export default function WishlistDeleteButton({ userId, productId }) {
  return (
    <button
      onClick={() => {
        toast.promise(removeWishlist(productId, userId), {
          loading: "Removing from wishlist...",
          success: "Product removed from wishlist!",
          error: "Failed to remove product from wishlist",
        });
      }}
      className="inline-block bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm transition"
    >
      Delete
    </button>
  );
}
