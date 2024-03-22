import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { listingTypeId: string } }
) {
  const prisma = new PrismaClient();
  const data = await prisma.listing.findMany({
    where: {
      listingTypeId: parseInt(params.listingTypeId, 10),
    },
  });
  return NextResponse.json({ data });
}
