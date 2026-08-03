import { Reveal } from "./Reveal";
import { IconBowl, IconTree, IconPaw, IconLight } from "./icons";

const PROGRAMS = [
  {
    icon: IconBowl,
    tag: "Annadaan · Food Seva",
    title: "A warm meal, served with dignity",
    desc: "Our kitchens and mobile ration drives deliver nutritious meals to underserved families, elders and children — because no soul should go hungry.",
    stat: "1,20,000+ meals served",
    gradient: "from-brown to-brown-deep",
  },
  {
    icon: IconTree,
    tag: "Green Earth Drive",
    title: "Rooting hope back into the land",
    desc: "We plant and nurture native trees across villages and city belts, restoring shade, soil and clean air for generations to come.",
    stat: "8,500 trees planted",
    gradient: "from-forest to-forest-deep",
  },
  {
    icon: IconPaw,
    tag: "Gau & Animal Seva",
    title: "Compassion for every creature",
    desc: "Feeding stations, water troughs and medical care support cows, strays and wildlife who share our streets and villages.",
    stat: "3,200 animals cared for",
    gradient: "from-gold to-brown",
  },
  {
    icon: IconLight,
    tag: "Community & Spirit",
    title: "Nourishing the soul within",
    desc: "Free education support, counselling circles and spiritual gatherings help communities heal, learn and rediscover inner light.",
    stat: "60+ communities reached",
    gradient: "from-navy to-navy-deep",
  },
];

export function Programs() {
  return (
    <section id="programs" className="bg-cream-deep py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Our Programs
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-navy-deep">
            Four ways we serve, every single day
          </h2>
        </Reveal>

        <div className="mt-16 space-y-6">
          {PROGRAMS.map((program, i) => (
            <Reveal key={program.tag} delay={i * 0.08}>
              <div
                className={`flex flex-col ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-stretch gap-0 overflow-hidden rounded-3xl border border-brown/10 bg-white/70 shadow-sm hover:shadow-xl hover:shadow-brown/10 transition-shadow`}
              >
                <div
                  className={`relative flex w-full shrink-0 items-center justify-center bg-gradient-to-br ${program.gradient} p-10 lg:w-72`}
                >
                  <div className="absolute inset-0 opacity-15 texture-overlay" />
                  <program.icon className="relative h-20 w-20 text-cream" />
                </div>
                <div className="flex flex-1 flex-col justify-center gap-3 p-8 lg:p-10">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    {program.tag}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-navy-deep">
                    {program.title}
                  </h3>
                  <p className="max-w-2xl text-sm leading-relaxed text-navy-deep/70">
                    {program.desc}
                  </p>
                  <span className="mt-2 inline-flex w-fit items-center rounded-full bg-forest/10 px-4 py-1.5 text-xs font-semibold text-forest-deep">
                    {program.stat}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
