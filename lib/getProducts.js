export async function getProducts(params = {}) {
  const query = new URLSearchParams(
    Object.entries(params).reduce((acc, [key, value]) => {
      if (value != null) acc[key] = String(value);
      return acc;
    }, {})
  ).toString();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products${
      query ? `?${query}` : ""
    }`
  );
  const data = await res.json();
  return data;
}
