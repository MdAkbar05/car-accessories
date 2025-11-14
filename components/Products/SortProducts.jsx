"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function SortProducts() {
  const router = useRouter();
  const params = useSearchParams();

  const handleSortChange = (value) => {
    const newParams = new URLSearchParams(params.toString());
    newParams.set("sort", value);
    router.push(`/products?${newParams.toString()}`);
  };

  return (
    <select
      onChange={(e) => handleSortChange(e.target.value)}
      defaultValue={params.get("sort") || ""}
      className="border  rounded-md lg:px-4 px-2 lg:py-2.5 py-1 md:text-base text-sm text-gray-800 cursor-pointer lg:w-32 w-24 text-center"
    >
      <option value="">Sort By</option>
      <option value="asc">Name (A-Z)</option>
      <option value="desc">Name (Z-A)</option>
      <option value="priceAsc">Price Low → High</option>
      <option value="priceDesc">Price High → Low</option>
      <option value="topSell">Top Selling</option>
      <option value="mostViewed">Most Viewed</option>
      <option value="newArrival">New Arrival</option>
    </select>
  );
}
