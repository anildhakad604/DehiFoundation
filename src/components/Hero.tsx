"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream via-cream to-cream-deep pt-24 pb-24 lg:pt-28 lg:pb-32">
      {/* decorative radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,154,61,0.16)_0%,rgba(201,154,61,0)_65%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-brown-deep uppercase">
            देही · The Soul Within
          </span>

          <h1 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-navy-deep">
            Nourishing Souls,
            <br />
            <span className="text-forest-deep">Enriching Lives.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-deep/75">
            Dehi Foundation stands beside underprivileged families, eager
            young students, and the voiceless animals and birds who need us
            most — providing food, shelter, education and medical care, one
            act of compassion at a time.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#donate"
              className="inline-flex items-center gap-2 rounded-full bg-forest px-8 py-3.5 text-sm font-semibold tracking-wide text-cream shadow-xl shadow-forest/25 hover:bg-forest-deep transition-colors"
            >
              Donate Now
            </a>
            <a
              href="#mission"
              className="inline-flex items-center gap-2 rounded-full border border-brown/30 px-8 py-3.5 text-sm font-semibold tracking-wide text-brown-deep hover:border-gold hover:text-gold transition-colors"
            >
              Our Mission
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 max-w-md gap-6 border-t border-gold/25 pt-8">
            {[
              ["1,20,000+", "Meals & Essentials"],
              ["850+", "Students Educated"],
              ["3,200+", "Animals & Birds Rescued"],
            ].map(([num, label]) => (
              <div key={label}>
                <p className="font-serif text-2xl font-bold text-forest-deep">
                  {num}
                </p>
                <p className="mt-1 text-xs tracking-wide text-navy-deep/60">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_180deg,var(--color-forest),var(--color-gold),var(--color-ember),var(--color-forest))] opacity-90 blur-[1px]" />
          <div className="absolute inset-[6px] rounded-full bg-cream" />
          <div className="absolute inset-[18px] rounded-full overflow-hidden ring-1 ring-gold/30 shadow-2xl">
            <Image
              src="/logo.jpg"
              alt="Dehi Foundation emblem"
              fill
              sizes="(max-width: 1024px) 60vw, 420px"
              className="object-contain p-4"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
