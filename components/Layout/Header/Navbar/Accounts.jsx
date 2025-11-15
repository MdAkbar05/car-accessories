"use client";
import CartIcon from "@/public/assets/icons/cart.svg";
import HeartIcon from "@/public/assets/icons/heart.svg";
import UserIcon from "@/public/assets/icons/user.svg";
import useCartStore from "@/store/cartStore";
import Image from "next/image";
import Link from "next/link";
import SignoutButton from "./SignoutButton";

export default function Accounts({ session }) {
  const { totalItem } = useCartStore((state) => state);

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
          <span
            className={`absolute -top-1 -right-1 w-2 h-2  rounded-full flex justify-center items-center`}
          ></span>
        </Link>
        <Link href={"/cart"} className="relative">
          {" "}
          <Image src={CartIcon} alt="CartIcon" width={24} height={24} />{" "}
          <span className="absolute -top-2 -right-2 w-5 h-5 bg-secondary rounded-full flex justify-center items-center">
            {totalItem}
          </span>
        </Link>
      </div>
      {session?.user ? (
        <div className="flex gap-2 justify-end items-center ">
          {session.user?.image ? (
            <Link href={"/profile"}>
              <Image
                src={session.user?.image}
                className="rounded-full w-10 h-10 grid place-items-center text-white"
                alt="UserIcon"
                width={24}
                height={24}
              />
            </Link>
          ) : (
            <Link
              href={"/profile"}
              className="bg-orange-800 rounded-full w-10 h-10 grid place-items-center text-white"
            >
              {session.user.name.slice(0, 2).toUpperCase()}
            </Link>
          )}

          <SignoutButton />
        </div>
      ) : (
        <div className="flex md:gap-6 sm:gap-2">
          <Image src={UserIcon} alt="UserIcon" width={24} height={24} />
          <Link href={"/login"} className="flex flex-col items-start">
            <span className="md:text-lg text-sm text-gray-400 ">Sign in</span>
            <span className="text-base  md:text-xl font-semibold">Account</span>
          </Link>
        </div>
      )}
    </div>
  );
}
