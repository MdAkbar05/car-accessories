export async function getEngines() {
  const baseUrl = "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/products/engines`);

  if (!res.ok) throw new Error("Failed to fetch engines");
  return res.json();
}
