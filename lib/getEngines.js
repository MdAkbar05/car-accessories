import baseUrl from "@/lib/baseUrl";

export async function getEngines() {
  const res = await fetch(`${baseUrl}/api/products/engines`);

  if (!res.ok) {
    throw new Error(
      `${res.statusText}, Status Code: (${res.status}) in the API:  ${res.url}`
    );
  }
  return res.json();
}
