"use client";
import { FaStar } from "react-icons/fa";
import { IoMdDoneAll } from "react-icons/io";
import { IoGitCompareOutline, IoWarning } from "react-icons/io5";
import { VscSend } from "react-icons/vsc";

import ImageSection from "@/components/Product/ImageSection";
import ReviewForm from "@/components/Product/ReviewForm";
import useCartStore from "@/store/cartStore";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import WishlistButton from "./WishlistButton";

export default function Product({ product }) {
  const router = useRouter();
  const { addToCart, cartItems } = useCartStore((state) => state);
  const item = cartItems.find((item) => item.id === product.id);
  let avgRating =
    product?.reviews.reduce((sum, r) => sum + r.rating, 0) /
    product?.reviews.length;

  let whiteStar;
  let yellowStar;

  if (avgRating > 0) {
    yellowStar = Math.floor(avgRating);
    whiteStar = 5 - yellowStar;
  } else {
    yellowStar = 0;
    whiteStar = 5;
  }

  return (
    <section className="space-y-4 mt-6 mb-10 flex sm:flex-col lg:flex-row items-start justify-between">
      <ImageSection images={product?.images} />
      <div className="flex-8/12 px-10">
        <div className="lg:space-y-3 sm:space-y-1">
          <p className="lg:text-lg sm:text-base text-primary">
            {product?.category?.name}
          </p>
          <h2 className="lg:text-4xl sm:text-2xl font-semibold">
            {product?.name}
          </h2>
          <p className="text-gray-300">Brand: {product?.brand}</p>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-semibold flex">
              {product && (
                <>
                  {Array(yellowStar)
                    .fill()
                    .map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" size={18} />
                    ))}
                  {Array(whiteStar)
                    .fill()
                    .map((_, i) => (
                      <FaStar key={i} className=" text-gray-400" size={18} />
                    ))}
                </>
              )}
            </span>
            <span className="text-black text-lg font-bold">
              {product?.reviews?.length > 0
                ? product?.reviews
                    ?.map((r) => r.rating)
                    .reduce((a, b) => a + b, 0) / product?.reviews?.length
                : 5}
              <span className="text-gray-400 ml-2">
                ({product?.reviews?.length || 0} reviews)
              </span>
            </span>
          </div>
          <div className="flex gap-2 items-center">
            {/* Discount 5% off  */}
            <h2 className="lg:text-3xl text-xl font-semibold">
              ${Number(product?.price * 0.95).toFixed(2)}
            </h2>
            <p className="line-through text-gray-400">${product?.price}</p>
          </div>
          {product?.stock ? (
            <p className="text-green-500 flex items-center text-lg gap-2">
              <IoMdDoneAll size={24} /> <span> {product?.stock} Available</span>
            </p>
          ) : (
            <p className="text-red-500 flex items-center text-lg gap-2">
              <IoWarning size={24} /> <span>Out of stock</span>
            </p>
          )}

          <div className="flex gap-4 lg:py-8">
            <p className="flex items-center gap-2">
              <IoGitCompareOutline color="gray" size={24} />
              <span>Add to compare</span>
            </p>
            <WishlistButton product={product} />
          </div>
          {/* Add to cart  button */}
          <button
            className=" bg-primary border border-primary  text-white hover:bg-transparent hover:text-primary transition-all lg:p-3 sm:p-2 rounded-lg w-36 text-center cursor-pointer whitespace-nowrap"
            onClick={() => {
              addToCart(product);
              toast.success("Added to cart");
              router.push("/cart");
            }}
          >
            Add to cart ({item?.quantity})
          </button>
          <ReviewForm productId={product?.id} />
        </div>
      </div>
      <div className="sm:hidden md:block border border-border rounded-lg p-6 space-y-8">
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
