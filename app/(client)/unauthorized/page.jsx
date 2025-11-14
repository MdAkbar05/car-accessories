import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
      <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-8 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h1>

        <p className="text-gray-700 mb-6">
          You have been redirected because you do not have permission to view
          this page. Please log in with the correct account to proceed.
        </p>

        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}
