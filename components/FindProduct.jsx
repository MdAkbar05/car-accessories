"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function ProductFilter({ onHandleFilter, parentFilter }) {
  const filterItem = [
    {
      id: 1,
      name: "Category",
      options: [
        { value: "", label: "Select Category" },
        { value: "car", label: "Car" },
        { value: "bike", label: "Bike" },
        { value: "motorcycle", label: "Motorcycle" },
        { value: "scooter", label: "Scooter" },
        { value: "truck", label: "Truck" },
      ],
    },
    {
      id: 2,
      name: "Brand",
      options: [
        { value: "", label: "Select Brand" },
        { value: "toyota", label: "Toyota" },
        { value: "honda", label: "Honda" },
        { value: "suzuki", label: "Suzuki" },
        { value: "yamaha", label: "Yamaha" },
        { value: "kawasaki", label: "Kawasaki" },
      ],
    },
    {
      id: 3,
      name: "Model",
      options: [
        { value: "", label: "Select Model" },
        { value: "2023", label: "2023" },
        { value: "2024", label: "2024" },
        { value: "2025", label: "2025" },
        { value: "2026", label: "2026" },
        { value: "2027", label: "2027" },
      ],
    },
    {
      id: 4,
      name: "Engine",
      options: [
        { value: "", label: "Select Engine" },
        { value: "1500cc", label: "1500cc" },
        { value: "2000cc", label: "2000cc" },
        { value: "2500cc", label: "2500cc" },
        { value: "3000cc", label: "3000cc" },
        { value: "3500cc", label: "3500cc" },
      ],
    },
    {
      id: 5,
      name: "Budget",
      options: [
        { value: "", label: "Select Budget" },
        { value: "under-10k", label: "under-10k" },
        { value: "10k-20k", label: "10k-20k" },
        { value: "20k-30k", label: "20k-30k" },
        { value: "30k-40k", label: "30k-40k" },
        { value: "40k-50k", label: "40k-50k" },
      ],
    },
  ];
  const router = useRouter();
  const [filters, setFilters] = useState(
    parentFilter || {
      category: "",
      brand: "",
      model: "",
      engine: "",
      budget: "",
      query: "",
    }
  );

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if filter in frontend using props data
    onHandleFilter(filters);
    //if filter in backend using query params
    // Build query string only for non-empty values
    const query = Object.entries(filters)
      .filter(([_, value]) => value !== "")
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join("&");

    router.push(`/?${query}`);

    // You can trigger API call or filter logic here
  };

  return (
    <div className="flex flex-wrap justify-evenly gap-3 items-center bg-tertiary p-4 rounded-lg text-slate-200">
      {/* Category */}

      {filterItem.map((item) => (
        <div key={item.id} className="flexCenter bg-white border">
          <select
            name="category"
            value={filters.category}
            onChange={handleChange}
            className="px-4 py-3  rounded-lg  focus:none text-black  outline-none "
          >
            {item.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <MdKeyboardArrowRight size={24} color="black" />
        </div>
      ))}

      {/* Button */}
      <button
        onClick={handleSubmit}
        className="bg-blue-600 hover:bg-blue-700 text-white font-normal px-6 py-3 rounded-lg transition-all"
      >
        Find Product
      </button>
    </div>
  );
}
