import { prisma } from "@/lib/prisma";

export async function GET() {
  const products = await prisma.product.findMany({
    orderBy: { soldCount: "desc" },
    take: 8,
    include: { category: true, reviews: true },
  });

  return Response.json(products);
}
