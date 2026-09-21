"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { services } from "@/lib/services";
import { industries } from "@/lib/industries";
import { getIcon } from "@/lib/icon-map";
import { Logo } from "@/components/Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/resources/website-growth-checklist", label: "Free Guide" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between container-px sm:h-20">
        <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
          <Logo />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          <Link
            href="/"
            className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-brand-50 hover:text-brand-700"
          >
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-brand-50 hover:text-brand-700"
              aria-expanded={servicesOpen}
            >
              Services
              <ChevronDown className="size-3.5" />
            </button>
            {servicesOpen ? (
              <div className="absolute left-1/2 top-full w-[42rem] -translate-x-1/2 pt-3">
                <div className="rounded-2xl border border-border bg-surface p-3 shadow-lg shadow-brand-900/5">
                  <div className="grid grid-cols-2 gap-1">
                    {services.map((service) => {
                      const Icon = getIcon(service.icon);
                      return (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-brand-50"
                        >
                          <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                            <Icon className="size-4" />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-sm font-semibold text-foreground">
                              {service.name}
                            </span>
                            <span className="block text-xs leading-snug text-muted">
                              {service.shortDescription}
                            </span>
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                  <Link
                    href="/services"
                    className="mt-1 flex items-center justify-between rounded-xl border-t border-border px-3 pt-3 text-sm font-semibold text-brand-700"
                  >
                    View all services
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            ) : null}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setPortfolioOpen(true)}
            onMouseLeave={() => setPortfolioOpen(false)}
          >
            <button
              className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-brand-50 hover:text-brand-700"
              aria-expanded={portfolioOpen}
            >
              Portfolio
              <ChevronDown className="size-3.5" />
            </button>
            {portfolioOpen ? (
              <div className="absolute left-1/2 top-full z-20 w-80 -translate-x-1/2 pt-3">
                <div className="grid grid-cols-1 gap-1 rounded-2xl border border-border bg-surface p-3 shadow-lg shadow-brand-900/5">
                  {industries.map((industry) => {
                    const Icon = getIcon(industry.icon);
                    return (
                      <Link
                        key={industry.slug}
                        href={`/industries/${industry.slug}`}
                        className="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-brand-50"
                      >
                        <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                          <Icon className="size-4" />
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-foreground">
                            {industry.name}
                          </span>
                          <span className="block text-xs text-muted">
                            {industry.tagline}
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                  <Link
                    href="/portfolio"
                    className="mt-1 flex items-center justify-between rounded-xl border-t border-border px-3 pt-3 text-sm font-semibold text-brand-700"
                  >
                    See our case studies
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            ) : null}
          </div>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-brand-50 hover:text-brand-700"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-brand-600/20 transition-colors hover:bg-brand-700"
          >
            Get Free Quote
          </Link>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-full p-2 text-foreground lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* Mobile nav */}
      {mobileOpen ? (
        <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-border bg-background lg:hidden">
          <div className="container-px flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-foreground hover:bg-brand-50"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-1 border-t border-border pt-1">
              <button
                type="button"
                onClick={() => setMobileServicesOpen((v) => !v)}
                aria-expanded={mobileServicesOpen}
                className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-foreground hover:bg-brand-50"
              >
                Services
                <ChevronDown
                  className={`size-4 text-muted transition-transform ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileServicesOpen ? (
                <div className="pb-2 pl-1">
                  {services.map((service) => {
                    const ServiceIcon = getIcon(service.icon);
                    return (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground/80 hover:bg-brand-50"
                      >
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                          <ServiceIcon className="size-4" />
                        </span>
                        {service.name}
                      </Link>
                    );
                  })}
                </div>
              ) : null}
            </div>

            <div className="mt-1 border-t border-border pt-1">
              <button
                type="button"
                onClick={() => setMobileIndustriesOpen((v) => !v)}
                aria-expanded={mobileIndustriesOpen}
                className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-foreground hover:bg-brand-50"
              >
                Industries
                <ChevronDown
                  className={`size-4 text-muted transition-transform ${
                    mobileIndustriesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileIndustriesOpen ? (
                <div className="pb-2 pl-1">
                  {industries.map((industry) => {
                    const IndustryIcon = getIcon(industry.icon);
                    return (
                      <Link
                        key={industry.slug}
                        href={`/industries/${industry.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground/80 hover:bg-brand-50"
                      >
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                          <IndustryIcon className="size-4" />
                        </span>
                        {industry.name}
                      </Link>
                    );
                  })}
                  <Link
                    href="/portfolio"
                    onClick={() => setMobileOpen(false)}
                    className="mt-1 flex items-center gap-1.5 rounded-xl px-3 py-2.5 text-sm font-semibold text-brand-700"
                  >
                    See our case studies
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              ) : null}
            </div>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
