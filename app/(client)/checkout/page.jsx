import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import CheckoutForm from "@/components/checkout/checkoutForm";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function CheckoutPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-2xl border">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Login Required
          </h2>

          <p className="text-gray-600 mb-6">
            You need to log in before you can place an order.
          </p>

          <Link
            href="/login"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-lg transition"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }
  return (
    <section className="max-w-4xl mx-auto mt-10 mb-20 p-6">
      <h1 className="text-3xl font-semibold mb-8">Checkout</h1>
      <CheckoutForm session={session} />
    </section>
  );
}
