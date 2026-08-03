"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Our Mission", href: "#mission" },
  { label: "Programs", href: "#programs" },
  { label: "Impact", href: "#impact" },
  { label: "Stories", href: "#stories" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-[0_2px_20px_rgba(24,38,66,0.08)] border-b border-gold/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
        <Link href="#top" className="flex items-center gap-3 group">
          <span className="relative h-12 w-12 shrink-0 rounded-full overflow-hidden ring-1 ring-gold/40 bg-cream">
            <Image
              src="/logo.jpg"
              alt="Dehi Foundation"
              fill
              sizes="48px"
              className="object-contain p-0.5"
              priority
            />
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-lg font-bold tracking-wide text-forest-deep group-hover:text-gold transition-colors">
              DEHI FOUNDATION
            </span>
            <span className="block text-[11px] tracking-[0.2em] text-brown uppercase">
              Nourishing Souls, Enriching Lives
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-navy-deep/80 hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#donate"
            className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-2.5 text-sm font-semibold text-cream shadow-lg shadow-forest/20 hover:bg-forest-deep transition-colors"
          >
            Donate Now
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex flex-col gap-1.5 h-10 w-10 items-center justify-center"
        >
          <span
            className={`h-[2px] w-6 bg-forest-deep transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-forest-deep transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-forest-deep transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-cream border-t border-gold/20 px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-navy-deep"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#donate"
            onClick={() => setOpen(false)}
            className="inline-flex justify-center rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream"
          >
            Donate Now
          </a>
        </div>
      )}
    </header>
  );
}
