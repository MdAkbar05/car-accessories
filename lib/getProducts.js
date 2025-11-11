import baseUrl from "@/lib/baseUrl";

export async function getProducts(params = {}) {
  const searchParams = await params;
  const query = new URLSearchParams(
    Object.entries(searchParams).reduce((acc, [key, value]) => {
      if (value != null) acc[key] = String(value);
      return acc;
    }, {})
  ).toString();
  const res = await fetch(`${baseUrl}/api/products${query ? `?${query}` : ""}`);
  const data = await res.json();
  return data;
}
