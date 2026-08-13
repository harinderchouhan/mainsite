import type { IndustryCategory } from "@/lib/industries";
import type { IconName } from "@/lib/icon-map";

type Challenge = {
  icon: IconName;
  title: string;
  description: (name: string) => string;
};

type CategoryContent = {
  heroDescription: (name: string) => string;
  whyIntro: (name: string) => string;
  challenges: Challenge[];
  serviceSlugs: string[];
};

export const categoryContent: Record<IndustryCategory, CategoryContent> = {
  "Trades & Home Services": {
    heroDescription: (name) =>
      `Most ${name.toLowerCase()} businesses win jobs on trust and response time — and today, that trust gets judged online before the phone ever rings. We build websites that make your business look established, easy to reach, and easy to book.`,
    whyIntro: (name) =>
      `Homeowners and businesses searching for ${name.toLowerCase()} services compare options fast, usually on a phone, usually under time pressure. A slow or dated site loses that comparison before you even get a call.`,
    challenges: [
      {
        icon: "Phone",
        title: "Being easy to contact, instantly",
        description: (name) =>
          `Click-to-call, clear service areas, and simple contact forms matter more for ${name.toLowerCase()} than almost any other business type.`,
      },
      {
        icon: "MapPin",
        title: "Local visibility that actually converts",
        description: () =>
          `Local SEO and a Google Business presence bring in the nearby customers who are ready to book now, not just browse.`,
      },
      {
        icon: "ShieldCheck",
        title: "Looking established and trustworthy",
        description: (name) =>
          `A clean, professional site signals that your ${name.toLowerCase()} business is reliable — which matters when customers are letting you into their home or facility.`,
      },
    ],
    serviceSlugs: ["web-design", "seo", "web-development"],
  },
  "Manufacturing & Production": {
    heroDescription: (name) =>
      `${name} businesses often win B2B relationships long before a call happens — through a website that proves capability, capacity, and reliability. We build sites that present your operation professionally to buyers, distributors, and partners.`,
    whyIntro: (name) =>
      `Buyers and distributors researching ${name.toLowerCase()} suppliers use your website to judge scale and credibility. An outdated or missing site quietly rules you out of consideration.`,
    challenges: [
      {
        icon: "Package",
        title: "Presenting your product line clearly",
        description: () =>
          `Well-organized product and capability pages make it easy for buyers to understand what you offer and request a quote.`,
      },
      {
        icon: "ShieldCheck",
        title: "Establishing credibility with B2B buyers",
        description: (name) =>
          `A professional website reassures buyers that your ${name.toLowerCase()} operation is established, compliant, and dependable.`,
      },
      {
        icon: "TrendingUp",
        title: "Getting found by the right buyers",
        description: () =>
          `SEO focused on industry and product-specific search terms brings in inquiries from businesses actively sourcing.`,
      },
    ],
    serviceSlugs: ["web-design", "seo", "wordpress"],
  },
  "Healthcare & Wellness": {
    heroDescription: (name) =>
      `For ${name.toLowerCase()}, a website often has to earn trust before a single appointment is booked. We design clean, credible sites that make it easy for patients to learn about your practice and get in touch.`,
    whyIntro: (name) =>
      `Patients researching ${name.toLowerCase()} want clarity — services offered, credentials, location, and a simple way to reach you. A confusing or outdated site adds friction at exactly the wrong moment.`,
    challenges: [
      {
        icon: "HeartPulse",
        title: "Building patient trust online",
        description: (name) =>
          `A clean, professional design reassures visitors that your ${name.toLowerCase()} practice is credible and well-run.`,
      },
      {
        icon: "Clock",
        title: "Making booking effortless",
        description: () =>
          `Clear calls-to-action and simple contact paths reduce the friction between "interested" and "appointment booked."`,
      },
      {
        icon: "MapPin",
        title: "Standing out locally",
        description: (name) =>
          `Local SEO helps your ${name.toLowerCase()} practice appear when nearby patients search for care.`,
      },
    ],
    serviceSlugs: ["web-design", "seo", "web-development"],
  },
  "Professional & Business Services": {
    heroDescription: (name) =>
      `${name} firms compete on expertise and trust — and your website is often the first proof of both. We build sites that communicate authority clearly and make it simple for prospective clients to reach out.`,
    whyIntro: (name) =>
      `Clients evaluating a ${name.toLowerCase()} provider look for clarity, credibility, and an easy way to start a conversation. Your website is doing that evaluation work whether you've designed it to or not.`,
    challenges: [
      {
        icon: "Award",
        title: "Communicating expertise clearly",
        description: (name) =>
          `Well-structured service and credential pages help prospective clients quickly understand why your ${name.toLowerCase()} practice is the right choice.`,
      },
      {
        icon: "Users",
        title: "Turning visitors into inquiries",
        description: () =>
          `Clear calls-to-action and a straightforward contact process turn browsing visitors into qualified leads.`,
      },
      {
        icon: "TrendingUp",
        title: "Ranking for the searches that matter",
        description: () =>
          `Targeted SEO puts your site in front of people actively searching for the services you offer.`,
      },
    ],
    serviceSlugs: ["web-design", "seo", "web-development"],
  },
  "Retail, Hospitality & Lifestyle": {
    heroDescription: (name) =>
      `${name} businesses live or die on first impressions — and today, that first impression usually happens online. We build sites that reflect the quality of your business and make it effortless for customers to take the next step.`,
    whyIntro: (name) =>
      `Customers researching ${name.toLowerCase()} form an opinion about your business within seconds of landing on your site. A polished, easy-to-use website extends that same quality experience online.`,
    challenges: [
      {
        icon: "Sparkles",
        title: "Making a strong first impression",
        description: (name) =>
          `A modern, well-designed site reflects the same quality customers expect from your ${name.toLowerCase()} business in person.`,
      },
      {
        icon: "ShoppingCart",
        title: "Making it easy to take action",
        description: () =>
          `Clear booking, inquiry, or purchase paths turn interested visitors into paying customers.`,
      },
      {
        icon: "MapPin",
        title: "Being found by nearby customers",
        description: (name) =>
          `Local SEO and a strong Google presence help your ${name.toLowerCase()} business get discovered by people ready to visit.`,
      },
    ],
    serviceSlugs: ["web-design", "ecommerce", "seo"],
  },
};
