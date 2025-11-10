import WishlistProducts from "@/app/(client)/wishlist/wishlistProducts";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { fetchWishlist } from "@/lib/wishlistAction";
import { getServerSession } from "next-auth";

export const metadata = {
  title: "Wishlist",
  description: "A modern e-commerce platform for online shopping.",
};

export default async function WishlistPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id)
    return (
      <div className="text-center py-20 text-gray-600">
        Please log in to view your wishlist.
      </div>
    );

  const products = await fetchWishlist(session.user.id);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">My Wishlist</h1>

      <WishlistProducts userId={session.user.id} products={products} />
    </div>
  );
}
