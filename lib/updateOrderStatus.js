"use client";

import baseUrl from "@/lib/baseUrl";

export async function updateOrderStatus(orderId, data) {
  const { orderStatus, paymentStatus } = data;
  try {
    const response = await fetch(`${baseUrl}/api/orders/${orderId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orderStatus, paymentStatus }),
    });
    if (!response.ok) {
      throw new Error("Failed to update order by ID");
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
