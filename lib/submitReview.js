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
  const { productId, rating, comment } = formData;
  const newReview = {
    rating: Number(rating),
    comment: comment,
    productId,
    userId,
  };

  if (!productId || !rating || !comment) {
    throw new Error("Missing required fields");
  }

  await prisma.review.create({
    data: newReview,
  });

  // Revalidate product page to refresh review data
  revalidatePath(`/products/${productId}`);

  return { success: true };
}
