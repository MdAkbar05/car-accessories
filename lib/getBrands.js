export async function getBrands() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/products/brands`);

  if (!res.ok) throw new Error("Failed to fetch brands");
  return res.json();
}
