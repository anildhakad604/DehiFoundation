"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import {
  IconBowl,
  IconTree,
  IconPaw,
  IconLight,
  IconChevronLeft,
  IconChevronRight,
} from "./icons";

const SLIDES = [
  {
    icon: IconBowl,
    tag: "Annadaan · Food Seva",
    title: "A Warm Meal, Served with Dignity",
    desc: "Our kitchens and mobile ration drives reach families, elders and children who would otherwise go without.",
    stat: "1,20,000+ meals served",
    cta: { label: "Support a Meal", href: "#donate" },
    gradient: "from-brown to-brown-deep",
  },
  {
    icon: IconTree,
    tag: "Green Earth Drive",
    title: "Rooting Hope Back into the Land",
    desc: "Tree plantation and community greening drives restore the soil, shade and clean air that sustain us.",
    stat: "8,500+ trees planted",
    cta: { label: "Plant With Us", href: "#donate" },
    gradient: "from-forest to-forest-deep",
  },
  {
    icon: IconPaw,
    tag: "Gau & Animal Seva",
    title: "Compassion for Every Creature",
    desc: "Feeding stations, water troughs and medical care support strays, cows and wildlife across our streets.",
    stat: "3,200+ animals cared for",
    cta: { label: "Give Shelter", href: "#donate" },
    gradient: "from-gold to-brown",
  },
  {
    icon: IconLight,
    tag: "Community & Spirit",
    title: "Nourishing the Soul Within",
    desc: "Education support, counselling circles and spiritual gatherings help communities heal and grow.",
    stat: "60+ communities reached",
    cta: { label: "Join a Circle", href: "#donate" },
    gradient: "from-navy to-navy-deep",
  },
];

const AUTOPLAY_MS = 6000;
const SWIPE_THRESHOLD = 60;

const variants = {
  enter: (direction: number) => ({ x: direction > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: "0%", opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? "-100%" : "100%", opacity: 0 }),
};

export function BannerSlider() {
  const [[index, direction], setSlide] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((next: number) => {
    setSlide(([current]) => {
      const dir = next > current ? 1 : -1;
      const wrapped = (next + SLIDES.length) % SLIDES.length;
      return [wrapped, dir];
    });
  }, []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => go(index + 1), AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [index, paused, go]);

  const handleDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x < -SWIPE_THRESHOLD) go(index + 1);
    else if (info.offset.x > SWIPE_THRESHOLD) go(index - 1);
  };

  const slide = SLIDES[index];
  const Icon = slide.icon;

  return (
    <section
      id="top"
      className="relative w-full overflow-hidden pt-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-[560px] sm:h-[600px] lg:h-[660px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className={`absolute inset-0 flex cursor-grab items-center justify-center bg-gradient-to-br ${slide.gradient} px-6 active:cursor-grabbing`}
          >
            <Icon className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rotate-12 text-cream/10 sm:h-96 sm:w-96" />
            <Icon className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 -rotate-12 text-cream/10" />

            <div className="relative mx-auto max-w-2xl text-center">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-cream/15 text-gold-light">
                <Icon className="h-7 w-7" />
              </span>
              <span className="mt-5 block text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">
                {slide.tag}
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold text-cream sm:text-4xl lg:text-5xl">
                {slide.title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-cream/75 sm:text-base">
                {slide.desc}
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={slide.cta.href}
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold tracking-wide text-navy-deep shadow-xl hover:bg-gold-light transition-colors"
                >
                  {slide.cta.label}
                </a>
                <a
                  href="#programs"
                  className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-8 py-3.5 text-sm font-semibold tracking-wide text-cream hover:border-gold hover:text-gold-light transition-colors"
                >
                  Our Programs
                </a>
              </div>
              <div className="mt-8 inline-flex items-center rounded-full bg-cream/10 px-5 py-2 text-xs font-semibold tracking-wide text-cream/90 sm:text-sm">
                {slide.stat}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => go(index - 1)}
          className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-cream/10 text-cream backdrop-blur-sm transition-colors hover:bg-cream/25 sm:left-6 sm:h-11 sm:w-11"
        >
          <IconChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => go(index + 1)}
          className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-cream/10 text-cream backdrop-blur-sm transition-colors hover:bg-cream/25 sm:right-6 sm:h-11 sm:w-11"
        >
          <IconChevronRight className="h-5 w-5" />
        </button>

        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
          {SLIDES.map((s, i) => (
            <button
              key={s.title}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => go(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-6 bg-gold" : "w-2.5 bg-cream/40 hover:bg-cream/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
