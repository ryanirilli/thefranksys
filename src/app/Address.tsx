"use client";

import Link from "next/link";
import { Box } from "@chakra-ui/react";

const AddressComponent = () => {
  const address = "3062 44th Street East, Tacoma, WA 98404";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;
  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    address
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div>
      {/* Link to Google Maps */}
      <Box color="blue.500" mb={4} textDecoration="underline">
        <Link href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
          {address}
        </Link>
      </Box>
      {/* Google Maps Embed */}
      <div
        style={{
          width: "100%",
          height: "400px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{
            position: "absolute",
            border: "1px solid rgba(0, 0, 0, 0.1)",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default AddressComponent;
