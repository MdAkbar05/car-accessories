import { BiSolidDiscount } from "react-icons/bi";
export default function FreeDelivery() {
  return (
    <div
      style={{
        backgroundImage: "url(/assets/dummy/FreeDeliveryBG.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="flex justify-between sm:flex-col md:flex-row sm:text-center md:text-start text-tertiary p-8 rounded-2xl"
    >
      <div>
        <h4 className="lg:text-2xl md:text-lg sm:text-base font-normal ">
          Get free delivery on your first purchase
        </h4>
        <p className="text-lg text-gray-400">
          Use discount code in checkout page
        </p>
      </div>
      <div className="flexCenter gap-2">
        <BiSolidDiscount size={32} />
        <span className="text-lg text-gray-400 uppercase">Free Delivery</span>
      </div>
    </div>
  );
}
