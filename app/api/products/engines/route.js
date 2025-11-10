import { prisma } from "@/lib/prisma";

export async function GET() {
  const engines = await prisma.product.findMany({
    distinct: ["engine"],
    select: { engine: true },
  });
  return Response.json(engines.map((e) => e.engine));
}
