import Link from "next/link";
import { SneakerListings } from "./SneakerListings";
import { HotelListings } from "./HotelListings";

export default function RootPage() {
  return (
    <div className="flex items-center flex-col">
      <div className="flex justify-center">
        <h1>Sneakerhead Listings</h1>
      </div>
      <div className="flex justify-between w-3/4">
        <div>
          <h2>Sneaker Listings</h2>
          <ul className="list-disc">
            {Object.keys(SneakerListings).map((sneakerListingId) => {
              return (
                <li className="ml-8">
                  <Link
                    className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                    href={`/sneakers/${sneakerListingId}`}
                  >
                    {
                      SneakerListings[
                        parseInt(
                          sneakerListingId,
                          10
                        ) as keyof typeof SneakerListings
                      ].title
                    }
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h2>Hotel Listings</h2>
          <ul className="list-disc">
            {Object.keys(HotelListings).map((hotelListingId) => {
              return (
                <li className="ml-8">
                  <Link
                    className=" underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                    href={`/hotels/${hotelListingId}`}
                  >
                    {
                      HotelListings[
                        parseInt(hotelListingId) as keyof typeof HotelListings
                      ].title
                    }
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
