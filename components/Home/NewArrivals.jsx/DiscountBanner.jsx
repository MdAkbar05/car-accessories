import product1 from "@/public/assets/dummy/product-1.webp";
import Image from "next/image";
import Link from "next/link";
export default function DiscountBanner() {
  return (
    <div className="border space-y-4 py-8 ">
      <div className="flexCenter flex-col gap-4">
        <p className="text-primary text-base">ONGOING SALE</p>
        <h1 className="font-bold text-3xl">Car Tires</h1>
        <p className="text-base">Shop Now & Get UP TO 70% DISCOUNT</p>
        <Link
          href="/products"
          className="bg-primary text-white px-10 py-2 rounded-full text-lg"
        >
          View
        </Link>
      </div>
      <div className="relative h-72 w-full">
        <Image
          src={product1}
          alt="Product Image"
          fill
          className="object-contain "
        />
      </div>
    </div>
  );
}
