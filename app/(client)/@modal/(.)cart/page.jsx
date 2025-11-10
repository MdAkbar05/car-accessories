"use client";
import Modal from "@/components/modal";
import useCartStore from "@/store/cartStore";
import { useRouter } from "next/navigation";

export default function ModalPage() {
  const router = useRouter();
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } =
    useCartStore();

  return (
    <Modal>
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">No items in your cart yet.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-4"
            >
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-500 text-sm">${item.price}</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    updateQuantity(item.id, Math.max(1, item.quantity - 1))
                  }
                  className="px-2 bg-gray-200 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>

              <p>${item.price * item.quantity}</p>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6 font-semibold">
            <p>Total:</p>
            <p>${totalPrice()}</p>
          </div>

          <div className="flex justify-between mt-6">
            <button
              onClick={clearCart}
              className=" bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700"
            >
              Clear Cart
            </button>
            <a
              href="/checkout"
              onClick={() => router.push("/checkout")}
              className=" text-center bg-primary text-white py-2 px-6   rounded-lg hover:bg-primary/90 transition-all"
            >
              Proceed to Checkout
            </a>
          </div>
        </>
      )}
    </Modal>
  );
}
