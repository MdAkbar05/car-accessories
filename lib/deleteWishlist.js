"use client";

import baseUrl from "@/lib/baseUrl";

export async function deleteWishlist(userId, productId) {
  try {
    const res = await fetch(`${baseUrl}/api/wishlist`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, productId }),
    });
    if (!res.ok) {
      throw new Error(
        `${res.statusText}, Status Code: (${res.status}) in the API:  ${res.url}`
      );
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    return error;
  }
}
