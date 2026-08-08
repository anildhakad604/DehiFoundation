import Image from "next/image";
import Link from "next/link";

const LINK_GROUPS = [
  {
    title: "Explore",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "What We Do", href: "/what-we-do" },
      { label: "Gallery", href: "/gallery" },
      { label: "Our Team", href: "/team" },
      { label: "Events", href: "/events" },
      { label: "FAQ", href: "/faq" },
      { label: "Transparency", href: "/transparency" },
    ],
  },
];

export function Footer() {
  return (
    <footer id="contact" className="relative bg-navy-deep pt-20 pb-8">
      <div className="px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative h-12 w-12 shrink-0 rounded-full overflow-hidden ring-1 ring-gold/40 bg-cream">
                <Image
                  src="/logo.jpg"
                  alt="Dehi Foundation"
                  fill
                  sizes="48px"
                  className="object-contain p-0.5"
                />
              </span>
              <span className="font-serif text-lg font-bold text-cream">
                DEHI FOUNDATION
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/60">
              Nourishing souls and enriching lives — through food, education,
              medical care and shelter for people in need, and rescue and
              protection for voiceless animals and birds.
            </p>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
                {group.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/65 hover:text-gold-light transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              Stay Connected
            </h4>
            <p className="mt-5 text-sm leading-relaxed text-cream/60">
              hello@dehifoundation.org
              <br />
              +91 98765 43210
            </p>
            <form className="mt-6 flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 rounded-full border border-cream/20 bg-cream/5 px-4 py-2.5 text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep hover:bg-gold-light transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="gold-divider mt-16" />

        <div className="flex flex-col items-center justify-between gap-4 pt-8 sm:flex-row">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Dehi Foundation. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-cream/50">
            <Link href="/privacy-policy" className="hover:text-gold-light transition-colors">
              Privacy Policy
            </Link>
            <span className="text-cream/25">|</span>
            <Link href="/terms" className="hover:text-gold-light transition-colors">
              Terms of Service
            </Link>
          </div>
          <p className="text-xs italic text-cream/50">
            &ldquo;Nourishing Souls, Enriching Lives.&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
