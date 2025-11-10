const { NextResponse } = require("next/server");

export async function PUT(req, { params }) {
  const { id } = await params;
  const body = await req.json();
  body.price = parseFloat(body.price);
  try {
    const updatedProduct = await prisma.product.update({
      where: { id },
      data: body,
    });
    return NextResponse.json(updatedProduct, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to update product ${error?.message}` },
      { status: 500 }
    );
  }
}

export async function PATCH(req, { params }) {
  const { id } = await params;
  console.log(id);
  const product = await prisma.product.findUnique({
    where: { id },
  });

  try {
    const updatedProduct = await prisma.product.update({
      where: { id },
      data: { viewCount: product.viewCount + 1 },
    });
    return NextResponse.json(updatedProduct);
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to update product ${error?.message}` },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  const { id } = await params;
  try {
    const deletedProduct = await prisma.product.delete({
      where: { id },
    });
    return NextResponse.json(deletedProduct, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to delete product ${error?.message}` },
      { status: 500 }
    );
  }
}
