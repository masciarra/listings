import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET({ params }: { params: { listingId: string } }) {
  const prisma = new PrismaClient();
  const data = await prisma.listing.findUnique({
    where: {
      id: parseInt(params.listingId, 10),
    },
  });
  return NextResponse.json({ data });
}
