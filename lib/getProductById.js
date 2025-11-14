import baseUrl from "@/lib/baseUrl";

export async function getProductById(id) {
  const res = await fetch(`${baseUrl}/api/products/${id}`, {
    method: "PATCH",
  });
  if (!res.ok) {
    throw new Error(
      `${res.statusText}, Status Code: (${res.status}) in the API:  ${res.url}`
    );
  }
  const product = await res.json();
  return product;
}
