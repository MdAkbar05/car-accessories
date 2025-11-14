"use client";

import baseUrl from "@/lib/baseUrl";

export async function updateOrderStatus(orderId, data) {
  const { orderStatus, paymentStatus } = data;
  try {
    const res = await fetch(`${baseUrl}/api/orders/${orderId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orderStatus, paymentStatus }),
    });
    if (!res.ok) {
      throw new Error(
        `${res.statusText}, Status Code: (${res.status}) in the API:  ${res.url}`
      );
    } else {
      window.location.reload();
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
