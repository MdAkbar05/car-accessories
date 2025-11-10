"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

export async function submitReview(formData) {
  const session = await getServerSession(authOptions); // get logged-in user
  if (!session || !session.user?.id) {
    throw new Error("Unauthorized: please log in first");
  }

  const userId = session.user.id;
  const productId = formData.get("productId");
  const rating = Number(formData.get("rating"));
  const comment = formData.get("comment");

  if (!productId || !rating || !comment) {
    throw new Error("Missing required fields");
  }

  await prisma.review.create({
    data: {
      rating,
      comment,
      productId,
      userId,
    },
  });

  // Revalidate product page to refresh review data
  revalidatePath(`/products/${productId}`);

  return { success: true };
}
