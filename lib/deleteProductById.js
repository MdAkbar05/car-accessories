import baseUrl from "@/lib/baseUrl";

export async function deleteProductById(productId) {
  try {
    const res = await fetch(`${baseUrl}/api/products/${productId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error(
        `${res.statusText}, Status Code: (${res.status}) in the API:  ${res.url}`
      );
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
