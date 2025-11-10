"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function AddProductModal({
  isOpen,
  onClose,
  onAdded,
  isUpdate,
  setIsUpdate,
  product,
}) {
  const [form, setForm] = useState({
    name: "",
    stock: 0,
    brand: "",
    model: "",
    engine: "",
    price: 0,
    description: "",
    specification: "",
    categoryId: "",
  });

  useEffect(() => {
    if (isUpdate) {
      setForm({
        name: product.name,
        stock: product.stock,
        brand: product.brand,
        model: product.model,
        engine: product.engine,
        price: product.price,
        description: product.description,
        specification: product.specification,
        categoryId: product.categoryId,
      });
      setImages(product.images);
    } else {
      setForm({
        name: "",
        stock: 0,
        brand: "",
        model: "",
        engine: "",
        price: 0,
        description: "",
        specification: "",
        categoryId: "",
      });
      setImages([]);
    }
  }, [isUpdate, product]);

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [engines, setEngines] = useState([]);

  useEffect(() => {
    if (!isOpen) return;
    const fetchAll = async () => {
      try {
        const [cat, brand, model, engine] = await Promise.all([
          fetch("/api/categories").then((r) => r.json()),
          fetch("/api/products/brands").then((r) => r.json()),
          fetch("/api/products/models").then((r) => r.json()),
          fetch("/api/products/engines").then((r) => r.json()),
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
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (isUpdate) {
      form.images = images;
    }

    if (isUpdate) {
      const res = await fetch(`/api/products/${product.id}`, {
        method: "PUT",
        body: JSON.stringify(form),
      });
      console.log(res);
      const data = await res.json();
      console.log(data);
      setLoading(false);
      if (res.ok) {
        toast.success("Product added successfully");
        onAdded?.();
        onClose();
      } else {
        toast.error("Failed to add product");
        setLoading(false);
      }
    } else {
      const fd = new FormData();
      for (const key in form) {
        fd.append(key, form[key]);
      }
      for (const image of images) {
        fd.append("images", image); // image should be a File object
      }
      console.log(fd);
      const res = await fetch("/api/products", {
        method: "POST",
        body: fd,
      });
      const data = await res.json();
      console.log(data);
      setLoading(false);
      if (res.ok) {
        toast.success("Product added successfully");
        onAdded?.();
        onClose();
      } else {
        toast.error("Failed to add product");
        setLoading(false);
      }
    }
    setLoading(false);
    setIsUpdate(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
      onClick={() => {
        onClose();
        setIsUpdate(false);
      }}
    >
      <div
        className="max-w-6xl mx-auto px-6 py-8 text-[#E8E8EA]"
        onClick={(e) => e.stopPropagation()}
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-[#151E2E] border border-[#1E293B] p-6 rounded-2xl shadow-lg"
        >
          <h1 className="text-2xl font-semibold mb-8 text-blue-400 uppercase tracking-wide  gap-2 flex justify-between items-center">
            <span>🧾 Add New Product</span>
            <button
              onClick={() => {
                onClose();
                setIsUpdate(false);
              }}
              className="text-gray-400 hover:text-white text-3xl leading-none "
            >
              &times;
            </button>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Product Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-[#101828] border border-[#1E293B] text-[#E8E8EA] rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-500"
              required
            />

            <input
              type="number"
              placeholder="Stock In"
              value={form.stock}
              onChange={(e) => setForm({ ...form, stock: e.target.value })}
              className="bg-[#101828] border border-[#1E293B] text-[#E8E8EA] rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-500"
              required
            />
            <input
              type="number"
              placeholder="Price"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              className="bg-[#101828] border border-[#1E293B] text-[#E8E8EA] rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-500"
              required
            />
            {/* Brand Dropdown */}
            <select
              value={form.brand}
              onChange={(e) => setForm({ ...form, brand: e.target.value })}
              className="bg-[#101828] border border-[#1E293B] text-[#E8E8EA] rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            >
              <option value="">Select Brand</option>
              {brands.map((brand, index) => (
                <option key={index} value={brand}>
                  {brand}
                </option>
              ))}
            </select>

            {/* Model Dropdown */}
            <select
              value={form.model}
              onChange={(e) => setForm({ ...form, model: e.target.value })}
              className="bg-[#101828] border border-[#1E293B] text-[#E8E8EA] rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            >
              <option value="">Select Model</option>
              {models.map((model, index) => (
                <option key={index} value={model}>
                  {model}
                </option>
              ))}
            </select>

            {/* Engine Dropdown */}
            <select
              value={form.engine}
              onChange={(e) => setForm({ ...form, engine: e.target.value })}
              className="bg-[#101828] border border-[#1E293B] text-[#E8E8EA] rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            >
              <option value="">Select Engine</option>
              {engines.map((engine, index) => (
                <option key={index} value={engine}>
                  {engine}
                </option>
              ))}
            </select>
          </div>
          {/* Category Dropdown */}
          <select
            value={form.categoryId}
            onChange={(e) => setForm({ ...form, categoryId: e.target.value })}
            className="bg-[#101828] border border-[#1E293B] text-[#E8E8EA] rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.id || cat._id} value={cat.id || cat._id}>
                {cat.name}
              </option>
            ))}
          </select>

          <textarea
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="bg-[#101828] border border-[#1E293B] text-[#E8E8EA] rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-500"
            rows={3}
            required
          />

          <textarea
            placeholder="Specification"
            value={form.specification}
            onChange={(e) =>
              setForm({ ...form, specification: e.target.value })
            }
            className="bg-[#101828] border border-[#1E293B] text-[#E8E8EA] rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-500"
            rows={3}
          />

          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => setImages([...e.target.files])}
            className="bg-[#101828] border border-[#1E293B] text-gray-400 rounded-lg p-3 cursor-pointer file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:bg-blue-600"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Uploading..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
}
