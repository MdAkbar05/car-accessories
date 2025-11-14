import StatsCard from "@/app/(admin)/dashboard/_components/StatsCard";
import baseUrl from "@/lib/baseUrl";
import { getProducts } from "@/lib/getProducts";

export default async function StatsPage() {
  const products = await getProducts();
  const res2 = await fetch(`${baseUrl}/api/orders`);
  const orders = await res2.json();

  const totalOrders = orders.length;
  const totalProducts = products.length;
  const totalRevenue = products.reduce(
    (acc, product) => acc + product.price,
    0
  );
  return (
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
  );
}
