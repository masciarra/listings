import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { description, imageUrl, listingTypeId, title } = await req.json();

  const prisma = new PrismaClient();

  const user = await prisma.listing.create({
    data: {
      description,
      imageUrl,
      listingTypeId,
      title,
    },
  });

  return NextResponse.json(user, { status: 200 });
}
