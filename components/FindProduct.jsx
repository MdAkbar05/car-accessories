"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import FilterSelect from "./filterSelect";

export default function ProductFilter({
  parentFilter,
  categories,
  brands,
  models,
  engines,
}) {
  const router = useRouter();

  const [filters, setFilters] = useState(
    parentFilter || {
      category: "",
      brand: "",
      model: "",
      engine: "",
    }
  );
  const [filterItems, setFilterItems] = useState({
    categories: categories || [],
    brands: brands || [],
    models: models || [],
    engines: engines || [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const query = Object.entries(filters)
      .filter(([_, v]) => v !== "")
      .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
      .join("&");

    router.push(`/products${query ? `?${query}` : ""}`);
  };

  return (
    <>
      <FilterSelect
        label="Category"
        name="category"
        value={filters.category}
        options={filterItems.categories}
        onChange={handleChange}
        loading={filterItems.categories.length === 0}
        category
      />

      <FilterSelect
        label="Brand"
        name="brand"
        value={filters.brand}
        options={filterItems.brands}
        onChange={handleChange}
        loading={filterItems.brands.length === 0}
      />

      <FilterSelect
        label="Model"
        name="model"
        value={filters.model}
        options={filterItems.models}
        onChange={handleChange}
        loading={filterItems.models.length === 0}
      />

      <FilterSelect
        label="Engine"
        name="engine"
        value={filters.engine}
        options={filterItems.engines}
        onChange={handleChange}
        loading={filterItems.engines.length === 0}
      />

      {/* Button */}
      <button
        onClick={handleSubmit}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-all"
      >
        Find Product
      </button>
    </>
  );
}
