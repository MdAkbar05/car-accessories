import baseUrl from "@/lib/baseUrl";

export async function getModels() {
  const res = await fetch(`${baseUrl}/api/products/models`);

  if (!res.ok) throw new Error("Failed to fetch models");
  return res.json();
}
