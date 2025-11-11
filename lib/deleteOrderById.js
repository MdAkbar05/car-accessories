import baseUrl from "@/lib/baseUrl";

export async function deleteOrderById(orderId) {
  try {
    const response = await fetch(`${baseUrl}/api/orders/${orderId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to delete order by ID");
    } else {
      window.location.reload();
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
