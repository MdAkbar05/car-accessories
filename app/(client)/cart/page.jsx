import CartItems from "@/components/cart/cartItems";

export default function CartPage() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <CartItems />
    </main>
  );
}
