import { Reveal } from "./Reveal";
import { IconBowl, IconTree, IconPaw, IconHands } from "./icons";

const STATS = [
  { icon: IconBowl, num: "1,20,000+", label: "Meals Served" },
  { icon: IconTree, num: "8,500", label: "Trees Planted" },
  { icon: IconPaw, num: "3,200", label: "Animals Cared For" },
  { icon: IconHands, num: "60+", label: "Villages & Communities" },
];

export function Impact() {
  return (
    <section
      id="impact"
      className="relative overflow-hidden bg-navy-deep py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(circle,rgba(201,154,61,0.18)_0%,transparent_65%)]" />
      <div className="pointer-events-none absolute inset-0 texture-overlay opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">
            Our Impact
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-cream">
            Every number is a life touched
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 text-gold-light">
                <stat.icon className="h-7 w-7" />
              </div>
              <p className="mt-5 font-serif text-3xl sm:text-4xl font-bold text-cream">
                {stat.num}
              </p>
              <p className="mt-2 text-xs sm:text-sm tracking-wide text-cream/60 uppercase">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
