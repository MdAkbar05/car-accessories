export default function Loading() {
  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className="w-full border-collapse bg-[#151E2E] text-sm text-gray-400 border border-[#1E293B]">
        {/* Table Header - Static */}
        <thead className="bg-[#0F172A] text-gray-400 uppercase text-xs font-semibold border-b border-[#1E293B]">
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

        {/* Table Body - Skeleton Rows */}
        <tbody>
          {[...Array(5)].map((_, i) => (
            <tr
              key={i}
              className="border-b border-[#1E293B] hover:bg-[#1E293B]/40 transition-colors"
            >
              {/* SL */}
              <td className="px-3 py-4">
                <div className="h-4 w-6 bg-[#1E293B] rounded animate-pulse" />
              </td>

              {/* Products */}
              <td className="px-6 py-4">
                <div className="space-y-2">
                  <div className="h-4 w-32 bg-[#1E293B] rounded animate-pulse" />
                  <div className="h-4 w-28 bg-[#1E293B] rounded animate-pulse" />
                </div>
              </td>

              {/* Total */}
              <td className="px-6 py-4">
                <div className="h-4 w-16 bg-[#1E293B] rounded animate-pulse" />
              </td>

              {/* Phone */}
              <td className="px-6 py-4">
                <div className="h-4 w-24 bg-[#1E293B] rounded animate-pulse" />
              </td>

              {/* Address */}
              <td className="px-6 py-4">
                <div className="h-4 w-40 bg-[#1E293B] rounded animate-pulse" />
              </td>

              {/* Order Status */}
              <td className="px-6 py-4">
                <div className="h-7 w-24 bg-[#1E293B] rounded-full animate-pulse" />
              </td>

              {/* Payment Status */}
              <td className="px-6 py-4">
                <div className="h-7 w-20 bg-[#1E293B] rounded-full animate-pulse" />
              </td>

              {/* Date */}
              <td className="px-6 py-4">
                <div className="h-4 w-20 bg-[#1E293B] rounded animate-pulse" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
