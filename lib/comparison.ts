export type ComparisonValue = "yes" | "no" | "partial";

export type ComparisonRow = {
  feature: string;
  us: ComparisonValue;
  agency: ComparisonValue;
  diy: ComparisonValue;
};

export const comparisonRows: ComparisonRow[] = [
  {
    feature: "Built specifically for pest control & dental",
    us: "yes",
    agency: "no",
    diy: "no",
  },
  {
    feature: "Ongoing management included",
    us: "yes",
    agency: "partial",
    diy: "no",
  },
  {
    feature: "Call tracking & reporting",
    us: "yes",
    agency: "partial",
    diy: "no",
  },
  {
    feature: "Local SEO included",
    us: "yes",
    agency: "partial",
    diy: "no",
  },
  {
    feature: "Ads & social media managed for you",
    us: "yes",
    agency: "partial",
    diy: "no",
  },
  {
    feature: "Free from template lock-in",
    us: "yes",
    agency: "partial",
    diy: "no",
  },
  {
    feature: "Real support team you can call",
    us: "yes",
    agency: "partial",
    diy: "no",
  },
];
