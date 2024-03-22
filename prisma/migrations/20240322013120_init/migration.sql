-- CreateTable
CREATE TABLE "ListingType" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,

    CONSTRAINT "ListingType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Listing" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "imageUrl" VARCHAR(255) NOT NULL,
    "listingTypeId" INTEGER NOT NULL,

    CONSTRAINT "Listing_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Listing" ADD CONSTRAINT "Listing_listingTypeId_fkey" FOREIGN KEY ("listingTypeId") REFERENCES "ListingType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
