import React from "react";
import { Listing } from "../types/Listing";

function ListingPage({ listing }: { listing: Listing }) {
  const { description, imageUrl, title } = listing;

  return (
    <div className="flex flex-col items-center gap-12">
      <h2>{title}</h2>
      <img alt={`${title}`} className="w-80" src={imageUrl} />
      <p className="text-center">{description}</p>
    </div>
  );
}

export default ListingPage;
