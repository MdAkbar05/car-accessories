import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full bg-zinc-900 text-white p-16 justify-between">
        {/* Top Section */}
        <div tw="flex justify-between w-full">
          <span tw="text-5xl font-bold">Car Accessories BD</span>

          <span tw="bg-red-600 px-6 py-3 rounded-xl text-2xl font-semibold">
            Online Store
          </span>
        </div>

        {/* Middle Content */}
        <div tw="mt-10 flex flex-col">
          <span tw="text-7xl font-extrabold leading-tight">
            Get Your Car Parts <br /> From Home
          </span>

          <span tw="text-2xl mt-4 opacity-70 max-w-[80%]">
            Premium batteries, accessories, tools & more — delivered anywhere in
            Bangladesh.
          </span>
        </div>

        {/* Bottom Bar */}
        <div tw="flex justify-between text-xl opacity-70 border-t border-zinc-700 pt-4">
          <span>car-accessories-bd.vercel.app</span>
          <span>🚗 Quality Parts, Fast Delivery</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
