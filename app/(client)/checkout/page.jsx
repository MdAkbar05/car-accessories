import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import CheckoutForm from "@/components/checkout/checkoutForm";
import { getServerSession } from "next-auth";

export default async function CheckoutPage() {
  const session = await getServerSession(authOptions);
  return (
    <section className="max-w-4xl mx-auto mt-10 mb-20 p-6">
      <h1 className="text-3xl font-semibold mb-8">Checkout</h1>
      <CheckoutForm session={session} />
    </section>
  );
}
