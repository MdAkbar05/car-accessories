export async function getModels() {
  const baseUrl = "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/products/models`);

  if (!res.ok) throw new Error("Failed to fetch models");
  return res.json();
}
