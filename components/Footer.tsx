import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { services } from "@/lib/services";
import { Logo } from "@/components/Logo";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "@/components/icons/SocialIcons";
import { Container } from "@/components/ui/Container";

const socialLinks = [
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "LinkedIn", href: "#", Icon: LinkedInIcon },
];

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/industries", label: "Industries" },
  { href: "/resources/website-growth-checklist", label: "Free Checklist" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-8 sm:py-16">
        <div className="grid grid-cols-2 gap-x-5 gap-y-6 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
          <div className="col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-muted sm:mt-4 sm:text-sm">
              HanuiT Solutions builds websites and digital strategies for
              pest control companies and dental practices — with over a
              decade of hands-on experience turning searches into booked
              jobs and appointments.
            </p>
            <div className="mt-4 flex items-center gap-2.5 sm:mt-5 sm:gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex size-8 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 sm:size-9"
                >
                  <Icon className="size-3.5 sm:size-4" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-foreground sm:text-sm">Quick Links</h3>
            <ul className="mt-2.5 space-y-2 sm:mt-4 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-muted transition-colors hover:text-brand-700 sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-foreground sm:text-sm">Services</h3>
            <ul className="mt-2.5 space-y-2 sm:mt-4 sm:space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-xs text-muted transition-colors hover:text-brand-700 sm:text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-xs font-semibold text-foreground sm:text-sm">Contact</h3>
            <ul className="mt-2.5 space-y-2 text-xs text-muted sm:mt-4 sm:space-y-3 sm:text-sm">
              <li className="flex items-start gap-2.5 sm:gap-3">
                <MapPin className="mt-0.5 size-3.5 shrink-0 text-brand-600 sm:size-4" />
                <span>
                  SN-3, First floor, Ratauli Road, near Town Park, Bank
                  Colony, Yamuna Nagar, Kansapur, Haryana 135001
                </span>
              </li>
              <li className="flex items-center gap-2.5 sm:gap-3">
                <Phone className="size-3.5 shrink-0 text-brand-600 sm:size-4" />
                <a href="tel:+917082069620" className="hover:text-brand-700">
                  +91 7082069620
                </a>
              </li>
              <li className="flex items-center gap-2.5 sm:gap-3">
                <Mail className="size-3.5 shrink-0 text-brand-600 sm:size-4" />
                <a
                  href="mailto:herry@hanuitsolutions.com"
                  className="hover:text-brand-700"
                >
                  herry@hanuitsolutions.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 sm:gap-3">
                <Clock className="mt-0.5 size-3.5 shrink-0 text-brand-600 sm:size-4" />
                <span>Mon–Sat 9:00am–6:00pm, Sunday closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-border pt-5 text-xs text-muted sm:mt-12 sm:flex-row sm:pt-8 sm:text-sm">
          <p>© {year} HanuiT Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-brand-700">
              Get in touch
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
