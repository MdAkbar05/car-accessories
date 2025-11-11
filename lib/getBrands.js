import baseUrl from "@/lib/baseUrl";

export async function getBrands() {
  const res = await fetch(`${baseUrl}/api/products/brands`);

  if (!res.ok) throw new Error("Failed to fetch brands");
  return res.json();
}
