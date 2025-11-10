import cloudinary from "@/lib/cloudinary";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const runtime = "nodejs"; // ensures Node env for Cloudinary

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const brand = searchParams.get("brand");
  const category = searchParams.get("category");
  const model = searchParams.get("model");
  const engine = searchParams.get("engine");
  const sort = searchParams.get("sort");
  const filter = searchParams.get("filter");
  const query = searchParams.get("query");

  const where = {};

  if (brand) where.brand = { equals: brand, mode: "insensitive" };
  if (category) where.categoryId = category;
  if (model) where.model = { equals: model, mode: "insensitive" };
  if (engine) where.engine = { equals: engine, mode: "insensitive" };
  if (query)
    where.OR = [
      { name: { contains: query, mode: "insensitive" } },
      { description: { contains: query, mode: "insensitive" } },
    ];

  const orderBy = [];

  if (sort === "asc") orderBy.push({ name: "asc" });
  else if (sort === "desc") orderBy.push({ name: "desc" });
  else if (sort === "priceAsc") orderBy.push({ price: "asc" });
  else if (sort === "priceDesc") orderBy.push({ price: "desc" });

  if (filter === "topSell") orderBy.push({ soldCount: "desc" });
  if (filter === "mostViewed") orderBy.push({ viewCount: "desc" });
  if (filter === "newArrival") orderBy.push({ createdAt: "desc" });

  const products = await prisma.product.findMany({
    where,
    orderBy,
    include: {
      category: true,
      reviews: true,
    },
  });
  return NextResponse.json(products);
}

////////////////////////////////////////

export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const description = formData.get("description");
    const specification = formData.get("specification");
    const stockIn = Number(formData.get("stockIn"));
    const brand = formData.get("brand");
    const price = parseFloat(formData.get("price"));
    const categoryId = formData.get("categoryId");

    const files = formData.getAll("images"); // multiple images

    const uploadedImages = [];
    for (const file of files) {
      if (!(file instanceof File)) continue; // skip invalid entries
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const uploadResult = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ folder: "products" }, (error, result) => {
            if (error) reject(error);
            else resolve(result);
          })
          .end(buffer);
      });

      uploadedImages.push(uploadResult.secure_url);
    }

    const product = await prisma.product.create({
      data: {
        name,
        description,
        specification,
        stock: stockIn,
        brand,
        price,
        images: uploadedImages,
        categoryId,
      },
    });

    return NextResponse.json({
      message: "Product created successfully!",
      product,
    });
  } catch (error) {
    console.error("Error uploading product:", error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}
