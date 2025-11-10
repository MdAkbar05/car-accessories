import { prisma } from "@/lib/prisma";

export async function GET() {
  const models = await prisma.product.findMany({
    distinct: ["model"],
    select: { model: true },
  });
  return Response.json(models.map((m) => m.model));
}
