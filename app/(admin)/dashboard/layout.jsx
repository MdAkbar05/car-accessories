import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import BrandLogo from "@/components/Layout/Header/Navbar/BrandLogo";
import SignoutButton from "@/components/Layout/Header/Navbar/SignoutButton";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function DashboardLayout({ children, stats, orders }) {
  const session = await getServerSession(authOptions);
  // get pathname of current page

  return (
    <>
      <aside className="  border-b border-[1px] border-[#151E2E] px-2 h-screen py-4 flex flex-col justify-between">
        <div className="space-y-6">
          <h1 className="text-2xl text-blue-400 uppercase whitespace-nowrap">
            {" "}
            <BrandLogo />
          </h1>
          {/* menu 1  */}
          <div className="space-y-2">
            <p className="text-gray-500 px-3">MENU</p>
            <hr className="border border-[0.5px] border-[#151E2E]" />
            <div className="flex flex-col gap-3 ">
              <Link
                href="/dashboard"
                className="py-2 px-3 hover:bg-[#151E2E] transition-all rounded-md font-medium uppercase text-sm"
              >
                Home
              </Link>
              <Link
                href="/dashboard/products"
                className="py-2 px-3 hover:bg-[#151E2E] transition-all rounded-md font-medium uppercase text-sm"
              >
                Products
              </Link>
              <Link
                href="/dashboard/categories"
                className="py-2 px-3 hover:bg-[#151E2E] transition-all rounded-md font-medium uppercase text-sm"
              >
                Categories
              </Link>
            </div>
          </div>
          {/* menu 2  */}
          <div className="space-y-2">
            <p className="text-gray-500 px-3">MENU</p>
            <hr className="border border-[0.5px] border-[#151E2E]" />
            <div className="flex flex-col gap-3 ">
              <Link
                href="/dashboard/notifications"
                className="py-2 px-3 hover:bg-[#151E2E] transition-all rounded-md font-medium uppercase text-sm"
              >
                Notifications
              </Link>
              <Link
                href="/dashboard/messages"
                className="py-2 px-3 hover:bg-[#151E2E] transition-all rounded-md font-medium uppercase text-sm"
              >
                Messages
              </Link>
              <Link
                href="/dashboard/settings"
                className="py-2 px-3 hover:bg-[#151E2E] transition-all rounded-md font-medium uppercase text-sm"
              >
                Settings
              </Link>
            </div>
          </div>
        </div>
        {/* // get pro version button  */}
        <div className="space-y-2 ">
          <p className="text-gray-500 px-3">Get Pro Version</p>
          <hr className="border border-[0.5px] border-[#151E2E]" />
          <ul className="space-y-3">
            <Link
              href="/dashboard/upgrade"
              className="py-2 px-3 hover:bg-[#151E2E] transition-all rounded-md font-medium uppercase text-sm"
            >
              <li>Upgrade Now</li>
            </Link>
          </ul>
        </div>
      </aside>
      <section className="flex flex-col items-start justify-start w-full">
        <nav className="border-b border-[#151E2E] px-4 py-3 flex justify-between h-16 w-full">
          <div className="flex justify-between items-center border-2 border-purple-800 drop-shadow-md px-4 py-2 rounded-2xl text-gray-600">
            <span>🔍</span>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search or type command.."
              className="outline-none focus:outline-none px-8"
            />
            <span>Enter</span>
          </div>
          {session && (
            <div className="flex items-center gap-4">
              <img
                src={session?.user?.image}
                alt={session?.user?.name}
                className="w-10 h-10 rounded-full"
              />
              <span className="text-gray-200 uppercase">
                {session?.user?.name}
              </span>
              <SignoutButton />
            </div>
          )}
        </nav>
        <section className="w-full p-2">
          <div className="w-full space-y-8 text-[#E8E8EA]">
            <div>
              <h1 className="text-3xl font-semibold text-blue-400">
                Welcome to Your Dashboard 👋
              </h1>
              <p className="text-gray-400 mt-1">
                Overview of your store’s performance and activities.
              </p>
            </div>
            {stats}
            {orders}
            {children}
          </div>
        </section>
      </section>
    </>
  );
}
