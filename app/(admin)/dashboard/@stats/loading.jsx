export default function Loading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="bg-[#151E2E] p-5 rounded-xl border border-[#1E293B] shadow-sm"
        >
          {/* Title skeleton */}
          <div className="h-4 w-20 bg-[#1E293B] rounded-md animate-pulse" />

          {/* Value skeleton */}
          <div className="mt-4 h-8 w-24 bg-[#1E293B] rounded-md animate-pulse" />

          {/* Stat change skeleton */}
          <div className="mt-2 h-4 w-32 bg-[#1E293B] rounded-md animate-pulse" />
        </div>
      ))}
    </div>
  );
}
