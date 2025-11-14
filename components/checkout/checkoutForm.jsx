"use client";

import useCartStore from "@/store/cartStore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function CheckoutForm({ session }) {
  const { cartItems: cart, totalPrice, clearCart } = useCartStore();
  const [loading, setLoading] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const router = useRouter();

  // Compute discounted total
  const discountedTotal = discountApplied
    ? totalPrice() * 0.95 // 5% off
    : totalPrice();

  const handleApplyCoupon = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      toast.error("No items in cart to apply coupon");
      return;
    }

    if (discountApplied) {
      toast.error("Coupon already applied");
      return;
    }

    if (coupon.trim().toUpperCase() === "DISCOUNT5") {
      setDiscountApplied(true);
      toast.success("Coupon applied! 5% discount added");
    } else {
      toast.error("Invalid coupon code");
    }
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    setLoading(true);
    toast.loading("Processing order...");

    try {
      const orderData = {
        userId: session?.user?.id,
        products: cart,
        totalAmount: discountedTotal,
        shippingAddress: e.target.address.value,
        phone: e.target.phone.value,
        couponApplied: discountApplied ? "DISCOUNT5" : null,
      };

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/orders`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(orderData),
        }
      );

      if (!res.ok) throw new Error("Checkout failed");

      toast.dismiss();
      toast.success("Order placed successfully!");
      clearCart();
      router.push("/profile");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleCheckout} className="space-y-6">
      {/* Coupon Section */}
      {cart.length > 0 && (
        <div className="space-y-3">
          <div className="flex gap-2">
            <input
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Enter Coupon Code"
              className="border p-3 rounded-lg w-full"
            />
            <button
              onClick={handleApplyCoupon}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              type="button"
            >
              Apply
            </button>
          </div>
          {discountApplied && (
            <p className="text-green-600 text-sm font-medium">
              ✅ Coupon Applied! You saved 5%.
            </p>
          )}
        </div>
      )}

      {/* Checkout Fields */}
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
        {loading ? "Processing..." : `Pay $${discountedTotal.toFixed(2)}`}
      </button>
    </form>
  );
}
