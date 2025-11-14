"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { IoAlert } from "react-icons/io5";

export default function Error({ error, reset }) {
  const router = useRouter();
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-rose-50 to-white px-4">
      <div className="max-w-lg w-full bg-white border border-rose-100 shadow-xl rounded-2xl p-8">
        <div className="flex flex-col items-center text-center">
          <IoAlert className="text-rose-500 w-14 h-14 mb-4" />
          <h1 className="text-3xl font-bold text-rose-600 mb-1">
            Oops! Something Went Wrong
          </h1>

          <p className="text-gray-600 mb-6">{error.message}</p>

          <div className="flex gap-3">
            <button
              onClick={() => reset()}
              className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition"
            >
              Try Again
            </button>
            <button
              onClick={() => router.push("/")}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition"
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
