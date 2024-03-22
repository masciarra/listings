import { HotelListings } from "src/app/HotelListings";
import Listing from "src/app/components/Listing";

export default function HotelListing({
  params,
}: {
  params: { listingId: string };
}) {
  return (
    <Listing
      listing={
        HotelListings[
          parseInt(params.listingId, 10) as keyof typeof HotelListings
        ]
      }
    />
  );
}
