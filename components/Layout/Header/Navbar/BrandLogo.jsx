import Logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
export default function BrandLogo() {
  return (
    <Link href={"/"} className="flex items-center gap-4 ">
      <div className="relative w-12 h-12">
        <Image src={Logo} alt="logo" fill className="object-contain" />
      </div>
      <h2 className="text-3xl font-semibold text-primary">Best Parts</h2>
    </Link>
  );
}
