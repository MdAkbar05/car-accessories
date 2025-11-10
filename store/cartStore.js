"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: [],
      totalItem: 0,

      // 🛒 Add product to cart
      addToCart: (product) => {
        const { cartItems } = get();
        const existingItem = cartItems.find((item) => item.id === product.id);

        let updatedCart;
        if (existingItem) {
          updatedCart = cartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          updatedCart = [...cartItems, { ...product, quantity: 1 }];
        }

        set({
          cartItems: updatedCart,
          totalItem: updatedCart.reduce((sum, i) => sum + i.quantity, 0),
        });
      },

      // 🗑️ Remove product from cart
      removeFromCart: (id) => {
        const updated = get().cartItems.filter((item) => item.id !== id);
        set({
          cartItems: updated,
          totalItem: updated.reduce((sum, i) => sum + i.quantity, 0),
        });
      },

      // 🔁 Update quantity manually
      updateQuantity: (id, quantity) => {
        const updated = get().cartItems.map((item) =>
          item.id === id ? { ...item, quantity } : item
        );
        set({
          cartItems: updated,
          totalItem: updated.reduce((sum, i) => sum + i.quantity, 0),
        });
      },

      // 💸 Total Price calculation
      totalPrice: () =>
        get().cartItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        ),

      // 🧹 Clear entire cart
      clearCart: () => set({ cartItems: [], totalItem: 0 }),
    }),
    {
      name: "cart-storage", // for localStorage persistence
    }
  )
);

export default useCartStore;
