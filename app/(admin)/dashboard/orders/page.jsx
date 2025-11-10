import RecentOrder from "@/app/(admin)/dashboard/_components/RecentOrder";

export default async function OrdersPage() {
  const res2 = await fetch("http://localhost:3000/api/orders");
  const orders = await res2.json();
  return <RecentOrder orders={orders} />;
}
