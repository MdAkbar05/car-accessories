import baseUrl from "@/lib/baseUrl";

export async function getEngines() {
  const res = await fetch(`${baseUrl}/api/products/engines`);

  if (!res.ok) throw new Error("Failed to fetch engines");
  return res.json();
}
