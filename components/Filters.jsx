"use client";
import ProductFilter from "@/components/FindProduct";
import { getBrands } from "@/lib/getBrands";
import { getCategories } from "@/lib/getCategories";
import { getEngines } from "@/lib/getEngines";
import { getModels } from "@/lib/getModels";
import { useEffect, useState } from "react";

export default function Filters({ parentFilter }) {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [engines, setEngines] = useState([]);

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

  return (
    <div className="flex flex-wrap justify-evenly gap-3 items-center bg-tertiary p-4 rounded-lg text-slate-200">
      <ProductFilter
        key={Math.random()}
        categories={categories}
        brands={brands}
        models={models}
        engines={engines}
        parentFilter={parentFilter}
      />
    </div>
  );
}
