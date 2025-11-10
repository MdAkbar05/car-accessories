"use client";

export default function Loading() {
  return (
    <section aria-busy="true" className="px-4 py-8 max-w-7xl mx-auto">
      <div className="space-y-6">
        {/* Page heading skeleton */}
        <div className="h-8 w-1/3 bg-gray-200 dark:bg-neutral-700 rounded-md animate-pulse" />

        {/* Filters / controls skeleton */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-40 bg-gray-200 dark:bg-neutral-700 rounded-md animate-pulse" />
            <div className="h-10 w-28 bg-gray-200 dark:bg-neutral-700 rounded-md animate-pulse" />
          </div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-20 bg-gray-200 dark:bg-neutral-700 rounded-md animate-pulse" />
            <div className="h-10 w-20 bg-gray-200 dark:bg-neutral-700 rounded-md animate-pulse" />
          </div>
        </div>

        {/* Grid of product card skeletons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <article key={i} className="space-y-3">
              <div className="w-full h-44 bg-gray-200 dark:bg-neutral-700 rounded-lg animate-pulse" />
              <div className="h-3 w-3/4 bg-gray-200 dark:bg-neutral-700 rounded-md animate-pulse" />
              <div className="h-3 w-1/2 bg-gray-200 dark:bg-neutral-700 rounded-md animate-pulse" />
              <div className="h-8 w-full bg-gray-200 dark:bg-neutral-700 rounded-md animate-pulse mt-2" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
