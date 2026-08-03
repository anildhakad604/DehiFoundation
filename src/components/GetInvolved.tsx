import { Reveal } from "./Reveal";
import { IconDrop, IconHands, IconBird } from "./icons";

const WAYS = [
  {
    icon: IconDrop,
    title: "Donate",
    desc: "Every rupee funds a meal, a sapling, or a moment of care for a being in need.",
    cta: "Give Now",
  },
  {
    icon: IconHands,
    title: "Volunteer",
    desc: "Join a food drive, a plantation morning, or a community circle near you.",
    cta: "Join Us",
  },
  {
    icon: IconBird,
    title: "Partner",
    desc: "Bring your organisation alongside ours to scale compassion further.",
    cta: "Collaborate",
  },
];

export function GetInvolved() {
  return (
    <section
      id="donate"
      className="relative overflow-hidden bg-forest-deep py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute -left-32 -bottom-32 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(224,138,62,0.2)_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">
            Get Involved
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-cream">
            Your hands can carry this forward
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cream/70">
            Whichever way you choose to give, you become part of the circle
            of hands that holds our work together.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {WAYS.map((way, i) => (
            <Reveal key={way.title} delay={i * 0.1}>
              <div className="flex h-full flex-col items-center rounded-2xl border border-cream/15 bg-cream/5 p-8 text-center backdrop-blur-sm transition-colors hover:border-gold/40 hover:bg-cream/10">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold-light">
                  <way.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-cream">
                  {way.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-cream/65">
                  {way.desc}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-navy-deep hover:bg-gold-light transition-colors"
                >
                  {way.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
