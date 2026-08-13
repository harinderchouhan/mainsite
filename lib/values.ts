import type { IconName } from "@/lib/icon-map";

export type Value = {
  title: string;
  description: string;
  icon: IconName;
};

export const values: Value[] = [
  {
    title: "Strategy built around your goals",
    description:
      "We don't reach for a template. Every engagement starts with your business goals and works backward to a plan that actually supports them.",
    icon: "Target",
  },
  {
    title: "A genuinely skilled team",
    description:
      "Design, development, and SEO handled by people who specialize in it — not one generalist wearing five hats.",
    icon: "Award",
  },
  {
    title: "Modern, current technology",
    description:
      "We build on tools and practices that are current today, so your site isn't outdated the moment it launches.",
    icon: "Rocket",
  },
  {
    title: "Support that doesn't disappear",
    description:
      "We stay reachable after launch. Questions, updates, and issues get a real response — round the clock.",
    icon: "Headset",
  },
  {
    title: "A track record across industries",
    description:
      "1,200+ projects across dozens of industries means we've likely already solved a version of your problem.",
    icon: "TrendingUp",
  },
  {
    title: "Solutions that scale with you",
    description:
      "What we build for a startup can grow with it. What we build for an enterprise is engineered to handle the load.",
    icon: "Settings2",
  },
  {
    title: "Security taken seriously",
    description:
      "Secure coding practices, hardened hosting configurations, and ongoing vigilance — not an afterthought bolted on later.",
    icon: "ShieldCheck",
  },
  {
    title: "A relationship, not a transaction",
    description:
      "We work like a long-term partner in your growth, not a vendor that disappears the day the invoice is paid.",
    icon: "Handshake",
  },
];
