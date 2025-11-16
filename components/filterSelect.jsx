"use client";

import { MdKeyboardArrowRight } from "react-icons/md";

export default function FilterSelect({
  label,
  name,
  value,
  options = [],
  onChange,
  loading,
  category,
}) {
  return (
    <div className="flex items-center bg-white border rounded-lg overflow-hidden">
      {loading ? (
        <span className="px-4 py-3 rounded-lg text-black animate-pulse">
          Loading...
        </span>
      ) : (
        <select
          name={name}
          aria-label={label}
          value={value}
          onChange={onChange}
          className="px-4 py-3 rounded-lg focus:outline-none text-black"
        >
          <option value="">{`Select ${label}`}</option>
          {options.map((opt, i) => (
            <option key={i} value={category ? opt.id : opt}>
              {category ? opt.name : opt}
            </option>
          ))}
        </select>
      )}
      <MdKeyboardArrowRight size={22} color="black" />
    </div>
  );
}
