import type { IconName } from "@/lib/icon-map";

export type IndustryCategory =
  | "Trades & Home Services"
  | "Manufacturing & Production"
  | "Healthcare & Wellness"
  | "Professional & Business Services"
  | "Retail, Hospitality & Lifestyle";

export type Industry = {
  slug: string;
  name: string;
  icon: IconName;
  category: IndustryCategory;
};

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const raw: { name: string; icon: IconName; category: IndustryCategory }[] = [
  // Trades & Home Services
  { name: "Electrician", icon: "Zap", category: "Trades & Home Services" },
  { name: "Cleaning Services", icon: "SprayCan", category: "Trades & Home Services" },
  { name: "Construction", icon: "HardHat", category: "Trades & Home Services" },
  { name: "Heavy Equipment Rental", icon: "Truck", category: "Trades & Home Services" },
  { name: "Interior & Exterior Designers", icon: "Palette", category: "Trades & Home Services" },
  { name: "Junk Removal", icon: "Trash2", category: "Trades & Home Services" },
  { name: "Pest Control", icon: "Bug", category: "Trades & Home Services" },
  { name: "Plumbing", icon: "Wrench", category: "Trades & Home Services" },
  { name: "Roofing", icon: "Home", category: "Trades & Home Services" },

  // Manufacturing & Production
  { name: "Agarbatti Making", icon: "Wind", category: "Manufacturing & Production" },
  { name: "Biodiesel Production", icon: "Droplets", category: "Manufacturing & Production" },
  { name: "Candle Manufacturing", icon: "Flame", category: "Manufacturing & Production" },
  { name: "Cashew Nut Processing", icon: "Nut", category: "Manufacturing & Production" },
  { name: "Chalk Making", icon: "Ruler", category: "Manufacturing & Production" },
  { name: "Chocolate Making", icon: "Candy", category: "Manufacturing & Production" },
  { name: "Clay Products", icon: "Boxes", category: "Manufacturing & Production" },
  { name: "Coconut Oil Making", icon: "Droplet", category: "Manufacturing & Production" },
  { name: "Detergent Powder Making", icon: "Sparkles", category: "Manufacturing & Production" },
  { name: "Leather Belt Manufacturing", icon: "Layers", category: "Manufacturing & Production" },
  { name: "Paper Bag Manufacturing", icon: "Package", category: "Manufacturing & Production" },
  { name: "Paper Plate Manufacturing", icon: "PackageOpen", category: "Manufacturing & Production" },
  { name: "Pickle Manufacturing", icon: "Sprout", category: "Manufacturing & Production" },
  { name: "School Stationery Suppliers", icon: "PenTool", category: "Manufacturing & Production" },
  { name: "Slippers Manufacturing", icon: "Footprints", category: "Manufacturing & Production" },
  { name: "Small Toys Manufacturing", icon: "Puzzle", category: "Manufacturing & Production" },
  { name: "Spices Manufacturing", icon: "Leaf", category: "Manufacturing & Production" },
  { name: "Spinning & Weaving Industry", icon: "Shirt", category: "Manufacturing & Production" },
  { name: "Toothpick Manufacturing", icon: "TreePine", category: "Manufacturing & Production" },
  { name: "Water Bottle Manufacturing", icon: "Droplets", category: "Manufacturing & Production" },

  // Healthcare & Wellness
  { name: "Beauty Parlours", icon: "Sparkles", category: "Healthcare & Wellness" },
  { name: "Dental Clinics", icon: "Smile", category: "Healthcare & Wellness" },
  { name: "Dermatologists", icon: "HeartPulse", category: "Healthcare & Wellness" },
  { name: "Gynecology Clinics", icon: "HeartPulse", category: "Healthcare & Wellness" },
  { name: "Orthopedics", icon: "Activity", category: "Healthcare & Wellness" },
  { name: "Pharmacies", icon: "Pill", category: "Healthcare & Wellness" },
  { name: "Yoga Therapists", icon: "Sun", category: "Healthcare & Wellness" },

  // Professional & Business Services
  { name: "Colleges & Training Institutes", icon: "GraduationCap", category: "Professional & Business Services" },
  { name: "Data Producers", icon: "Database", category: "Professional & Business Services" },
  { name: "Dealer Locator & Sales", icon: "MapPin", category: "Professional & Business Services" },
  { name: "Immigration Services", icon: "Globe", category: "Professional & Business Services" },
  { name: "Lawyers & Law Firms", icon: "Gavel", category: "Professional & Business Services" },
  { name: "Marketing Agencies", icon: "TrendingUp", category: "Professional & Business Services" },
  { name: "Tech & IT Services", icon: "Cpu", category: "Professional & Business Services" },

  // Retail, Hospitality & Lifestyle
  { name: "Auto Dealers", icon: "Car", category: "Retail, Hospitality & Lifestyle" },
  { name: "Bakeries", icon: "Cookie", category: "Retail, Hospitality & Lifestyle" },
  { name: "Hotels & Hospitality", icon: "Hotel", category: "Retail, Hospitality & Lifestyle" },
  { name: "Photography Studios", icon: "Camera", category: "Retail, Hospitality & Lifestyle" },
  { name: "Tour & Travel Agencies", icon: "Plane", category: "Retail, Hospitality & Lifestyle" },
  { name: "Xerox & Printing Shops", icon: "Printer", category: "Retail, Hospitality & Lifestyle" },
];

export const industries: Industry[] = raw.map((item) => ({
  slug: slugify(item.name),
  name: item.name,
  icon: item.icon,
  category: item.category,
}));

export const industryCategories: IndustryCategory[] = [
  "Trades & Home Services",
  "Manufacturing & Production",
  "Healthcare & Wellness",
  "Professional & Business Services",
  "Retail, Hospitality & Lifestyle",
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
