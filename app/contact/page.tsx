import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with HanuiT Solutions for a free quote on web design, web development, SEO, ecommerce, or WordPress services.",
};

const contactDetails = [
  {
    icon: MapPin,
    label: "Address",
    value:
      "SN-3, First floor, Ratauli Road, near Town Park, Bank Colony, Yamuna Nagar, Kansapur, Haryana 135001",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7082069620",
    href: "tel:+917082069620",
  },
  {
    icon: Mail,
    label: "Email",
    value: "herry@hanuitsolutions.com",
    href: "mailto:herry@hanuitsolutions.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Sat 9:00am–6:00pm, Sunday closed",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your project"
        description="Tell us a little about your business and what you're looking to achieve — we'll follow up with a free, no-obligation quote."
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
            <Card className="lg:col-span-3">
              <ContactForm />
            </Card>

            <div className="space-y-4 lg:col-span-2">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <Card key={label} className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{label}</p>
                    {href ? (
                      <a href={href} className="mt-1 block text-sm text-muted hover:text-brand-700">
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-muted">{value}</p>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
