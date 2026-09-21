export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "How much does a website cost?",
    answer:
      "It depends on scope — a brochure site, an e-commerce store, and a custom web application all take different amounts of work. We give every client a free, no-obligation quote after a short discovery call so pricing is based on what you actually need, not a generic package.",
  },
  {
    question: "Do you only build websites for pest control and dental businesses?",
    answer:
      "That's our focus right now, yes — we've intentionally narrowed to these two industries so we can go deeper than a generalist agency. If that's not you, get in touch anyway and we'll be honest about whether we're still a fit.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most website builds run 3–6 weeks from kickoff to launch, depending on complexity, content readiness, and how quickly feedback rounds move. E-commerce builds and larger web applications can take longer — we'll give you a realistic timeline before work starts.",
  },
  {
    question: "Do you only build new websites, or can you redesign an existing one?",
    answer:
      "Both. A lot of our work is redesigning and restructuring existing sites — migrating content, fixing structure and navigation, and rebuilding on a cleaner foundation without losing what's already working, like search rankings.",
  },
  {
    question: "What happens after the site launches?",
    answer:
      "We don't disappear at launch. We offer ongoing support and maintenance — updates, monitoring, small changes, and troubleshooting — so your site stays fast, secure, and current as your business changes.",
  },
  {
    question: "Do you work with businesses outside Yamuna Nagar?",
    answer:
      "Yes — we work with clients across India and internationally. Most of our process happens over calls, email, and shared documents, so location isn't a barrier to working together.",
  },
  {
    question: "I need more than just a website — SEO, ads, social media, ongoing changes. Can you handle all of it?",
    answer:
      "That's how most of our client relationships work. Because we cover design, development, SEO, ads, and social media under one team, you're not stitching together separate vendors — we handle it as one connected strategy.",
  },
];

// Trust-building FAQs about ownership and portability — appended to a
// service's own FAQ list on /services/[slug] pages, not shown on the homepage.
export const trustFaqs: FaqItem[] = [
  {
    question: "What happens to my current website or domain?",
    answer:
      "Your domain stays registered in your name — we never move it into an account you don't control. If you already have a website, we migrate the content and structure you want to keep rather than throwing it away and starting over.",
  },
  {
    question: "Do I own the site if I ever decide to leave?",
    answer:
      "Yes. The website, its content, and your domain are yours. If you ever want to leave, we hand over full access — no hostage situations, no holding your site or rankings ransom.",
  },
];
