"use client";
import VoiceTypingComponent from "@/components/VoiceTypingSpeech";
import filter from "@/public/assets/icons/filter.svg";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BiCategory } from "react-icons/bi";
import { IoIosArrowDown, IoMdSearch } from "react-icons/io";
import GalleryUpload from "./GalleryUpload";

export default function Search({ children }) {
  // get query from useSearchParams
  const searchParams = useSearchParams();
  const router = useRouter();
  const [voiceTranscript, setVoiceTranscript] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [categories, setCategories] = useState([]);
  const [dropdown, setDropdown] = useState(false);
  const [filters, setFilters] = useState({
    category: searchParams.get("category") || "",
    brand: searchParams.get("brand") || "",
    model: searchParams.get("model") || "",
    engine: searchParams.get("engine") || "",
    budget: searchParams.get("budget") || "",
    query: searchParams.get("query") || "",
  });

  const handleChange = (e) => {
    if (e.target.name === "query" && voiceTranscript)
      setFilters({ ...filters, [e.target.name]: voiceTranscript });
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const query = Object.entries(filters)
      .filter(([_, value]) => value !== "")
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join("&");

    router.push(`/products?${query}`);
    // or send api request for query search
  };

  return (
    <>
      <div className="flex justify-between border items-center px-4">
        <div className="flex-1/12 flexCenter  ">
          {/* Dropdown */}
          <div className="relative flexCenter gap-4 px-4 mx-3 py-2 rounded-xl cursor-pointer hover:bg-gray-50 ">
            <button
              type="button"
              title="Categories"
              onClick={(e) => {
                e.stopPropagation();
                setDropdown(!dropdown);
                setFilters({ ...filters, category: filters.category });
              }}
              className="flexCenter gap-4 hover:bg-slate-200 px-3 py-2 rounded-lg transition-all duration-300"
            >
              <span>
                {filters.category ? (
                  filters.category
                ) : (
                  <BiCategory
                    size={24}
                    strokeWidth={0}
                    className="text-black"
                  />
                )}
              </span>
              <IoIosArrowDown
                className={`transition-transform duration-300 text-2xl ${
                  dropdown ? "rotate-0" : "-rotate-90"
                }`}
              />
            </button>
            {dropdown && (
              <div
                className="fixed z-10 w-full right-0 top-0 bottom-0 mx-auto bg-black/20 p-4 "
                onClick={() => setDropdown(false)}
              >
                <div
                  className={`absolute top-24 left-96 z-10 bg-white border w-64  p-4  rounded-md
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
                      onClick={() => setFilters({ ...filters, category: "" })}
                    >
                      Category
                    </li>
                    {categories?.map((category) => (
                      <li
                        key={category.id}
                        className="px-3 py-1 transition-all ease-in-out hover:bg-gray-50 rounded-lg"
                        onClick={() =>
                          setFilters({ ...filters, category: category.id })
                        }
                      >
                        {category.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex-9/12">
          <div className=" flexCenter gap-2 p-4 border-l border-border w-full">
            <IoMdSearch size={24} color="gray" />
            <input
              className="  focus:outline-none  w-full"
              type="text"
              name="query"
              onChange={handleChange}
              value={filters.query}
              placeholder="Search for parts and accessories"
            />
          </div>
        </form>
        <div className="flex-2/12 flex gap-6">
          <VoiceTypingComponent setVoiceTranscript={setVoiceTranscript} />
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
        <div
          className="fixed top-0 left-0 w-full h-full z-50 bg-black/10"
          onClick={() => setShowFilters(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute top-28 right-96 z-50"
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
}
