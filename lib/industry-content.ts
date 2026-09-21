import type { IconName } from "@/lib/icon-map";

type Challenge = {
  icon: IconName;
  title: string;
  description: string;
};

type IndustryContent = {
  heroDescription: string;
  whyIntro: string;
  challenges: Challenge[];
  serviceSlugs: string[];
};

export const industryContent: Record<string, IndustryContent> = {
  "pest-control": {
    heroDescription:
      "Pest control companies win jobs on speed and trust — when someone finds roaches, termites, or a wasp nest, they call whoever looks the most responsive online, right now. We build sites that make your company the obvious call: fast, mobile-first, and built to turn a panicked search into a booked job.",
    whyIntro:
      "Homeowners searching for pest control are usually dealing with an active problem and want service today, not next week. If your site is slow, hard to use on a phone, or doesn't make it obvious how to call or book, that customer moves straight to the next name on the list.",
    challenges: [
      {
        icon: "Phone",
        title: "Same-day booking, no friction",
        description:
          "Click-to-call buttons, an online booking form, and clear emergency-service messaging turn urgent searches into scheduled jobs before the customer even looks at a competitor.",
      },
      {
        icon: "MapPin",
        title: "Ranking for \"pest control near me\"",
        description:
          "Local SEO and a strong Google Business Profile put you in front of homeowners in your actual service area the moment they start searching.",
      },
      {
        icon: "ShieldCheck",
        title: "Proving you're licensed and safe",
        description:
          "Clear licensing, insurance, and treatment-safety information reassures customers who are letting a technician into their home.",
      },
    ],
    serviceSlugs: ["pest-control-website-design", "seo-pest-control-dental", "ads-management"],
  },
  "dental-clinics": {
    heroDescription:
      "Dental patients pick a practice long before they ever sit in the chair — usually based on what they see on your website. We build clean, credible sites that make it easy for new patients to learn about your practice, your team, and your services, and to book without having to pick up the phone.",
    whyIntro:
      "Patients researching a new dentist want to see your services, your team, your location, and real reviews — then book with as few clicks as possible. A dated or confusing site quietly sends them to the practice down the street.",
    challenges: [
      {
        icon: "HeartPulse",
        title: "Building patient trust before the first visit",
        description:
          "A clean, professional design with a real team page and patient reviews reassures visitors your practice is credible and well-run.",
      },
      {
        icon: "Clock",
        title: "Making booking effortless",
        description:
          "Online appointment requests and clear calls-to-action reduce the friction between \"interested\" and \"appointment booked.\"",
      },
      {
        icon: "MapPin",
        title: "Standing out locally",
        description:
          "Local SEO helps your practice appear when nearby patients search for a dentist, a specific procedure, or emergency dental care.",
      },
    ],
    serviceSlugs: ["dental-website-design", "seo-pest-control-dental", "social-media-management"],
  },
};

export function getIndustryContent(slug: string): IndustryContent | undefined {
  return industryContent[slug];
}
