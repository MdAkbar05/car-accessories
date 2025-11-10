import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

// 🟩 Get wishlist
export async function GET(req) {
  try {
    const userId = req.nextUrl.searchParams.get("userId");
    const wishlist = await prisma.wishlist.findMany({
      where: { userId: userId },
    });

    return NextResponse.json(wishlist || { products: [] });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch wishlist" },
      { status: 500 }
    );
  }
}

// 🟢 ADD TO WISHLIST
export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session?.user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const product = await req.json();
    if (!product)
      return NextResponse.json({ error: "Product required" }, { status: 400 });

    const existing = await prisma.wishlist.findUnique({
      where: { userId: session.user.id },
    });

    if (existing?.products?.find((p) => p.id === product.id)) {
      return NextResponse.json(
        { error: "Already in wishlist" },
        { status: 400 }
      );
    }

    const updated = await prisma.wishlist.upsert({
      where: { userId: session.user.id },
      create: { userId: session.user.id, products: [product] },
      update: { products: [...(existing?.products || []), product] },
    });

    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// 🔴 DELETE SPECIFIC PRODUCT
export async function DELETE(req) {
  // get from formdata
  const body = await req.json();

  const { userId, productId } = body;

  if (!productId)
    return NextResponse.json({ error: "Product ID required" }, { status: 400 });

  try {
    const wishlist = await prisma.wishlist.findUnique({
      where: { userId },
    });

    if (!wishlist)
      return NextResponse.json(
        { error: "Wishlist not found" },
        { status: 404 }
      );

    const filtered = wishlist.products.filter((p) => p.id !== productId);

    const updated = await prisma.wishlist.update({
      where: { userId },
      data: { products: filtered },
    });

    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
