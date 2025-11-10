import product1 from "@/public/assets/dummy/product-1.jpg";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
export default function CategoryCard() {
  return (
    <div className="flex justify-start items-center gap-4 border py-8 px-12">
      <Image src={product1} alt="Product Image" width={200} height={200} />
      <div className="space-y-2">
        <h2 className="text-xl ">Parts & Accessories</h2>
        <p className="text-gray-600">Exhaust System</p>
        <p className="text-gray-600">Fluids & Chemicals</p>
        <p className="text-gray-600">Performance</p>
        <p className="text-gray-600">Starting & Charging</p>
        <Link
          href={"/products"}
          className="flex gap-2 font-bold text-primary text-xl "
        >
          <span>View All</span>
          <BsArrowRight size={28} />
        </Link>
      </div>
    </div>
  );
}
