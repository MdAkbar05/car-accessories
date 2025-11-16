import Link from "next/link";

export default function HorizontalAdsBanner() {
  return (
    <Link
      href={"/products"}
      style={{
        backgroundImage: "url(/assets/dummy/horizontalBanner.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="px-8 py-8 lg:h-72 md:h-56 h-32 rounded-xl my-8 flex justify-end items-start"
    >
      <span className="inline-block px-4 py-1 text-sm font-medium bg-yellow-400 text-gray-900 rounded-2xl">
        Advertisement
      </span>
    </Link>
  );
}
