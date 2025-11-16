import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Filters from "@/components/Filters";
import Accounts from "@/components/Layout/Header/Navbar/Accounts";
import BrandLogo from "@/components/Layout/Header/Navbar/BrandLogo";
import MobileNav from "@/components/Layout/Header/Navbar/MobileNav";
import Search from "@/components/Layout/Header/Navbar/Search";
import { getServerSession } from "next-auth";

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="container mx-auto flex justify-between items-center text-black  px-2">
      <div className="sm:hidden md:flex flex-3/12  items-center ">
        <BrandLogo />
      </div>
      <MobileNav />
      <div className="sm:hidden lg:block flex-6/12  ">
        <Search>
          <Filters />
        </Search>
      </div>
      <div className="md:flex-3/12 flex justify-end ">
        <Accounts session={session} />
      </div>
    </nav>
  );
}
