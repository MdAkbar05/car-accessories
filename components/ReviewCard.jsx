export default function ReviewCard({ review }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-5 flex flex-col justify-between hover:shadow-lg transition">
      <div>
        <h3 className="font-semibold text-gray-800 mb-1">
          {review.product?.name || "Deleted Product"}
        </h3>
        <p className="text-sm text-gray-500 mb-3">
          Rated: ⭐ {review.rating}/5
        </p>
        <p className="text-gray-700 text-sm">{review.comment}</p>
      </div>
      <div className="mt-4 text-right text-xs text-gray-400">
        {new Date(review.createdAt).toLocaleDateString()}
      </div>
    </div>
  );
}
