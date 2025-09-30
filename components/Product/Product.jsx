import { FaStar } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoGitCompareOutline, IoWarning } from "react-icons/io5";
import { VscSend } from "react-icons/vsc";

import ImageSection from "./ImageSection";

export default function Product() {
  return (
    <section className="space-y-4 mt-8 mb-20 flex items-center justify-between">
      <ImageSection />
      <div className="flex-8/12 px-10">
        <div className="space-y-3">
          <p className="text-lg text-primary">Auto Parts</p>
          <h2 className="text-4xl font-semibold">
            Allstar Performance 16 Grit 7 in OD Nail Head Tire
          </h2>
          <p className="text-gray-300">Brand: Dunlop</p>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-semibold flex">
              <FaStar color="orange" size={18} />
              <FaStar color="orange" size={18} />
              <FaStar color="orange" size={18} />
              <FaStar color="gray" size={18} />
              <FaStar color="gray" size={18} />
            </span>
            <span className="text-black text-lg font-bold">
              4.8 <span className="text-gray-400">(289)</span>
            </span>
            <span>2477 reviews</span>
          </div>
          <div className="flex gap-2 items-center">
            <p className="line-through text-gray-400">$300</p>
            <h2 className="text-3xl font-semibold">$764</h2>
          </div>
          <p className="text-red-500 flex items-center text-lg gap-2">
            <IoWarning size={24} /> <span>Limited quantity available</span>
          </p>
          <div className="flex gap-4 py-8">
            <p className="flex items-center gap-2">
              <IoGitCompareOutline color="gray" size={24} />
              <span>Add to compare</span>
            </p>
            <p className="flex items-center gap-2">
              <IoMdHeartEmpty color="gray" size={24} />
              <span>Add to wishlist</span>
            </p>
          </div>
          <button className="bg-transparent border border-primary text-black hover:bg-primary hover:text-white transition-all p-3 rounded-lg inline-flex cursor-pointer">
            Submit Review
          </button>
        </div>
      </div>
      <div className="border border-border rounded-lg p-6 space-y-8">
        <div className="space-y-2">
          <h4 className="text-2xl text-primary">Contact With Seller</h4>
          <p className="text-lg text-gray-400">
            Choose how many product you want to purchase & get guaranteed
            delivery discount
          </p>
        </div>
        <form action="" className="space-y-8">
          <div className="flex items-center gap-2">
            <VscSend color="black" size={24} />
            <textarea
              type="text"
              className="focus:outline-none border border-border p-1"
              placeholder="Seller Name &#10; +88010000000000"
            />
          </div>
          <button className="block bg-primary border border-primary  text-white hover:bg-transparent hover:text-primary transition-all p-3 rounded-lg w-full cursor-pointer">
            Request for a question
          </button>
        </form>
      </div>
    </section>
  );
}
