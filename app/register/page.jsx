"use client";
import registerSide from "@/public/assets/dummy/register-side.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Account created! Please login.");
      router.push("/login");
    } else {
      const data = await res.json();
      alert(data.message || "Failed to register.");
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-linear-to-br from-gray-100 to-gray-200">
      {/* left side form */}
      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
          <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
            Create Account
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
            />

            <input
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
            />

            <input
              type="password"
              placeholder="Choose a password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
            />

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 transition text-white py-2.5 rounded-lg font-medium shadow-sm"
            >
              Register
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600 text-sm">
            Already have an account?{" "}
            <span
              className="text-green-600 hover:underline cursor-pointer"
              onClick={() => router.push("/login")}
            >
              Login
            </span>
          </p>
        </div>
      </div>

      {/* right side image */}
      <div className="hidden md:block relative ">
        <Image
          src={registerSide} // change your image
          alt="Register Illustration"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute top-4 left-10 text-green-400">
          <h2 className="text-4xl font-bold mb-2 drop-shadow-sm ">
            Join Us Today
          </h2>
          <p className="text-lg opacity-90 drop-shadow text-white">
            Create an account to get started
          </p>
        </div>
      </div>
    </div>
  );
}
