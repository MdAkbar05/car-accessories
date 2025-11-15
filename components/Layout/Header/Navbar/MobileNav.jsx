"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BiCategory } from "react-icons/bi";
import { IoMdClose, IoMdMenu } from "react-icons/io";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Failed to load categories:", err));
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      {/* Mobile Navigation Toggle */}
      <div className="md:hidden flex items-center justify-between px-4 py-3">
        <button onClick={toggleMenu} className="text-2xl text-gray-800">
          {isOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col gap-1 p-4">
            {/* Home */}
            <Link
              href="/"
              onClick={closeMenu}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
            >
              Home
            </Link>

            {/* Products */}
            <Link
              href="/products"
              onClick={closeMenu}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
            >
              Products
            </Link>

            {/* Categories Collapsible */}
            <button
              onClick={() => setShowCategories(!showCategories)}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition text-left flex items-center gap-2 w-full"
            >
              <BiCategory size={20} />
              Categories
              <span
                className={`ml-auto transition-transform ${
                  showCategories ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {/* Categories List */}
            {showCategories && (
              <div className="ml-4 flex flex-col gap-1 border-l-2 border-primary pl-2">
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/products?category=${cat.id}`}
                    onClick={closeMenu}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition text-sm"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}

            {/* About */}
            <Link
              href="/abouts"
              onClick={closeMenu}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
            >
              About
            </Link>

            {/* Contact */}
            <Link
              href="/contacts"
              onClick={closeMenu}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
            >
              Contact
            </Link>

            {/* Divider */}
            <hr className="my-2 border-gray-200" />

            {/* Quick Links */}
            <Link
              href="/wishlist"
              onClick={closeMenu}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
            >
              ❤️ Wishlist
            </Link>
            <Link
              href="/cart"
              onClick={closeMenu}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
            >
              🛒 Cart
            </Link>
            <Link
              href="/profile"
              onClick={closeMenu}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
            >
              👤 Profile
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
