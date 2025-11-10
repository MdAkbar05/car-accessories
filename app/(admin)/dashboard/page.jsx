import RecentOrder from "@/app/(admin)/dashboard/_components/RecentOrder";
import StatsCard from "@/app/(admin)/dashboard/_components/StatsCard";
import { getProducts } from "@/lib/getProducts";

export default async function DashboardHome() {
  const products = await getProducts();
  const res2 = await fetch("http://localhost:3000/api/orders");
  const orders = await res2.json();

  const totalOrders = orders.length;
  const totalProducts = products.length;
  const totalRevenue = products.reduce(
    (acc, product) => acc + product.price,
    0
  );

  return (
    <div className="w-full space-y-8 text-[#E8E8EA]">
      {/* Dashboard Header */}
      <div>
        <h1 className="text-3xl font-semibold text-blue-400">
          Welcome to Your Dashboard 👋
        </h1>
        <p className="text-gray-400 mt-1">
          Overview of your store’s performance and activities.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatsCard
          value={totalOrders}
          name="Total Orders"
          stat={{ change: "+12%" }}
        />
        <StatsCard
          value={totalProducts}
          name="Total Products"
          stat={{ change: "+7%" }}
        />
        <StatsCard
          value={totalRevenue.toFixed(2)}
          name="Total Revenue"
          stat={{ change: "+14%" }}
        />
        <StatsCard value="12" name="Total Users" stat={{ change: "+4%" }} />
      </div>

      {/* Recent Orders */}
      <RecentOrder orders={orders} />

      {/* Footer Message */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} Best Parts Dashboard — All rights reserved.
      </div>
    </div>
  );
}
