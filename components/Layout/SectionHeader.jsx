import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
export default function SectionHeader({ title }) {
  return (
    <>
      <div className="flex justify-between ">
        <h2 className="text-3xl font-bold">{title}</h2>
        <Link
          href={"/products"}
          className="flexCenter gap-2 font-bold text-primary text-xl "
        >
          <span>View All</span>
          <BsArrowRight size={28} />
        </Link>
      </div>
      <hr className="border" />
    </>
  );
}
