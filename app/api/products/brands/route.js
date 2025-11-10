import { prisma } from "@/lib/prisma";

export async function GET() {
  const brands = await prisma.product.findMany({
    distinct: ["brand"],
    select: { brand: true },
  });

  return Response.json(brands.map((b) => b.brand));
}
