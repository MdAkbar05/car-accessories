import baseUrl from "@/lib/baseUrl";

export async function getCategories() {
  const res = await fetch(`${baseUrl}/api/categories`);

  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}
