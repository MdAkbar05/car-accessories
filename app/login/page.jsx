"use client";
import loginSide from "@/public/assets/dummy/login-side.svg";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl: "/",
    });

    if (res?.ok) router.push("/");
    else alert(res.error);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-linear-to-br from-gray-100 to-gray-200">
      {/* Left side image */}
      <div className="hidden md:block relative">
        <Image
          src={loginSide} // change image
          alt="Login Illustration"
          fill
          className="object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* text on image */}
        <div className="absolute top-12 left-44 text-white">
          <h2 className="text-4xl font-bold mb-2 drop-shadow-md">
            Welcome Back
          </h2>
          <p className="text-lg opacity-90 drop-shadow">
            Sign in to continue your journey
          </p>
        </div>
      </div>

      {/* Right side login card */}
      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
          <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
            Login
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition text-white py-2.5 rounded-lg font-medium shadow-sm"
            >
              Login
            </button>
          </form>

          <div className="my-5 text-center text-gray-500 select-none">or</div>

          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-2.5 rounded-lg font-medium shadow-sm flex items-center justify-center gap-2 transition"
          >
            <FaGoogle className="w-5 h-5" />
            Sign in with Google
          </button>

          <p className="mt-6 text-center text-gray-600 text-sm">
            Don’t have an account?{" "}
            <Link
              href="/register"
              className="text-blue-600 hover:underline cursor-pointer"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
