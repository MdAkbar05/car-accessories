export async function getBrands() {
  const baseUrl = "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/products/brands`);

  if (!res.ok) throw new Error("Failed to fetch brands");
  return res.json();
}
