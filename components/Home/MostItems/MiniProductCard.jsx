import product1 from "@/public/assets/dummy/product-1.jpg";
import Image from "next/image";

export default function MiniProductCard({ title }) {
  return (
    <section className="space-y-4 py-2">
      <h2 className="text-2xl font-bold">{title}</h2>
      <hr className="border border-border" />
      <div className="space-y-8">
        <MiniCard />
        <MiniCard />
        <MiniCard />
      </div>
    </section>
  );
}

const MiniCard = () => {
  return (
    <div className="flex justify-start items-center gap-4">
      <Image src={product1} alt="Product Image" width={100} height={100} />
      <div className="space-y-2">
        <h2 className="text-xl ">
          All star Performance 16 Grit 7 in OD Nail Head Tire
        </h2>
        <p className="text-gray-600">Brand: Dunlop</p>
        <p>$300</p>
      </div>
    </div>
  );
};
