import { getProducts } from "@/lib/getProducts";
import Image from "next/image";
import Link from "next/link";

export default async function MiniProductCard({ title }) {
  const products = await getProducts({
    filter: title == "Most Viewed" ? "mostViewed" : "topSell",
  });
  return (
    <section className="space-y-4 py-2">
      <h2 className="text-2xl font-bold">{title}</h2>
      <hr className="border border-border" />
      <div className="space-y-8">
        {products.slice(0, 3).map((product) => (
          <MiniCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

const MiniCard = ({ product }) => {
  return (
    <Link
      href={`/products/${product?.id}`}
      className="flex justify-start items-center gap-4 border-b border-gray-400"
    >
      <Image
        src={product?.images[0]}
        alt={product?.name}
        width={100}
        height={100}
      />
      <div className="space-y-2">
        <h2 className="text-xl ">{product?.name}</h2>
        <p className="text-gray-600">Brand: {product?.brand}</p>
        <p>${product?.price}</p>
      </div>
    </Link>
  );
};
