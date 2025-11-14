"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ShopDropdown from "./ShopDropdown";

export default function Breadcrumbs({ breadcrumbs = [] }) {
  const pathname = usePathname();
  return (
    <div className="sm:hidden md:block ">
      <div className="inline-flex gap-6  px-6 py-2  text-gray-400 shadow-xs  shadow-slate-50 ">
        {breadcrumbs.length > 0 ? (
          breadcrumbs.map((breadcrumb, index) => (
            <div key={index} className="space-x-2">
              <Link
                className={
                  pathname === "/" + breadcrumb.toLowerCase() ||
                  breadcrumbs.length - 1 == index
                    ? "text-gray-900 font-medium cursor-not-allowed"
                    : " "
                }
                href={
                  breadcrumb == ""
                    ? "/"
                    : pathname
                    ? "/products"
                    : breadcrumb.toLowerCase()
                }
              >
                {breadcrumb == "" ? "Home" : breadcrumb}
              </Link>{" "}
              <span> &harr;</span>
            </div>
          ))
        ) : (
          <>
            <Link href="/products">Products</Link>
            <ShopDropdown />
            <span>Compare Products</span>
          </>
        )}
      </div>
    </div>
  );
}
