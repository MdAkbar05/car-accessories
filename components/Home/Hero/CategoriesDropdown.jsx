import DropdownMenu from "@/components/Home/Hero/dropdownMenu";
import { getCategories } from "@/lib/getCategories";
import downArrow from "@/public/assets/icons/down-arrow.svg";
import racing from "@/public/assets/icons/racing.svg";
import Image from "next/image";
import Link from "next/link";
export default async function CategoriesDropdown() {
  const categories = await getCategories();

  return (
    <div className="sm:hidden lg:block border text-black flex-2/12 h-fit">
      <DropdownMenu categories={categories} />
      <div className="flex flex-col">
        {categories.map((category) => (
          <Link
            href={`/products?category=${category.id}`}
            key={category.id}
            className="border-b border-border px-6 py-5 cursor-pointer"
          >
            <div className="flex  justify-between items-center ">
              <div className="flex justify-between gap-4">
                <Image
                  src={racing}
                  alt={category.name}
                  aria-label="Categories"
                  width={24}
                  height={24}
                  priority
                />
                <span>{category.name}</span>
              </div>
              <Image
                className="-rotate-90 "
                src={downArrow}
                alt="downArrow"
                width={18}
                height={18}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
