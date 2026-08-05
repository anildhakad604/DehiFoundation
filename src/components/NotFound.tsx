import Link from "next/link";
import { Reveal } from "./Reveal";
import { IconTree } from "./icons";

const QUICK_LINKS = [
  { label: "Our Story", href: "/about" },
  { label: "Programs", href: "/#programs" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/#contact" },
];

export function NotFound() {
  return (
    <section className="relative overflow-hidden bg-cream py-32 lg:py-40">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,154,61,0.16)_0%,rgba(201,154,61,0)_65%)]" />

      <div className="relative mx-auto max-w-2xl px-6 text-center lg:px-10">
        <Reveal>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-forest/10 text-forest-deep">
            <IconTree className="h-10 w-10" />
          </div>
          <p className="mt-8 font-serif text-6xl font-bold text-gold">404</p>
          <h1 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-navy-deep">
            This path hasn&apos;t been planted yet
          </h1>
          <p className="mt-4 text-base leading-relaxed text-navy-deep/70">
            The page you&apos;re looking for doesn&apos;t exist or may have
            moved. Let&apos;s get you back to somewhere familiar.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-forest px-8 py-3.5 text-sm font-semibold tracking-wide text-cream shadow-xl shadow-forest/25 hover:bg-forest-deep transition-colors"
            >
              Back to Home
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-gold/25 pt-8">
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-navy-deep/70 hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
