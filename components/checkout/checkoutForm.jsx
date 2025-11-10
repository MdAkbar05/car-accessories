"use client";

import useCartStore from "@/store/cartStore";
import { useRouter } from "next/navigation";

import { useState } from "react";
import toast from "react-hot-toast";

export default function CheckoutForm({ session }) {
  const { cartItems: cart, totalPrice, clearCart } = useCartStore();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCheckout = async (e) => {
    e.preventDefault();
    setLoading(true);
    toast.loading("Processing order...");
    try {
      const orderData = {
        userId: session?.user?.id,
        products: cart,
        totalAmount: totalPrice(),
        shippingAddress: e.target.address.value,
        phone: e.target.phone.value,
      };

      // Example: Send to API route
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/orders`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(orderData),
        }
      );

      if (!res.ok) throw new Error("Checkout failed");
      toast.dismissAll();
      toast.success("Order placed successfully");

      router.push("/profile");
      clearCart();
    } catch (err) {
      alert("❌ " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleCheckout} className="space-y-6">
      <input
        required
        name="phone"
        placeholder="Phone Number"
        className="border p-3 rounded-lg w-full"
      />

      <textarea
        required
        name="address"
        placeholder="Shipping Address"
        className="border p-3 rounded-lg w-full"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/80 transition"
      >
        {loading ? "Processing..." : `Pay $${totalPrice().toFixed(2)}`}
      </button>
    </form>
  );
}
