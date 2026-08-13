"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { services } from "@/lib/services";
import { getIcon } from "@/lib/icon-map";
import { Logo } from "@/components/Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/industries", label: "Industries" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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
              <div className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3">
                <div className="grid grid-cols-1 gap-1 rounded-2xl border border-border bg-surface p-3 shadow-lg shadow-brand-900/5">
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
                        <span>
                          <span className="block text-sm font-semibold text-foreground">
                            {service.name}
                          </span>
                          <span className="block text-xs text-muted">
                            {service.shortDescription}
                          </span>
                        </span>
                      </Link>
                    );
                  })}
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
        <div className="border-t border-border bg-background lg:hidden">
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
            <div className="mt-1 border-t border-border pt-3">
              <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wide text-muted">
                Services
              </p>
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-sm text-foreground/80 hover:bg-brand-50"
                >
                  {service.name}
                </Link>
              ))}
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
