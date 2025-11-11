import baseUrl from "@/lib/baseUrl";

export async function getProductById(id) {
  const res = await fetch(`${baseUrl}/api/products/${id}`, {
    method: "PATCH",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch product data");
  }
  const product = await res.json();
  return product;
}
