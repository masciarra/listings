import { SneakerListings } from "src/app/SneakerListings";
import Listing from "src/app/components/Listing";

export default function SneakerListing({
  params,
}: {
  params: { listingId: string };
}) {
  return (
    <Listing
      listing={
        SneakerListings[
          parseInt(params.listingId, 10) as keyof typeof SneakerListings
        ]
      }
    />
  );
}
