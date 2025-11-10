"use client";

export default function Loading() {
  return (
    <section aria-busy="true" className="space-y-6 px-4 py-6">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb / small header skeleton */}
        <div className="h-4 w-48 bg-gray-200 dark:bg-neutral-700 rounded-md animate-pulse mb-6" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Image column */}
          <div className="lg:col-span-5 flex items-start">
            <div className="w-full rounded-lg overflow-hidden">
              <div className="w-full h-[420px] bg-gray-200 dark:bg-neutral-700 rounded-lg animate-pulse" />
              <div className="mt-4 grid grid-cols-4 gap-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-20 bg-gray-200 dark:bg-neutral-700 rounded-md animate-pulse"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Details column */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              <div className="h-8 w-3/4 bg-gray-200 dark:bg-neutral-700 rounded-md animate-pulse" />
              <div className="h-6 w-1/3 bg-gray-200 dark:bg-neutral-700 rounded-md animate-pulse" />

              <div className="flex items-center gap-4 mt-2">
                <div className="h-10 w-28 bg-gray-200 dark:bg-neutral-700 rounded-md animate-pulse" />
                <div className="h-10 w-20 bg-gray-200 dark:bg-neutral-700 rounded-md animate-pulse" />
              </div>

              <div className="border-t border-neutral-200 dark:border-neutral-800 mt-4 pt-4">
                <div className="space-y-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-4 w-full max-w-lg bg-gray-200 dark:bg-neutral-700 rounded-md animate-pulse"
                    />
                  ))}
                </div>
              </div>

              {/* Tabs / content skeleton */}
              <div className="mt-6">
                <div className="flex gap-3 mb-4">
                  {["Overview", "Specifications", "Reviews"].map((label, i) => (
                    <div
                      key={i}
                      className="h-8 w-28 bg-gray-200 dark:bg-neutral-700 rounded-md animate-pulse"
                    />
                  ))}
                </div>
                <div className="space-y-3">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-4 bg-gray-200 dark:bg-neutral-700 rounded-md animate-pulse"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related / similar products */}
        <div className="mt-10">
          <h3 className="sr-only">Related products loading</h3>
          <div className="mb-4 h-6 w-40 bg-gray-200 dark:bg-neutral-700 rounded-md animate-pulse" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="w-full h-36 bg-gray-200 dark:bg-neutral-700 rounded-md animate-pulse" />
                <div className="h-3 w-3/4 bg-gray-200 dark:bg-neutral-700 rounded-md animate-pulse" />
                <div className="h-3 w-1/3 bg-gray-200 dark:bg-neutral-700 rounded-md animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
