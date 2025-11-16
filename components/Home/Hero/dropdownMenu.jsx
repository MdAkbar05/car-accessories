"use client";
import downArrow from "@/public/assets/icons/down-arrow.svg";
import menu from "@/public/assets/icons/menu.svg";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

export default function DropdownMenu({ categories }) {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setDropdown(!dropdown);
      }}
      className="flex justify-between border-b  rounded-t-xl border-border px-6 py-3 bg-tertiary hover:bg-gray-50 cursor-pointer  "
    >
      <div className="flex gap-x-4 relative justify-between  w-full">
        <div className="flex gap-x-4">
          <Image src={menu} alt="menu" width={24} height={24} />

          <button>All Categories</button>
        </div>
        <Image
          className={`transition-transform duration-300 ${
            dropdown ? "rotate-0" : "-rotate-90"
          }`}
          src={downArrow}
          alt="downArrow"
          width={18}
          height={18}
        />

        {dropdown && (
          <div
            className={`absolute top-12 -left-7 z-10 bg-white border w-[1600px]  p-4  rounded-md
          transition-all duration-300 origin-top
          ${
            dropdown
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }
        `}
          >
            <div className="flex justify-between">
              <ul className="flex flex-col gap-2 p-4">
                {categories.slice(0, 3).map((category) => (
                  <li
                    key={category.id}
                    className="px-3 py-1 transition-all ease-in-out hover:bg-gray-50 rounded-lg"
                  >
                    {category.name}
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-2 p-4">
                {categories.slice(3, 6).map((category) => (
                  <Link
                    href={`/products?category=${category.id}`}
                    key={category.id}
                    className="px-3 py-1 transition-all ease-in-out hover:bg-gray-50 rounded-lg"
                  >
                    {category.name}
                  </Link>
                ))}
              </ul>
              <ul className="flex flex-col gap-2 p-4">
                <li className="px-3 py-1 transition-all ease-in-out hover:bg-gray-50 rounded-lg text-primary">
                  Tools and Equipment
                </li>
                <li className="px-3 py-1 transition-all ease-in-out hover:bg-gray-50 rounded-lg">
                  Lubricants and Chemicals
                </li>
                <li className="px-3 py-1 transition-all ease-in-out hover:bg-gray-50 rounded-lg">
                  Office and Facility Supplies
                </li>
              </ul>
              <ul className="flex flex-col gap-2 p-4">
                <li className="px-3 py-1 transition-all ease-in-out hover:bg-gray-50 rounded-lg text-primary">
                  Tools and Equipment
                </li>
                <li className="px-3 py-1 transition-all ease-in-out hover:bg-gray-50 rounded-lg">
                  Lubricants and Chemicals
                </li>
                <li className="px-3 py-1 transition-all ease-in-out hover:bg-gray-50 rounded-lg">
                  Office and Facility Supplies
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
