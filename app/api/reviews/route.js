// app/api/reviews/route.js
import { prisma } from "@/lib/prisma";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  if (!userId)
    return Response.json({ error: "User ID is required" }, { status: 400 });

  const reviews = await prisma.review.findMany({
    where: { userId },
    include: { product: true },
    orderBy: { createdAt: "desc" },
  });

  return Response.json(reviews);
}
