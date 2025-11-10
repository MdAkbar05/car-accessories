import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ReviewCard from "@/components/ReviewCard";
import OrderCard from "@/orderCard";
import { getServerSession } from "next-auth";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/reviews?userId=${session?.user?.id}`
  );

  const reviews = await res.json();
  const res2 = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/orders`);

  const orders = await res2.json();

  if (!session) {
    return (
      <div className="text-center py-10 text-red-600">
        Please login to view your profile.
      </div>
    );
  }

  const { name, email, image } = session.user;

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Profile Header */}
      <div className="flex flex-col sm:flex-row items-center gap-6 bg-white shadow-md p-6 rounded-2xl">
        <img
          src={image || "/default-avatar.png"}
          alt={name}
          className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
          <p className="text-gray-500">{email}</p>
          <p className="mt-2 text-sm text-gray-600">
            Member since: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* User Reviews */}
      <div className="mt-10">
        {orders.length > 0 && <OrderCard orders={orders} />}
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Your Reviews</h2>
        {reviews.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-6">
            You haven’t written any reviews yet.
          </p>
        )}
      </div>
    </div>
  );
}
