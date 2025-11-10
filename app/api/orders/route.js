import { prisma } from "@/lib/prisma";

const { NextResponse } = require("next/server");

export async function GET(request) {
  try {
    const orders = await prisma.order.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        user: true,
      },
    });
    return NextResponse.json(orders, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to fetch orders ${error?.message}` },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const { userId, products, totalAmount, shippingAddress, phone } =
    await request.json();

  // decrement stock for each product
  for (const item of products) {
    const product = await prisma.product.findUnique({
      where: { id: item.id },
    });
    await prisma.product.update({
      where: { id: item.id },
      data: {
        stock: product.stock - item.quantity,
        soldCount: product.soldCount + item.quantity,
      },
    });
  }

  try {
    const newOrder = await prisma.order.create({
      data: {
        userId,
        products,
        totalAmount,
        shippingAddress,
        phone,
      },
    });
    return NextResponse.json(newOrder, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to create order ${error?.message}` },
      { status: 500 }
    );
  }
}
