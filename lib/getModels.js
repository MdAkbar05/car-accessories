export async function getModels() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/products/models`);

  if (!res.ok) throw new Error("Failed to fetch models");
  return res.json();
}
