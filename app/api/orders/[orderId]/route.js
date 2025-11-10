const { NextResponse } = require("next/server");

export async function PUT(request, { params }) {
  const { orderStatus, paymentStatus } = await request.json();
  const { orderId } = await params;
  try {
    const updatedOrder = await prisma.order.update({
      where: { id: orderId },
      data: {
        orderStatus,
        paymentStatus,
      },
    });
    return NextResponse.json(updatedOrder, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to update order ${error?.message}` },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  const { orderId } = await params;
  try {
    const deletedOrder = await prisma.order.delete({
      where: { id: orderId },
    });
    return NextResponse.json(deletedOrder, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to delete order ${error?.message}` },
      { status: 500 }
    );
  }
}
