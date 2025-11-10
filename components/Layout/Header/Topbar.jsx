import downArray from "@/public/assets/icons/down-arrow.svg";
import Image from "next/image";
import Link from "next/link";
export default function Topbar() {
  return (
    <div className="container mx-auto my-2 flex justify-between text-base text-black px-2">
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
