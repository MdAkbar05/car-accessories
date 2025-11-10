import Link from "next/link";
import ShopDropdown from "./ShopDropdown";

export default function Breadcrumbs() {
  return (
    <div className="sm:hidden md:block">
      <div className="flex gap-10 border-b border-border px-6 py-3  font-medium">
        <Link href="/products">Products</Link>
        <ShopDropdown />
        <span>Compare Products</span>
      </div>
    </div>
  );
}
