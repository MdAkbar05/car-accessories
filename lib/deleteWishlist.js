"use client";
export async function deleteWishlist(userId, productId) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/wishlist`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, productId }),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to delete product from wishlist");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return error;
  }
}
