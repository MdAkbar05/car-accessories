import baseUrl from "@/lib/baseUrl";

export async function getModels() {
  const res = await fetch(`${baseUrl}/api/products/models`);

  if (!res.ok) {
    throw new Error(
      `${res.statusText}, Status Code: (${res.status}) in the API:  ${res.url}`
    );
  }
  return res.json();
}
