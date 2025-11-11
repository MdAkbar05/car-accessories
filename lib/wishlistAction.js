import baseUrl from "@/lib/baseUrl";

export async function fetchWishlist(userId) {
  const res = await fetch(`${baseUrl}/api/wishlist?userId=${userId}`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch wishlist in wishlistAction");
  }
  const data = await res.json();
  return data[0]?.products || [];
}
export async function addWishlist(product) {
  const res = await fetch(`${baseUrl}/api/wishlist`, {
    method: "POST",
    body: JSON.stringify(product),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
  return data;
}

export async function removeWishlist(productId, userId) {
  try {
    const response = await fetch(`${baseUrl}/api/wishlist`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, productId }),
    });
    if (!response.ok) {
      throw new Error("Failed to delete product from wishlist");
    } else {
      window.location.reload();
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return error;
  }
}
