"use client";

export default function HeroBanner() {
  return (
    <div
      style={{
        backgroundImage: "url(/assets/dummy/heroBanner.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="px-8 md:py-32 sm:py-4 md:rounded-xl md:w-auto sm:w-96 sm:h-64 md:h-auto "
    >
      <div className="md:space-y-8 sm:space-y-2">
        <div className="space-y-4">
          <span className="inline-block px-4 py-1 text-sm font-medium bg-yellow-400 text-gray-900 rounded-2xl">
            Best Selling
          </span>

          {/* Heading */}
          <h1 className="text-2xl md:text-5xl font-light text-gray-900 leading-tight">
            Get Your Car Parts <br />
            <span className="text-black font-bold">From home</span>
          </h1>
        </div>

        {/* Discount text */}
        <p className="text-lg ">
          Offering up to <span className="font-medium">27% Discount</span>
        </p>

        {/* Button */}
        <button className="md:px-6 sm:px-3 sm:py-1 md:py-3 bg-primary text-white rounded-4xl shadow hover:bg-blue-700 transition cursor-pointer">
          View Products
        </button>
      </div>
    </div>
  );
}
