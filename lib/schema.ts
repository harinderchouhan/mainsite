// JSON-LD structured-data builders — the same schema types a plugin like
// Rank Math would generate on a WordPress site (Organization/LocalBusiness,
// WebSite, BreadcrumbList, Article, Service, FAQPage), built from this
// site's own real content instead of invented data.

import { site } from "@/lib/site";
import { reviewRatings } from "@/lib/review-ratings";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    logo: site.logo,
    image: site.logo,
    description: site.description,
    telephone: site.phone,
    email: site.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      ...site.address,
    },
    sameAs: site.sameAs,
    ...(reviewRatings.google.rating && reviewRatings.google.reviewCount
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: reviewRatings.google.rating,
            reviewCount: reviewRatings.google.reviewCount,
          },
        }
      : {}),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    publisher: { "@id": `${site.url}/#organization` },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema(options: {
  title: string;
  description: string;
  url: string;
  image: string | null;
  datePublished: string;
  dateModified: string;
  authorName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${options.url}/#article`,
    headline: options.title,
    description: options.description,
    image: options.image ?? site.logo,
    datePublished: options.datePublished,
    dateModified: options.dateModified,
    mainEntityOfPage: { "@type": "WebPage", "@id": options.url },
    author: {
      "@type": "Person",
      name: options.authorName,
    },
    publisher: { "@id": `${site.url}/#organization` },
  };
}

export function serviceSchema(options: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: options.name,
    description: options.description,
    url: options.url,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: "IN",
  };
}
