import type { IconName } from "@/lib/icon-map";

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  heroDescription: string;
  icon: IconName;
  overview: string[];
  whoItsFor: string[];
  features: string[];
  process: { title: string; description: string; timeframe?: string }[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "pest-control-website-design",
    name: "Pest Control Website Design",
    icon: "Bug",
    shortDescription:
      "Websites built specifically for pest control and extermination companies — fast, mobile-first, and built to turn urgent searches into booked jobs.",
    heroDescription:
      "We design and build websites specifically for pest control companies — sites built around how homeowners actually search when they've found roaches, termites, or a wasp nest, and need someone out today.",
    overview: [
      "Most website builders treat a pest control company like any other local business — a template with your logo swapped in. We don't. We design around the actual buyer journey: someone finds a problem, panics a little, and searches on their phone for whoever looks the most responsive right now. That means click-to-call above the fold, clear service-area coverage, and messaging that signals speed and licensing without making them read a paragraph to find it.",
      "We also build in the structure that local SEO depends on — dedicated pages per pest type and per service area, so you're not relying on one homepage to rank for every search term you actually get business from.",
    ],
    whoItsFor: [
      "You run a pest control or extermination business and your current site doesn't reflect how urgent your customers' searches actually are",
      "You're getting traffic but not calls — the site looks fine but doesn't make booking obvious",
      "You cover multiple service areas or pest types but your site only has one generic homepage",
      "You're ready to invest in a site built specifically for this industry, not a repurposed template",
    ],
    features: [
      "Custom design built around urgent, mobile-first searches",
      "Click-to-call and online booking front and center",
      "Dedicated pages per pest type and per service area",
      "Licensing, insurance, and safety information clearly presented",
      "Local SEO foundation built in from the start",
      "Fast page loads on mobile, where most of your traffic lives",
    ],
    process: [
      {
        title: "Discover & plan",
        timeframe: "Week 1",
        description:
          "We learn your service area, pest types, and what's actually working — or not — about your current site.",
      },
      {
        title: "Design",
        timeframe: "Weeks 1–2",
        description:
          "We design around urgent mobile searches — clear calls-to-action, service-area pages, and trust signals.",
      },
      {
        title: "Build & test",
        timeframe: "Weeks 2–4",
        description:
          "We build, test across devices, and stage the site before it goes live.",
      },
      {
        title: "Launch & grow",
        timeframe: "Live by week 4–6",
        description:
          "We launch, then help with local SEO and ongoing support so it keeps bringing in calls.",
      },
    ],
    faqs: [
      {
        question: "Do you build sites for multi-location pest control companies?",
        answer:
          "Yes — we build dedicated location and service-area pages so each area you cover can rank and convert on its own, not just your homepage.",
      },
      {
        question: "Can you migrate my existing pest control website?",
        answer:
          "Yes, we can migrate your existing content and structure onto a faster, better-converting design without losing search rankings you've already earned.",
      },
      {
        question: "Will the site work well for emergency or same-day requests?",
        answer:
          "That's a core part of the design — click-to-call, clear emergency messaging, and booking forms that don't slow someone down when they need help now.",
      },
      {
        question: "Do you also handle SEO for pest control keywords?",
        answer:
          "Yes — see our SEO for Pest Control & Dental service, or ask us to bundle it in as part of your build.",
      },
    ],
  },
  {
    slug: "dental-website-design",
    name: "Dentist Website Design",
    icon: "Smile",
    shortDescription:
      "Clean, credible websites for dental practices that make it easy for new patients to learn about you and book an appointment.",
    heroDescription:
      "We design websites specifically for dental practices — clean, trustworthy sites that help patients learn about your services and team, and make booking an appointment effortless.",
    overview: [
      "Patients choosing a new dentist usually decide before they ever call — based on what they see on your website. We design around that: a clear services list, a real team page, visible reviews, and a booking path that doesn't require picking up the phone if the patient doesn't want to.",
      "We also structure the site for local SEO from day one — pages for specific procedures and your location, so you're not relying on a single generic homepage to rank for every search a prospective patient might make.",
    ],
    whoItsFor: [
      "You run a dental practice and your current site looks dated next to other practices nearby",
      "You're not getting new-patient inquiries even though you're getting traffic",
      "You offer multiple services or specialties that aren't clearly represented",
      "You want online booking, not just a phone number buried in the footer",
    ],
    features: [
      "Custom design built around patient trust and booking",
      "Online appointment requests and clear contact paths",
      "Dedicated pages per service, procedure, or specialty",
      "Real team and practice pages that build credibility",
      "Google reviews and trust signals built into the site",
      "Local SEO foundation built in from the start",
    ],
    process: [
      {
        title: "Discover & plan",
        timeframe: "Week 1",
        description:
          "We learn your services, specialties, and what's actually working — or not — about your current site.",
      },
      {
        title: "Design",
        timeframe: "Weeks 1–2",
        description:
          "We design around patient trust and booking — clear services, real team pages, and simple contact paths.",
      },
      {
        title: "Build & test",
        timeframe: "Weeks 2–4",
        description:
          "We build, test across devices, and stage the site before it goes live.",
      },
      {
        title: "Launch & grow",
        timeframe: "Live by week 4–6",
        description:
          "We launch, then help with local SEO and ongoing support so new-patient inquiries keep coming in.",
      },
    ],
    faqs: [
      {
        question: "Can you add online appointment booking?",
        answer:
          "Yes — we can integrate an online booking form or connect to a scheduling system you already use.",
      },
      {
        question: "Do you design pages for specific procedures?",
        answer:
          "Yes — dedicated pages per service or specialty help both patients and search engines understand exactly what you offer.",
      },
      {
        question: "Can you migrate my existing dental website?",
        answer:
          "Yes, we can migrate your content and structure onto a cleaner, faster design without losing rankings you've already earned.",
      },
      {
        question: "Do you handle patient privacy considerations?",
        answer:
          "We follow standard web security best practices, and we'll work with your compliance guidance to make sure the site meets any specific requirements around patient data.",
      },
    ],
  },
  {
    slug: "seo-pest-control-dental",
    name: "SEO for Pest Control & Dental",
    icon: "TrendingUp",
    shortDescription:
      "Local SEO built around how pest control and dental patients actually search — not generic keyword stuffing.",
    heroDescription:
      "Search visibility for pest control companies and dental practices lives and dies on local search. We run SEO built specifically around how your customers actually search — not a generic keyword strategy copied across every industry.",
    overview: [
      "\"Pest control near me\" and \"dentist near me\" searches behave differently from most industries — high intent, often urgent, and almost entirely local. We focus on what actually moves the needle for businesses like yours: Google Business Profile optimization, location and service pages that rank, and technical fixes that stop you from quietly losing visibility over time.",
      "We report in plain language — calls, form submissions, and ranking movement you can actually see — not a dashboard full of metrics that don't tell you anything about your business.",
    ],
    whoItsFor: [
      "You're not showing up when people search for pest control or dental services near you",
      "You've had SEO work done before with no real explanation of what changed or why",
      "You cover multiple service areas or offer multiple services that aren't each individually optimized",
      "You want ongoing, understandable reporting tied to calls and bookings, not vanity metrics",
    ],
    features: [
      "Google Business Profile setup and ongoing optimization",
      "Location and service-specific page SEO",
      "Local keyword research based on real patient and customer searches",
      "Technical SEO audits and on-site fixes",
      "Review and reputation signals built into your SEO strategy",
      "Monthly reporting on rankings, traffic, and leads",
    ],
    process: [
      {
        title: "Audit & research",
        description:
          "We assess your current visibility and research the local searches your customers are actually making.",
      },
      {
        title: "On-page optimization",
        description:
          "We fix structure, content, and technical issues that hold rankings back.",
      },
      {
        title: "Local & content",
        description:
          "We optimize your Google Business Profile and build out location and service pages.",
      },
      {
        title: "Track & adjust",
        description:
          "We monitor rankings, calls, and bookings, and adjust the strategy as the data comes in.",
      },
    ],
    faqs: [
      {
        question: "How is this different from generic SEO?",
        answer:
          "We focus specifically on local, high-intent search behavior for pest control and dental — Google Business Profile, service-area pages, and review signals — not a one-size-fits-all keyword strategy.",
      },
      {
        question: "How long does it take to see results?",
        answer:
          "Most clients see measurable movement within the first few months, with results building steadily from there. Anyone promising overnight rankings isn't being straight with you.",
      },
      {
        question: "Do I need a new website for this to work?",
        answer:
          "In most cases we optimize what you already have — a rebuild is only necessary if the underlying technical foundation is genuinely broken.",
      },
      {
        question: "Is this part of the monthly package?",
        answer:
          "Yes — ongoing SEO is included in our monthly growth package, alongside ads and social media management, or available on its own.",
      },
    ],
  },
  {
    slug: "ads-management",
    name: "Ads Management",
    icon: "Target",
    shortDescription:
      "Google and social ads managed for you — built to bring in calls and bookings, not just clicks.",
    heroDescription:
      "Running ads without someone actively managing them usually means wasted budget. We manage Google and social ads specifically for pest control and dental businesses — built to bring in calls and booked appointments, not just clicks.",
    overview: [
      "Most ad accounts we take over have the same problem: broad targeting, no call tracking, and budget spent on searches that were never going to convert. We set up — or clean up — campaigns targeted at the searches that actually turn into jobs and appointments, and track results back to real calls and bookings, not just clicks.",
      "We manage the account on an ongoing basis — adjusting budget, pausing what's not working, and reporting in plain language on what your ad spend is actually producing.",
    ],
    whoItsFor: [
      "You're running ads but not sure what they're actually producing",
      "You want to generate leads faster than organic SEO alone can deliver",
      "You've tried managing ads yourself and it's eating time you don't have",
      "You want ad spend tracked back to real calls and bookings, not just clicks",
    ],
    features: [
      "Google Ads and Meta (Facebook/Instagram) ad management",
      "Campaigns targeted at high-intent, local searches",
      "Call tracking so you know what's actually converting",
      "Landing pages built to convert ad traffic, not just your homepage",
      "Ongoing budget management and optimization",
      "Monthly reporting on spend, leads, and cost per booking",
    ],
    process: [
      {
        title: "Audit & strategy",
        description:
          "We review any existing ad accounts and build a targeting and budget strategy around your actual service areas.",
      },
      {
        title: "Campaign setup",
        description:
          "We build out campaigns, ad creative, and call tracking before spending a dollar of your budget.",
      },
      {
        title: "Launch & monitor",
        description:
          "We launch and actively monitor performance in the first weeks to catch issues early.",
      },
      {
        title: "Optimize & report",
        description:
          "We continually adjust targeting and budget, and report on what's actually working.",
      },
    ],
    faqs: [
      {
        question: "What's the minimum ad budget?",
        answer:
          "It depends on your market and goals — we'll recommend a realistic starting budget after understanding your service area and competition, rather than a one-size-fits-all number.",
      },
      {
        question: "Do you manage the ad spend or just the strategy?",
        answer:
          "We manage the full account — targeting, budget, creative, and ongoing optimization — so you're not logging into an ads dashboard yourself.",
      },
      {
        question: "Can I see what my ads are actually producing?",
        answer:
          "Yes — call tracking and monthly reporting show you leads and cost per booking, not just clicks and impressions.",
      },
      {
        question: "Is this bundled with SEO and social media?",
        answer:
          "It can be — ads management is included in our full monthly growth package alongside SEO and social media management, or available on its own.",
      },
    ],
  },
  {
    slug: "social-media-management",
    name: "Social Media Management",
    icon: "Share2",
    shortDescription:
      "Consistent social media presence for your pest control or dental business, without you having to run it yourself.",
    heroDescription:
      "Staying visible between jobs or appointments matters. We manage social media for pest control companies and dental practices so you have a consistent presence without adding it to your own to-do list.",
    overview: [
      "Most local business owners know they should be posting but don't have time to plan, create, and post content consistently. We handle it — a content plan built around your actual business, scheduled and posted consistently across the platforms that matter for your audience.",
      "This isn't generic stock-photo content — we build posts around your actual work and your actual customers, so your social presence looks like a real, active business, not a template.",
    ],
    whoItsFor: [
      "Your social media accounts are inactive or inconsistent",
      "You know social proof matters but don't have time to manage it yourself",
      "You want a presence that reflects your real work, not generic filler content",
      "You want social media working alongside your website and SEO, not as a disconnected extra",
    ],
    features: [
      "Content planning built around your actual business",
      "Consistent posting schedule across relevant platforms",
      "Real photos and stories from your jobs or practice, where available",
      "Review and testimonial content woven into your feed",
      "Basic community management and response handling",
      "Monthly reporting on engagement and growth",
    ],
    process: [
      {
        title: "Discovery",
        description:
          "We learn your business, your audience, and what content you're comfortable sharing.",
      },
      {
        title: "Content plan",
        description:
          "We build a content calendar around your real work, treatments, and seasonal patterns.",
      },
      {
        title: "Create & schedule",
        description:
          "We create and schedule posts consistently, so nothing falls through the cracks.",
      },
      {
        title: "Report & adjust",
        description:
          "We track what's resonating and adjust the plan month to month.",
      },
    ],
    faqs: [
      {
        question: "Which platforms do you manage?",
        answer:
          "Typically Facebook and Instagram, since that's where most local pest control and dental audiences are — we'll recommend others if it makes sense for your market.",
      },
      {
        question: "Do I need to provide content myself?",
        answer:
          "Not entirely — we can work from photos and updates you share, but we also build content around your services even with minimal input from you.",
      },
      {
        question: "Is this bundled with the monthly package?",
        answer:
          "Yes — social media management is included in our full monthly growth package alongside web design, SEO, and ads.",
      },
      {
        question: "Can you manage our existing accounts?",
        answer:
          "Yes — we can take over accounts you already have rather than starting from scratch.",
      },
    ],
  },
  {
    slug: "automation",
    name: "Business Automation",
    icon: "Workflow",
    shortDescription:
      "Automating the repetitive follow-ups, reminders, and admin work that eat into your day.",
    heroDescription:
      "A lot of the busywork in running a pest control or dental business — appointment reminders, follow-up messages, lead routing — can be automated. We build the automation so your team spends less time on repetitive admin work.",
    overview: [
      "Missed follow-ups cost jobs and appointments — a lead comes in and, without a fast response, goes to whoever calls them back first. We build automated workflows that handle the repetitive parts: instant lead notifications, appointment reminders, follow-up sequences, and review requests, so nothing falls through the cracks even when your team is busy.",
      "We connect these automations to tools you already use where possible, so it fits into how your business actually runs instead of asking you to adopt a whole new system.",
    ],
    whoItsFor: [
      "Leads or booking requests sometimes go unanswered for hours or get missed entirely",
      "Your team spends time on repetitive follow-ups, reminders, or data entry",
      "You want faster response times without hiring more staff",
      "You're using multiple tools that don't talk to each other",
    ],
    features: [
      "Instant lead notification and routing",
      "Automated appointment reminders and confirmations",
      "Follow-up message sequences for missed calls or unbooked leads",
      "Automated review request workflows",
      "Integration with tools you already use where possible",
      "Ongoing monitoring so automations keep working as intended",
    ],
    process: [
      {
        title: "Map the workflow",
        description:
          "We map out where leads, bookings, and follow-ups currently fall through the cracks.",
      },
      {
        title: "Design the automation",
        description:
          "We design workflows around your actual process, not a generic template.",
      },
      {
        title: "Build & connect",
        description:
          "We build the automation and connect it to the tools you already use.",
      },
      {
        title: "Test & refine",
        description:
          "We test real scenarios and refine based on how it performs.",
      },
    ],
    faqs: [
      {
        question: "What tools do you build automations with?",
        answer:
          "It depends on what you're already using — we'll recommend the right fit rather than forcing you onto a new platform unnecessarily.",
      },
      {
        question: "Will this replace my team?",
        answer:
          "No — it's meant to remove repetitive admin work so your team can focus on the parts of the job that actually need a person.",
      },
      {
        question: "Can this connect to my existing booking system?",
        answer:
          "In most cases, yes — we'll review what you're using and build the integration where it's technically possible.",
      },
      {
        question: "Is this a one-time build or ongoing?",
        answer:
          "Both options exist — a one-time build, or ongoing management as part of our monthly growth package.",
      },
    ],
  },
  {
    slug: "ai-workflows",
    name: "AI Workflows",
    icon: "Cpu",
    shortDescription:
      "Practical AI workflows that handle real tasks — answering common questions, qualifying leads, summarizing information — without the hype.",
    heroDescription:
      "We build practical AI workflows for pest control and dental businesses — tools that handle real, specific tasks like answering common questions, qualifying leads, or summarizing information, without the buzzword-heavy overpromising.",
    overview: [
      "Most \"AI for your business\" pitches are vague. We're specific: we look at repetitive tasks in your business — answering the same questions over and over, qualifying inbound leads, summarizing call notes — and build a focused AI workflow to handle that one task well, rather than a do-everything chatbot that does nothing well.",
      "Every workflow is scoped around a real, measurable outcome — fewer unanswered questions, faster lead qualification, less manual admin — not AI for its own sake.",
    ],
    whoItsFor: [
      "Your team answers the same handful of questions constantly, by phone or message",
      "Leads sit unqualified because no one has time to follow up immediately",
      "You're curious about AI but skeptical of vague, oversold pitches",
      "You want a focused tool solving one real problem, not a sprawling AI platform",
    ],
    features: [
      "AI-assisted FAQ and inquiry handling",
      "Lead qualification workflows",
      "Call or message summarization",
      "Workflow scoped to a specific, measurable task",
      "Human handoff built in for anything the AI shouldn't handle alone",
      "Ongoing monitoring and refinement",
    ],
    process: [
      {
        title: "Identify the task",
        description:
          "We find the specific, repetitive task worth automating — not a vague \"add AI everywhere\" brief.",
      },
      {
        title: "Design the workflow",
        description:
          "We design the workflow around that task, including where it should hand off to a human.",
      },
      {
        title: "Build & test",
        description:
          "We build and test against real scenarios from your business before it goes live.",
      },
      {
        title: "Monitor & refine",
        description:
          "We monitor performance and refine the workflow as real usage reveals edge cases.",
      },
    ],
    faqs: [
      {
        question: "Will this replace talking to a real person?",
        answer:
          "No — every workflow we build includes a clear handoff to a real person for anything outside its scope. It's meant to handle the repetitive parts, not replace your team.",
      },
      {
        question: "What if the AI gets something wrong?",
        answer:
          "We scope every workflow narrowly and build in handoffs specifically to avoid that — the AI handles what it's reliably good at, and defers the rest.",
      },
      {
        question: "Do I need existing AI tools or accounts?",
        answer:
          "No — we'll recommend and set up what's needed as part of the build.",
      },
      {
        question: "How is this different from AI Agent Building?",
        answer:
          "AI workflows handle a specific, scoped task. Agent building is for a more autonomous assistant that can take multi-step actions on your behalf — see our AI Agent Building service.",
      },
    ],
  },
  {
    slug: "ai-agent-building",
    name: "AI Agent Building",
    icon: "Bot",
    shortDescription:
      "Custom AI agents that can take multi-step action on your behalf — booking, follow-up, and research handled autonomously.",
    heroDescription:
      "Beyond a single automated workflow, we build custom AI agents — assistants that can take multi-step action on your behalf, like handling a booking conversation end-to-end or researching and drafting a follow-up, not just answering one question.",
    overview: [
      "An AI workflow handles one task. An agent goes further — it can hold a conversation, make decisions across multiple steps, and take action, like walking a prospective patient through booking or triaging an incoming pest control request before a human ever gets involved. We build these scoped tightly to your business, with clear boundaries on what the agent can and can't do on its own.",
      "This is newer, more involved work than a standard automation, and we're upfront about that — we scope every agent build around a specific, well-defined job rather than an open-ended \"AI that does everything.\"",
    ],
    whoItsFor: [
      "You want more than a single automated task — a genuine assistant that can handle a multi-step process",
      "You're comfortable with a more involved, custom-scoped project",
      "You have a specific, well-defined process you'd like handled with less manual oversight",
      "You want clear boundaries on what the agent can decide versus what needs a human",
    ],
    features: [
      "Custom-built AI agent scoped to your specific process",
      "Multi-step conversation and decision handling",
      "Clear, defined boundaries on autonomous actions",
      "Integration with your existing tools and data where possible",
      "Human oversight and handoff built into the design",
      "Ongoing monitoring, testing, and refinement",
    ],
    process: [
      {
        title: "Scope the agent",
        description:
          "We define exactly what the agent should handle — and just as importantly, what it shouldn't.",
      },
      {
        title: "Design the logic",
        description:
          "We design the decision flow, boundaries, and human handoff points before writing any code.",
      },
      {
        title: "Build & integrate",
        description:
          "We build the agent and integrate it with the tools and data it needs.",
      },
      {
        title: "Test & monitor",
        description:
          "We test extensively against real scenarios and monitor closely after launch.",
      },
    ],
    faqs: [
      {
        question: "Is this the same as a chatbot?",
        answer:
          "No — a chatbot typically answers questions. An agent can take multi-step action, like actually completing a booking or triaging a request, within boundaries we define together.",
      },
      {
        question: "What happens if the agent doesn't know what to do?",
        answer:
          "It hands off to a real person. We design every agent with clear boundaries and a fallback to human handling, not open-ended autonomy.",
      },
      {
        question: "How long does this take to build?",
        answer:
          "Longer than a standard automation, since it involves more careful scoping and testing — we'll give you a realistic timeline once we understand the specific process you want handled.",
      },
      {
        question: "Do I need this, or would an AI workflow be enough?",
        answer:
          "Most businesses start with a scoped AI workflow. Agent building makes sense once you have a specific, multi-step process you want handled with less manual oversight — we'll tell you honestly which one fits.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
