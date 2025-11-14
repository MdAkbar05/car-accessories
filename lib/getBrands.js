import baseUrl from "@/lib/baseUrl";

export async function getBrands() {
  const res = await fetch(`${baseUrl}/api/products/brands`);

  if (!res.ok) {
    throw new Error(
      `${res.statusText}, Status Code: (${res.status}) in the API:  ${res.url}`
    );
  }
  return res.json();
}
