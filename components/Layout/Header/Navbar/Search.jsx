"use client";
import FindProduct from "@/components/FindProduct";
import VoiceTypingComponent from "@/components/VoiceTypingSpeech";
import filter from "@/public/assets/icons/filter.svg";

import FilterProducts from "@/utils/FilterProducts";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import GalleryUpload from "./GalleryUpload";

const productsData = [
  {
    id: 1,
    name: "car",
    category: "car",
    brand: "toyota",
    model: "2023",
    engine: "1500cc",
    budget: "10k-20k",
  },
  {
    id: 2,
    name: "bike",
    category: "bike",
    brand: "honda",
    model: "2024",
    engine: "1000cc",
    budget: "under-10k",
  },
  {
    id: 3,
    name: "truck",
    category: "truck",
    brand: "ford",
    model: "2022",
    engine: "2000cc",
    budget: "20k-30k",
  },
];
export default function Search() {
  const [products, setProducts] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const router = useRouter();
  const [showFilters, setShowFilters] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [filters, setFilters] = useState({
    category: "",
    brand: "",
    model: "",
    engine: "",
    budget: "",
    query: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };
  console.log(filters);
  const handleFilterProducts = (filters) => {
    const filtered = FilterProducts(products, filters);
    setFilteredProducts(filtered);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    handleFilterProducts(filters);
    //if filter in backend using query params
    // Build query string only for non-empty values
    const query = Object.entries(filters)
      .filter(([_, value]) => value !== "")
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join("&");

    router.push(`/?${query}`);
    // or send api request for query search
  };

  return (
    <>
      <div className="flex justify-between border items-center px-4">
        <div className="flex-1/12 flexCenter  ">
          {/* Dropdown */}
          <div className="relative flexCenter gap-4 px-4 mx-3 py-2 rounded-xl cursor-pointer hover:bg-gray-50 ">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setDropdown(!dropdown);
                setFilters({ ...filters, category: filters.category });
              }}
              className="flexCenter gap-4"
            >
              <span>{filters.category ? filters.category : "Category"}</span>
              <IoIosArrowDown
                className={`transition-transform duration-300 ${
                  dropdown ? "rotate-0" : "-rotate-90"
                }`}
              />
            </button>
            {dropdown && (
              <div
                className={`absolute top-12 -left-7 z-10 bg-white border w-64  p-4  rounded-md
          transition-all duration-300 origin-top
          ${
            dropdown
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }
        `}
              >
                <ul className="flex flex-col gap-2">
                  <li
                    className="px-3 py-1 transition-all ease-in-out hover:bg-gray-50 rounded-lg"
                    onClick={() => setFilters({ ...filters, category: "car" })}
                  >
                    Tools and Equipment
                  </li>
                  <li
                    className="px-3 py-1 transition-all ease-in-out hover:bg-gray-50 rounded-lg"
                    onClick={() =>
                      setFilters({ ...filters, category: "Lubricants" })
                    }
                  >
                    Lubricants and Chemicals
                  </li>
                  <li
                    className="px-3 py-1 transition-all ease-in-out hover:bg-gray-50 rounded-lg"
                    onClick={() =>
                      setFilters({ ...filters, category: "truck" })
                    }
                  >
                    Office and Facility Supplies
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex-9/12">
          <input
            className=" p-4 border-l border-border w-full focus:outline-none"
            type="text"
            name="query"
            onChange={handleChange}
            value={filters.query}
            placeholder="🔍 Search for parts and accessories"
          />
        </form>
        <div className="flex-2/12 flex gap-6">
          <VoiceTypingComponent />
          <GalleryUpload />
          <Image
            onClick={() => setShowFilters((prev) => !prev)}
            src={filter}
            alt="filter"
            width={24}
            height={24}
          />
        </div>
      </div>

      {/* Filter Component Toggle */}
      {showFilters && (
        <div className="absolute top-28 z-50">
          <FindProduct
            key={Math.random()}
            onHandleFilter={handleFilterProducts}
            parentFilter={filters}
          />
        </div>
      )}
    </>
  );
}
