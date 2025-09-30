import CartIcon from "@/public/assets/icons/cart.svg";
import HeartIcon from "@/public/assets/icons/heart.svg";
import UserIcon from "@/public/assets/icons/user.svg";
import Image from "next/image";
import Link from "next/link";

export default function Accounts() {
  const value = {
    cart: 2,
    wishlist: 3,
  };
  return (
    <div className="flex justify-around">
      <div className="sm:hidden md:flex flex gap-6 items-center">
        <Link href={"/wishlist"} className="relative">
          <Image
            className=""
            src={HeartIcon}
            alt="HeartIcon"
            width={24}
            height={24}
          />{" "}
          <span className="absolute -top-2 -right-2 w-5 h-5 bg-secondary rounded-full flex justify-center items-center">
            {value.cart}
          </span>
        </Link>
        <Link href={"/cart"} className="relative">
          {" "}
          <Image src={CartIcon} alt="CartIcon" width={24} height={24} />{" "}
          <span className="absolute -top-2 -right-2 w-5 h-5 bg-secondary rounded-full flex justify-center items-center">
            {value.wishlist}
          </span>
        </Link>
      </div>
      <div className="flex gap-6">
        <Image src={UserIcon} alt="UserIcon" width={24} height={24} />
        <Link href={"/login"} className="flex flex-col items-start">
          <span className="text-lg text-gray-400 ">Sign in</span>
          <span className="text-xl font-semibold">Account</span>
        </Link>
      </div>
    </div>
  );
}
