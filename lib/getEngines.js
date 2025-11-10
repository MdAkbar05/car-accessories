export async function getEngines() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/products/engines`);

  if (!res.ok) throw new Error("Failed to fetch engines");
  return res.json();
}
