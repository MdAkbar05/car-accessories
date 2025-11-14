import baseUrl from "@/lib/baseUrl";

export async function getCategories() {
  const res = await fetch(`${baseUrl}/api/categories`);

  if (!res.ok) {
    throw new Error(
      `${res.statusText}, Status Code: (${res.status}) in the API:  ${res.url}`
    );
  }
  return res.json();
}
