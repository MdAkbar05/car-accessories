"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
  const router = useRouter();

  useEffect(() => {
    console.error("Global error:", error);
  }, [error]);

  return (
    <html>
      <body className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
        <h2 className="text-3xl font-bold text-red-600 mb-4">
          Something went wrong 😢
        </h2>
        <p className="text-gray-600 mb-6 max-w-md">
          {error?.message || "An unexpected error occurred. Please try again."}
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => reset()}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Try Again
          </button>
          <button
            onClick={() => router.push("/")}
            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition"
          >
            Go Home
          </button>
        </div>
      </body>
    </html>
  );
}
