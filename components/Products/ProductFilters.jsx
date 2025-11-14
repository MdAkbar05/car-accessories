"use client";
import { getBrands } from "@/lib/getBrands";
import { getCategories } from "@/lib/getCategories";
import { getEngines } from "@/lib/getEngines";
import { getModels } from "@/lib/getModels";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";

export default function ProductFilters() {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [engines, setEngines] = useState([]);
  const router = useRouter();
  const params = useSearchParams();

  const handleChange = (key, value) => {
    const newParams = new URLSearchParams(params.toString());
    if (value) newParams.set(key, value);
    else newParams.delete(key);
    router.push(`/products?${newParams.toString()}`);
  };

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [cat, brand, model, engine] = await Promise.all([
          getCategories(),
          getBrands(),
          getModels(),
          getEngines(),
        ]);
        setCategories(cat);
        setBrands(brand);
        setModels(model);
        setEngines(engine);
      } catch (err) {
        console.error("Error loading options:", err);
      }
    };
    fetchAll();
  }, []);

  const filterItems = [
    { key: "category", label: "Category", options: categories },
    { key: "brand", label: "Brand", options: brands },
    { key: "model", label: "Model", options: models },
    { key: "engine", label: "Engine", options: engines },
  ];
  return (
    <div className="flexCenter flex-wrap gap-4">
      <h3 className="md:text-2xl sm:text-lg font-semibold text-gray-800 ">
        <FaFilter />
      </h3>
      {filterItems.length > 0 &&
        filterItems?.map((filter) => (
          <select
            key={filter.key}
            onChange={(e) => handleChange(filter.key, e.target.value)}
            defaultValue={params.get(filter.key) || ""}
            className="border  rounded-md lg:px-4 px-2 lg:py-2.5 py-1 md:text-base text-sm text-gray-800 cursor-pointer lg:w-32 w-24 text-center"
          >
            <option value="">{filter.label}</option>

            {filter.label === "Category"
              ? filter.options.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.name}
                  </option>
                ))
              : filter.options.map((opt, i) => (
                  <option key={i} value={opt}>
                    {opt}
                  </option>
                ))}
          </select>
        ))}
      <Link
        className=" bg-red-400    text-white  border  rounded-md lg:px-4 px-2 lg:py-2.5 py-1 md:text-base text-sm cursor-pointer lg:w-32 w-24 text-center"
        href="/products"
      >
        Reset
      </Link>
    </div>
  );
}
