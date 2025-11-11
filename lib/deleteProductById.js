import baseUrl from "@/lib/baseUrl";

export async function deleteProductById(productId) {
  try {
    const response = await fetch(`${baseUrl}/api/products/${productId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to delete product from wishlist");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
