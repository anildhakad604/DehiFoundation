"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { getImageProps } from "next/image";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { IconChevronLeft, IconChevronRight } from "./icons";

type Slide = {
  /** Wide desktop/tablet banner, 1920x738 (~2.6:1). */
  src: string;
  /** Portrait 4:5 phone banner, 1080x1350 — cropped so the subject sits below the quote. */
  mobileSrc: string;
  alt: string;
};

const DESKTOP = { width: 1920, height: 738 };
const MOBILE = { width: 1080, height: 1350 };
/** Matches Tailwind's `sm` breakpoint — the banner box switches from 4:5 portrait to 2.6:1 here. */
const DESKTOP_MEDIA = "(min-width: 640px)";

// Each slide has two straight crops of the same photo (art direction via <picture>):
// a wide 2.6:1 banner for tablets/desktops and a tall 4:5 one for phones.
// Order requested by the client: cow, dog, peacock, pigeon, people.
// Only the dog banner is the client's own photo; the rest are free-licence stock photos
// (the client's own footage was too low-res):
//   cow — Monthaye, unsplash.com/photos/b1Ywo-ZKtTs · peacock — Vedang Tandel, unsplash.com/photos/LetZ9fUHaHo
//   pigeons — Soubhagya Ranjan, unsplash.com/photos/G-rlpIH7-Ag
//   people — Rajesh S Balouria, pexels.com/photo/20059284 (Pexels License)
const SLIDES: Slide[] = [
  { src: "/images/banner-cow.jpg", mobileSrc: "/images/banner-cow-mobile.jpg", alt: "A woman feeding cows resting on a street in India" },
  { src: "/images/banner-park-dogs.jpg", mobileSrc: "/images/banner-park-dogs-mobile.jpg", alt: "Two street dogs eating their meal on the grass in a park" },
  { src: "/images/banner-peacock.jpg", mobileSrc: "/images/banner-peacock-mobile.jpg", alt: "A peacock walking through tall green grass" },
  { src: "/images/banner-pigeons.jpg", mobileSrc: "/images/banner-pigeons-mobile.jpg", alt: "A man scattering grain for a large flock of pigeons" },
  { src: "/images/banner-people.jpg", mobileSrc: "/images/banner-people-mobile.jpg", alt: "Schoolboys in uniform sitting on a mat, eating a meal from leaf plates" },
];

/** Builds the <picture> sources for a slide; the browser downloads only the one matching the screen. */
function slideImage(slide: Slide) {
  const common = { alt: slide.alt, sizes: "100vw" };
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({ ...common, ...DESKTOP, src: slide.src });
  const {
    props: { srcSet: mobileSrcSet, ...img },
  } = getImageProps({ ...common, ...MOBILE, src: slide.mobileSrc });
  return { desktopSrcSet, mobileSrcSet, img };
}

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

  const { desktopSrcSet, mobileSrcSet, img } = slideImage(SLIDES[index]);

  return (
    <section
      id="top"
      className="relative w-full overflow-hidden bg-cream pt-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[4/5] max-h-[780px] w-full sm:aspect-[2.6/1]">
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
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            <picture>
              <source media={DESKTOP_MEDIA} srcSet={desktopSrcSet} />
              <source srcSet={mobileSrcSet} />
              {/* eslint-disable-next-line jsx-a11y/alt-text -- alt comes from getImageProps */}
              <img
                {...img}
                loading="eager"
                fetchPriority={index === 0 ? "high" : "auto"}
                draggable={false}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </motion.div>
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-32 bg-gradient-to-b from-navy-deep/70 to-transparent sm:h-44 lg:h-52" />
        <div className="pointer-events-none absolute inset-x-0 top-5 z-10 px-4 text-center sm:top-8 lg:top-10">
          <p className="font-serif text-lg font-bold text-cream drop-shadow-md sm:text-2xl lg:text-4xl">
            &ldquo;A Happy Soul Begins with Good Karma.&rdquo;
          </p>
          <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-cream sm:mt-3 sm:text-xs lg:text-sm">
            Feeding the Hungry &bull; Caring for Animals &bull; Protecting
            Birds &bull; Spreading Compassion
          </p>
        </div>

        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => go(index - 1)}
          className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-navy-deep/30 text-cream backdrop-blur-sm transition-colors hover:bg-navy-deep/50 sm:left-6 sm:h-11 sm:w-11"
        >
          <IconChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => go(index + 1)}
          className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-navy-deep/30 text-cream backdrop-blur-sm transition-colors hover:bg-navy-deep/50 sm:right-6 sm:h-11 sm:w-11"
        >
          <IconChevronRight className="h-5 w-5" />
        </button>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-16 bg-gradient-to-t from-navy-deep/60 to-transparent" />
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
          {SLIDES.map((s, i) => (
            <button
              key={s.src}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => go(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-6 bg-gold" : "w-2.5 bg-cream/60 hover:bg-cream/90"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
