import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Filters from "@/components/Filters";
import Accounts from "@/components/Layout/Header/Navbar/Accounts";
import BrandLogo from "@/components/Layout/Header/Navbar/BrandLogo";
import Search from "@/components/Layout/Header/Navbar/Search";
import { getServerSession } from "next-auth";
import { MdMenu } from "react-icons/md";

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="container mx-auto flex justify-between items-center text-black">
      <div className="sm:hidden md:block flex-3/12 flex items-center gap-2">
        <BrandLogo />
      </div>
      <MdMenu className="sm:block md:hidden" size={32} />
      <div className="sm:hidden md:block flex-6/12 border ">
        <Search>
          <Filters />
        </Search>
      </div>
      <div className="md:flex-3/12 ">
        <Accounts session={session} />
      </div>
    </nav>
  );
}
