"use client";

import { deleteOrderById } from "@/lib/deleteOrderById";
import { updateOrderStatus } from "@/lib/updateOrderStatus";
import toast from "react-hot-toast";

export default function RecentOrder({ orders }) {
  const handleOrderStatusChange = (e, order) => {
    const data = {
      orderStatus: e.target.value,
      paymentStatus: order.paymentStatus,
    };
    toast.promise(updateOrderStatus(order?.id, data), {
      loading: "Updating order status...",
      success: "Order status updated successfully",
      error: "Failed to update order status",
    });
  };
  const handlePaymentStatusChange = (e, order) => {
    const data = {
      orderStatus: order.orderStatus,
      paymentStatus: e.target.value,
    };
    toast.promise(updateOrderStatus(order?.id, data), {
      loading: "Updating order status...",
      success: "Order status updated successfully",
      error: "Failed to update order status",
    });
  };
  return (
    <div className="bg-[#151E2E] border border-[#1E293B] rounded-xl p-6 max-h-96 overflow-hidden overflow-y-auto">
      <h2 className="text-lg font-semibold text-blue-400 mb-4">
        Recent Orders
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="text-left text-gray-400 border-b border-[#1E293B]">
              <th className="py-3 px-4">Order ID</th>
              <th className="py-3 px-4">Customer</th>
              <th className="py-3 px-4">Amount</th>
              <th className="py-3 px-4">Order Status</th>
              <th className="py-3 px-4">Payment Status</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-[#1E293B] hover:bg-[#1E293B]/40 transition"
              >
                <td className="py-3 px-4 font-medium">{order?.id}</td>
                <td className="py-3 px-4">{order?.user?.name}</td>
                <td className="py-3 px-4">{order?.totalAmount}</td>
                <td
                  className={`py-3 px-4 font-medium ${
                    order?.orderStatus === "shipped"
                      ? "text-blue-400"
                      : order?.orderStatus === "processing"
                      ? "text-yellow-400"
                      : order?.orderStatus === "delivered"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {order?.orderStatus}
                </td>
                <td
                  className={`py-3 px-4 font-medium ${
                    order?.paymentStatus === "paid"
                      ? "text-green-400"
                      : order?.paymentStatus === "unpaid"
                      ? "text-yellow-400"
                      : "text-red-400"
                  }`}
                >
                  {order?.paymentStatus}
                </td>
                <td className="py-3 px-4">
                  {/* delete button and update status and payment status button  */}
                  <button
                    className="text-red-600 hover:bg-red-700 hover:text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200"
                    onClick={() => {
                      toast.promise(deleteOrderById(order?.id), {
                        loading: "Deleting order...",
                        success: "Order deleted successfully",
                        error: "Failed to delete order",
                      });
                    }}
                  >
                    Delete
                  </button>
                  <select
                    name="orderStatus"
                    onChange={(e) => handleOrderStatusChange(e, order)}
                    className="text-blue-600 hover:bg-blue-700 hover:text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 ml-2"
                  >
                    <option value="">Order Status</option>
                    <option value="processing">Processing</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                  </select>
                  <select
                    name="paymentStatus"
                    onChange={(e) => handlePaymentStatusChange(e, order)}
                    className="text-green-600 hover:bg-green-700 hover:text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 ml-2"
                  >
                    <option value="">Payment Status</option>
                    <option value="paid">Paid</option>
                    <option value="unpaid">Unpaid</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
