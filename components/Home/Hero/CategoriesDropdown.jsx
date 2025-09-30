"use client";
import downArrow from "@/public/assets/icons/down-arrow.svg";
import menu from "@/public/assets/icons/menu.svg";
import newArrivals from "@/public/assets/icons/new-arrivals.svg";
import racing from "@/public/assets/icons/racing.svg";
import shop from "@/public/assets/icons/shop.svg";
import Image from "next/image";
import { useState } from "react";
export default function CategoriesDropdown() {
  const [dropdown, setDropdown] = useState(false);
  const categories = [
    {
      id: 1,
      name: "Tools and Equipment",
      icon: racing,
    },
    {
      id: 2,
      name: "Lubricants and Chemicals",
      icon: racing,
    },
    {
      id: 3,
      name: "Office and Facility Supplies",
      icon: racing,
    },
    {
      id: 4,
      name: "Automation and Control Systems",
      icon: racing,
    },
    {
      id: 5,
      name: "Gaskets and Seals",
      icon: racing,
    },
    {
      id: 6,
      name: "Valves and Fittings",
      icon: racing,
    },
    {
      id: 7,
      name: "Power and Hand Tools",
      icon: racing,
    },
    {
      id: 8,
      name: "Best Sellers",
      icon: shop,
    },
    {
      id: 9,
      name: "New Arrivals",
      icon: newArrivals,
    },
  ];
  return (
    <div className="sm:hidden md:block border text-black flex-2/12 h-fit">
      <div
        onClick={(e) => {
          e.stopPropagation();
          setDropdown(!dropdown);
        }}
        className="flex justify-between border-b border-border px-6 py-3 bg-tertiary hover:bg-gray-50 cursor-pointer  "
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

      <div className="flex flex-col">
        {categories.map((category) => (
          <button
            key={category.id}
            className="border-b border-border px-6 py-5"
          >
            <div className="flex  justify-between items-center ">
              <div className="flex justify-between gap-4">
                <Image
                  src={category.icon}
                  alt={category.name}
                  width={24}
                  height={24}
                />
                <span>{category.name}</span>
              </div>
              <Image
                className="-rotate-90 "
                src={downArrow}
                alt="downArrow"
                width={18}
                height={18}
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
