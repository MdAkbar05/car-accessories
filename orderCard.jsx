"use client";

export default function OrderCard({ orders = [] }) {
  if (!orders || orders.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">No orders found.</div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Orders List</h2>

      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="w-full border-collapse bg-white text-sm text-gray-700">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs font-semibold">
            <tr>
              <th className="px-3 py-3 text-left">SL.</th>
              <th className="px-6 py-3 text-left">Products</th>
              <th className="px-6 py-3 text-left">Total</th>
              <th className="px-6 py-3 text-left">Phone</th>
              <th className="px-6 py-3 text-left">Address</th>
              <th className="px-6 py-3 text-left">Order Status</th>
              <th className="px-6 py-3 text-left">Payment Status</th>
              <th className="px-6 py-3 text-left">Date</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <tr
                key={order.id}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="px-3 py-4">{index + 1}</td>

                <td className="px-6 py-4">
                  {Array.isArray(order.products) ? (
                    <ul className="whitespace-nowrap list-none">
                      {order.products.map((p, i) => (
                        <li key={i}>
                          {p.name.slice(0, 15) || "Unnamed Product"} ×{" "}
                          {p.quantity || 1}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span>{order.products}</span>
                  )}
                </td>

                <td className="px-6 py-4 font-semibold">
                  ${order.totalAmount?.toFixed(2)}
                </td>
                <td className="px-6 py-4">{order.phone}</td>
                <td className="px-6 py-4">{order.shippingAddress}</td>

                {/* Order Status */}
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      order.orderStatus === "shipped"
                        ? "bg-green-100 text-green-700"
                        : order.orderStatus === "processing"
                        ? "bg-yellow-100 text-yellow-700"
                        : order.orderStatus === "Cancelled"
                        ? "bg-red-100 text-red-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {order.orderStatus || "N/A"}
                  </span>
                </td>

                {/* Payment Status */}
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      order.paymentStatus === "paid"
                        ? "bg-green-100 text-green-700"
                        : order.paymentStatus === "pending"
                        ? "bg-red-100 text-red-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {order.paymentStatus || "N/A"}
                  </span>
                </td>

                <td className="px-6 py-4 text-gray-500 text-xs">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
