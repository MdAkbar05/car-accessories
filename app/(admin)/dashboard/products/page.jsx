"use client";
import AddProductModal from "@/app/(admin)/dashboard/_components/AddProduct";
import { deleteProductById } from "@/lib/deleteProductById";
import { getProducts } from "@/lib/getProducts";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});

  const handleAdded = async () => {
    // Refresh product list after new product added
    const data = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    console.log("reached");
    handleAdded();
  }, []);

  const handleDelete = async (id) => {
    const data = await deleteProductById(id);
    console.log(data);
    handleAdded();
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 text-[#E8E8EA]">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-blue-400 uppercase tracking-wide">
          🛒 Products List
        </h1>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200"
        >
          + Add Product
        </button>
      </div>

      {/* Example Table */}
      <div className="bg-[#151E2E] border border-[#1E293B] rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-[#101828] text-gray-400 uppercase text-sm">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Name</th>
              <th className="p-3">Brand</th>
              <th className="p-3">Price</th>
              <th className="p-3">Stock</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            {products.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  No products found
                </td>
              </tr>
            ) : (
              products.map((p, i) => (
                <tr key={p.id} className="hover:bg-[#1E293B]/50">
                  <td className="p-3">{i + 1}</td>
                  <td className="p-3">{p.name}</td>
                  <td className="p-3">{p.brand}</td>
                  <td className="p-3">${p.price}</td>
                  <td className="p-3">{p.stock}</td>
                  <td className="p-3 space-x-2">
                    <span
                      className="hover:bg-amber-950 cursor-pointer px-2 py-1 rounded-md text-amber-400 hover:text-white"
                      onClick={() => {
                        setProduct(p);
                        setIsUpdate(true);
                        setIsOpen(true);
                      }}
                    >
                      Edit
                    </span>
                    <span
                      className="hover:bg-red-600 cursor-pointer px-2 py-1 rounded-md text-red-400 hover:text-white"
                      onClick={() => handleDelete(p.id)}
                    >
                      Delete
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <AddProductModal
        product={product}
        isOpen={isOpen}
        isUpdate={isUpdate}
        setIsUpdate={setIsUpdate}
        onClose={() => setIsOpen(false)}
        onAdded={handleAdded}
      />
    </div>
  );
}
