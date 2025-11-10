import ProductFilter from "./FindProduct";

export default async function Filters({ parentFilter }) {
  const categories = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`
  ).then((r) => r.json());
  const [brands, models, engines] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/brands`).then((r) =>
      r.json()
    ),
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/models`).then((r) =>
      r.json()
    ),
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/engines`).then(
      (r) => r.json()
    ),
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
}
