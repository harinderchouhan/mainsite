// Single source of truth for business/site identity — referenced by
// metadata (canonical URLs, OG) and structured data (JSON-LD) so every
// page agrees on the same name, address, and contact details.

import { reviewRatings } from "@/lib/review-ratings";

export const site = {
  name: "HanuiT Solutions",
  url: "https://www.hanuitsolutions.com",
  logo: "https://www.hanuitsolutions.com/icon.png",
  description:
    "HanuiT Solutions designs and builds websites and digital strategies for pest control companies and dental practices.",
  phone: "+91 7082069620",
  email: "herry@hanuitsolutions.com",
  address: {
    streetAddress: "SN-3, First floor, Ratauli Road, near Town Park, Bank Colony",
    addressLocality: "Yamuna Nagar",
    addressRegion: "Haryana",
    postalCode: "135001",
    addressCountry: "IN",
  },
  // Real, verified URLs only — never a placeholder "#" link (see
  // components/Footer.tsx, whose social icons aren't live yet).
  sameAs: [reviewRatings.google.url].filter(Boolean),
} as const;
