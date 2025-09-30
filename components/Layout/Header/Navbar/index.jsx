import { MdMenu } from "react-icons/md";
import Accounts from "./Accounts";
import BrandLogo from "./BrandLogo";
import Search from "./Search";

export default function Navbar() {
  return (
    <nav className="container mx-auto flex justify-between items-center text-black">
      <div className="sm:hidden md:block flex-3/12 flex items-center gap-2">
        <BrandLogo />
      </div>
      <MdMenu className="sm:block md:hidden" size={32} />
      <div className="sm:hidden md:block flex-6/12 border ">
        <Search />
      </div>
      <div className="md:flex-3/12 ">
        <Accounts />
      </div>
    </nav>
  );
}
