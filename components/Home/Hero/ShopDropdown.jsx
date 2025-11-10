"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function ShopDropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="flexCenter gap-2 relative">
      <button
        onClick={() => setDropdown(!dropdown)}
        className="flex gap-2 items-center"
      >
        <span>Shop</span>
        <IoIosArrowDown
          className={`transition-transform duration-300 ${
            dropdown ? "rotate-0" : "-rotate-90"
          }`}
        />
      </button>

      {/* Dropdown */}
      <div
        className={`absolute top-8 left-0 z-10 bg-white border w-fit text-center rounded-md
          transition-all duration-300 origin-top
          ${
            dropdown
              ? "opacity-100 scale-100"
              : "opacity-0 scale-90 pointer-events-none"
          }
        `}
      >
        <ul className="whitespace-nowrap">
          <li className="p-2 hover:bg-gray-100">Parts</li>
          <li className="p-2 hover:bg-gray-100">Accessories</li>
          <li className="p-2 hover:bg-gray-100">Second Hand</li>
        </ul>
      </div>
    </div>
  );
}
