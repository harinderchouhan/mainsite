import type { IconName } from "@/lib/icon-map";

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  heroDescription: string;
  icon: IconName;
  features: string[];
  process: { title: string; description: string }[];
};

export const services: Service[] = [
  {
    slug: "web-design",
    name: "Web Design",
    icon: "Palette",
    shortDescription:
      "Professional, conversion-focused design that turns visitors into engaged, returning customers.",
    heroDescription:
      "We design websites around how real visitors browse, scroll, and decide — clean layouts, clear hierarchy, and calls-to-action placed where they actually get clicked. The result is a site that looks credible in the first three seconds and keeps working for your business long after launch.",
    features: [
      "Custom layout and visual design — no generic templates",
      "Conversion-focused page structure and calls-to-action",
      "Mobile-first, fully responsive design across all devices",
      "Brand-consistent typography, color system, and imagery direction",
      "UX wireframes and structured content planning before build",
      "Accessibility and readability best practices baked in",
    ],
    process: [
      {
        title: "Discovery & goals",
        description:
          "We learn your business, your customers, and what a successful website actually needs to do for you.",
      },
      {
        title: "Wireframes & structure",
        description:
          "We map out page layout and content flow before any visual design starts, so the site is built to convert.",
      },
      {
        title: "Visual design",
        description:
          "We design a distinct, on-brand look — typography, color, imagery direction, and componentry.",
      },
      {
        title: "Review & refine",
        description:
          "You review working designs and we refine based on your feedback until it's right.",
      },
    ],
  },
  {
    slug: "web-development",
    name: "Web Development",
    icon: "Code2",
    shortDescription:
      "Custom, highly secure, scalable web applications built on modern technology.",
    heroDescription:
      "Design is only half the job — we build the engine behind it. Our development team ships fast-loading, secure, and maintainable websites and web applications that are built to scale as your business grows, not rebuilt from scratch every two years.",
    features: [
      "Custom-coded builds — no bloated page-builder plugins",
      "Secure architecture and coding practices from day one",
      "Fast page-load performance and clean, semantic code",
      "Scalable structure that grows with new features and traffic",
      "Third-party integrations: payments, CRMs, booking, APIs",
      "Staging environments and structured QA before launch",
    ],
    process: [
      {
        title: "Technical planning",
        description:
          "We define the right stack and architecture for your goals, budget, and growth plans.",
      },
      {
        title: "Build in sprints",
        description:
          "We develop in structured stages with regular check-ins, not a single black-box handoff.",
      },
      {
        title: "Testing & QA",
        description:
          "Every build is tested across devices, browsers, and edge cases before it goes live.",
      },
      {
        title: "Launch & handover",
        description:
          "We deploy, monitor the launch, and hand over a site you can actually understand and manage.",
      },
    ],
  },
  {
    slug: "seo",
    name: "SEO Services",
    icon: "TrendingUp",
    shortDescription:
      "Strategies to grow your brand's visibility and rankings across digital platforms.",
    heroDescription:
      "Being online isn't the same as being found. Our SEO work focuses on getting your business in front of the people already searching for what you offer — through technical health, on-page optimization, and content built around real search intent.",
    features: [
      "Technical SEO audits and on-site fixes",
      "Keyword research based on real customer search intent",
      "On-page optimization: titles, structure, internal linking",
      "Local SEO and Google Business Profile optimization",
      "Site speed and Core Web Vitals improvements",
      "Ongoing reporting so you can see what's actually working",
    ],
    process: [
      {
        title: "Audit & research",
        description:
          "We assess your current site health and research the keywords your customers are searching for.",
      },
      {
        title: "On-page optimization",
        description:
          "We fix structure, content, and technical issues that hold rankings back.",
      },
      {
        title: "Content & authority",
        description:
          "We build out content and internal linking that targets real search intent.",
      },
      {
        title: "Track & adjust",
        description:
          "We monitor rankings and traffic and adjust the strategy as the data comes in.",
      },
    ],
  },
  {
    slug: "ecommerce",
    name: "Ecommerce Solutions",
    icon: "ShoppingCart",
    shortDescription:
      "Budget-friendly, professional online stores that redefine the shopping experience.",
    heroDescription:
      "We build online stores that are simple to shop and simple to run — clear product discovery, smooth checkout, and a backend you can actually manage yourself. Built to fit real budgets without cutting corners on the shopping experience.",
    features: [
      "Product catalog structure built for easy browsing",
      "Secure checkout and payment gateway integration",
      "Inventory, order, and customer management setup",
      "Mobile-optimized shopping experience end to end",
      "Budget-conscious builds without sacrificing quality",
      "Training so your team can manage products and orders",
    ],
    process: [
      {
        title: "Store planning",
        description:
          "We map your catalog, categories, and checkout flow around how customers actually shop.",
      },
      {
        title: "Store build",
        description:
          "We build the storefront, connect payments, and set up inventory and order management.",
      },
      {
        title: "Testing checkout",
        description:
          "We test the full purchase journey — cart, payment, confirmation — before going live.",
      },
      {
        title: "Launch & train",
        description:
          "We launch the store and walk your team through managing products, orders, and updates.",
      },
    ],
  },
  {
    slug: "wordpress",
    name: "WordPress Services",
    icon: "Layers",
    shortDescription:
      "WordPress site builds, theme and plugin work, and ongoing CMS management.",
    heroDescription:
      "WordPress remains one of the most flexible platforms for businesses that want to manage their own content. We build clean, well-structured WordPress sites, handle theme and plugin customization, and provide ongoing management so your site stays fast, current, and secure.",
    features: [
      "Custom WordPress theme setup and customization",
      "Plugin selection, configuration, and conflict cleanup",
      "Content structure that's easy for your team to manage",
      "Core, theme, and plugin updates handled for you",
      "Security hardening and regular backups",
      "Performance tuning for faster page loads",
    ],
    process: [
      {
        title: "Site assessment",
        description:
          "We review your goals and, for existing sites, the current setup's health and structure.",
      },
      {
        title: "Build or rebuild",
        description:
          "We set up theme, plugins, and content structure around what your team needs to manage day to day.",
      },
      {
        title: "Harden & optimize",
        description:
          "We apply security and performance best practices so the site stays fast and protected.",
      },
      {
        title: "Ongoing management",
        description:
          "We offer continued updates and support so the site keeps running smoothly after launch.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
