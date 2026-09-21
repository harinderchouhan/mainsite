import type { IconName } from "@/lib/icon-map";

export type TechStackItem = {
  name: string;
  icon: IconName;
};

export const techStack: TechStackItem[] = [
  { name: "Next.js & React", icon: "Code2" },
  { name: "WordPress", icon: "Layers" },
  { name: "Shopify & WooCommerce", icon: "ShoppingCart" },
  { name: "Node.js", icon: "Cpu" },
  { name: "Payment gateways", icon: "Lock" },
  { name: "Analytics & Search Console", icon: "TrendingUp" },
];
