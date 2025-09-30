import product1 from "@/public/assets/dummy/product-1.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { PiShuffleAngularBold } from "react-icons/pi";
export default function ProductCard() {
  return (
    <div className="max-w-md  border flexCenter flex-col p-4 gap-2">
      <Link href={"/product"} className="relative h-72 w-full">
        <Image
          src={product1}
          alt="Product Image"
          fill
          className="object-contain "
        />
        <div className="absolute top-6 right-2 border rounded-full  p-2">
          <FaRegHeart className="text-gray-400" size={20} />
        </div>
        <div className="absolute top-20 right-2 border rounded-full  p-2">
          <PiShuffleAngularBold className="text-gray-400" size={20} />
        </div>
      </Link>
      <div className="space-y-2 w-full">
        <h2 className="text-2xl ">
          All star Performance 16 Grit 7 in OD Nail Head Tire
        </h2>
        <p className="text-primary text-lg">Auto Parts</p>
        <p className="text-gray-600 text-lg">Brand: Dunlop</p>
      </div>
      <div className="space-y-2 w-full">
        <p className="line-through text-gray-400">$376</p>
        <b className="text-3xl font-medium">$300</b>
        <p className="text-gray-400">288 Pies Available</p>
      </div>
      <Link
        href={"/product"}
        className="w-full rounded-lg border py-2 text-lg text-primary cursor-pointer border-primary"
      >
        View Details
      </Link>
    </div>
  );
}
