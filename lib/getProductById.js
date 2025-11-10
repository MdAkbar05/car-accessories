export async function getProductById(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`,
    {
      method: "PATCH",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch product data");
  }
  const product = await res.json();
  return product;
}
