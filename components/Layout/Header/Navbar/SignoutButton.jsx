"use client";
import { signOut } from "next-auth/react";

export default function SignoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/login" })}
      className="bg-red-700 text-white px-3 py-2 rounded-md cursor-pointer"
    >
      Sign out
    </button>
  );
}
