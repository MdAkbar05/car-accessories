import downArray from "@/public/assets/icons/down-arrow.svg";
import Image from "next/image";
import Link from "next/link";
export default function Topbar() {
  return (
    <div className="sm:hidden lg:flex container mx-auto p-2   justify-between   text-base text-black">
      <div className="space-x-10">
        <Link href={"/abouts"}>About Us</Link>
        <Link className="sm:hidden md:inline" href={"/contacts"}>
          Contact Us
        </Link>
      </div>
      <div className="flex gap-10">
        <div className="flex gap-2">
          <span>English</span>
          <Image src={downArray} alt="downArray" width={10} height={10} />
        </div>
        <div className="flex gap-2">
          <span>BDT</span>
          <Image src={downArray} alt="downArray" width={10} height={10} />
        </div>
      </div>
    </div>
  );
}
