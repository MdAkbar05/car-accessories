"use client";
import { submitReview } from "@/lib/submitReview";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function ReviewForm({ productId }) {
  const [form, setForm] = useState({
    productId: productId,
    rating: 0,
    comment: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await submitReview(form);
      if (result?.success) {
        setSuccess(true);
        setForm({ rating: 0, comment: "", productId: productId });
      }
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white   space-y-4">
      <h3 className="text-2xl font-semibold text-primary">Write a Review</h3>

      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            size={24}
            className={`cursor-pointer ${
              star <= form.rating ? "text-yellow-400" : "text-gray-300"
            }`}
            onClick={() => setForm({ ...form, rating: star })}
          />
        ))}
      </div>

      <textarea
        name="comment"
        placeholder="Write your review..."
        rows={3}
        value={form.comment}
        onChange={(e) => setForm({ ...form, comment: e.target.value })}
        className="w-full border border-gray-300 p-2 rounded-md focus:outline-primary"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit Review"}
      </button>

      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && (
        <p className="text-green-600 text-sm font-medium">
          ✅ Review added successfully!
        </p>
      )}
    </form>
  );
}
