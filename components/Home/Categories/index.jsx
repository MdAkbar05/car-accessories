import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <section className="my-8 flex justify-between gap-8 items-center sm:flex-wrap lg:flex-nowrap">
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </section>
  );
}
