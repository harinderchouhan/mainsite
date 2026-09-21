import type { IconName } from "@/lib/icon-map";

export type Value = {
  title: string;
  description: string;
  /** A concrete, qualitative example of the value in practice — no invented numbers or promises. */
  proof: string;
  icon: IconName;
};

export const values: Value[] = [
  {
    title: "Strategy built around your goals",
    description:
      "We don't reach for a template. Every engagement starts with your business goals and works backward to a plan that actually supports them.",
    proof: "A discovery conversation and a defined site map come before any design work starts.",
    icon: "Target",
  },
  {
    title: "A genuinely skilled team",
    description:
      "Design, development, and SEO handled by people who specialize in it — not one generalist wearing five hats.",
    proof: "Your project is reviewed by a designer, a developer, and an SEO specialist — not one person doing all three.",
    icon: "Award",
  },
  {
    title: "Modern, current technology",
    description:
      "We build on tools and practices that are current today, so your site isn't outdated the moment it launches.",
    proof: "We choose the stack based on what your project actually needs, not whatever we defaulted to last time.",
    icon: "Rocket",
  },
  {
    title: "Support that doesn't disappear",
    description:
      "We stay reachable after launch. Questions, updates, and issues get a real response — round the clock.",
    proof: "You reach an actual team member, not a ticket queue that routes you to whoever's free.",
    icon: "Headset",
  },
  {
    title: "Deep focus, not a jack-of-all-trades",
    description:
      "We've deliberately narrowed our focus to pest control companies and dental practices, so every project benefits from patterns we've already proven work for businesses exactly like yours.",
    proof: "From local SEO to booking flows, we're not learning your industry on your dime.",
    icon: "TrendingUp",
  },
  {
    title: "Solutions that scale with you",
    description:
      "What we build for a startup can grow with it. What we build for an enterprise is engineered to handle the load.",
    proof: "Architecture decisions account for where your business is headed, not just where it is today.",
    icon: "Settings2",
  },
  {
    title: "Security taken seriously",
    description:
      "Secure coding practices, hardened hosting configurations, and ongoing vigilance — not an afterthought bolted on later.",
    proof: "Security review is a standard step in our build process, not something added after a problem happens.",
    icon: "ShieldCheck",
  },
  {
    title: "A relationship, not a transaction",
    description:
      "We work like a long-term partner in your growth, not a vendor that disappears the day the invoice is paid.",
    proof: "We check in after launch instead of waiting for you to chase us about updates or improvements.",
    icon: "Handshake",
  },
];
