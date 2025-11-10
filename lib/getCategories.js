export async function getCategories() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/categories`);

  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}
