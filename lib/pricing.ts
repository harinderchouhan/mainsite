export type PricingTier = {
  name: string;
  tagline: string;
  bestFor: string;
  features: string[];
  featured?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Essentials",
    tagline: "Get found and get booked",
    bestFor:
      "A single-location pest control company or dental practice that needs a real website for the first time.",
    features: [
      "Custom-designed, mobile-first website",
      "Click-to-call and online booking / contact forms",
      "Service-area and treatment or service pages",
      "Local SEO setup and Google Business Profile optimization",
      "Launch support and CMS training",
    ],
  },
  {
    name: "Growth",
    tagline: "Built to outrank the competition",
    bestFor:
      "Businesses ready to invest in ongoing visibility, not just a one-time build.",
    features: [
      "Everything in Essentials",
      "Expanded page set — per service, treatment, or location",
      "Ongoing local SEO and content updates",
      "Google review integration and on-site reputation signals",
      "Monthly performance reporting",
    ],
    featured: true,
  },
  {
    name: "Full-Service Partner",
    tagline: "A digital team, not a vendor",
    bestFor:
      "Multi-location practices and companies that want a dedicated team managing growth long-term.",
    features: [
      "Everything in Growth",
      "Ongoing website management and updates",
      "Continuous SEO strategy across all locations and services",
      "Priority support with a dedicated point of contact",
      "Quarterly strategy reviews",
    ],
  },
];
