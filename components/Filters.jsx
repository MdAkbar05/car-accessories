import ProductFilter from "./FindProduct";

export default async function Filters({ parentFilter }) {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ||
      (process.env.NODE_ENV === "production"
        ? "https://car-accessories-jsr9i7l02-mdakbar05s-projects.vercel.app"
        : "http://localhost:3000");

    const [categoriesRes, brandsRes, modelsRes, enginesRes] = await Promise.all(
      [
        fetch(`${baseUrl}/api/categories`, { cache: "no-store" }),
        fetch(`${baseUrl}/api/products/brands`, { cache: "no-store" }),
        fetch(`${baseUrl}/api/products/models`, { cache: "no-store" }),
        fetch(`${baseUrl}/api/products/engines`, { cache: "no-store" }),
      ]
    );

    // Check for non-OK responses
    if (!categoriesRes.ok || !brandsRes.ok || !modelsRes.ok || !enginesRes.ok) {
      throw new Error("Failed to fetch one or more resources");
    }

    const [categories, brands, models, engines] = await Promise.all([
      categoriesRes.json(),
      brandsRes.json(),
      modelsRes.json(),
      enginesRes.json(),
    ]);

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
  } catch (error) {
    console.error("Error loading filters:", error);

    // You can show a fallback UI or message instead of crashing the page
    return (
      <div className="p-4 text-center text-red-400 bg-tertiary rounded-lg">
        Failed to load filters. Please try again later.
      </div>
    );
  }
}
