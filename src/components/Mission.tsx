import { Reveal } from "./Reveal";
import { IconBowl, IconGraduationCap, IconPaw, IconTree } from "./icons";

const PILLARS = [
  {
    icon: IconBowl,
    title: "Feed, Clothe & Shelter",
    desc: "Warm meals, clothing, safe shelter and medical care reach families who have nowhere else to turn — because dignity should never depend on income.",
  },
  {
    icon: IconGraduationCap,
    title: "Educate the Underprivileged",
    desc: "School fees, books and mentoring help bright children from economically weak families stay in school and dream bigger.",
  },
  {
    icon: IconPaw,
    title: "Rescue Every Creature",
    desc: "Injured, abandoned and voiceless animals and birds are rescued, treated and rehomed with the same compassion we'd want for our own.",
  },
  {
    icon: IconTree,
    title: "Protect Nature & Wildlife",
    desc: "Tree plantation, habitat protection and clean-up drives safeguard the wild spaces that animals and future generations depend on.",
  },
];

export function Mission() {
  return (
    <section id="mission" className="relative bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Our Philosophy
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-navy-deep">
            In Sanskrit, <span className="text-forest-deep">Dehi</span> means
            &ldquo;the soul within the body.&rdquo;
          </h2>
          <p className="mt-5 text-base leading-relaxed text-navy-deep/70">
            We believe true service tends to both the vulnerable among us and
            the voiceless around us — underprivileged families, eager
            students, and animals and birds with no one else to turn to.
            Every programme we run rests on four pillars.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.1}>
              <div className="group h-full rounded-2xl border border-brown/10 bg-white/60 p-8 shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-xl hover:shadow-gold/10 hover:border-gold/30">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-forest/10 text-forest-deep transition-colors group-hover:bg-gold/15 group-hover:text-gold">
                  <pillar.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-serif text-lg font-semibold text-navy-deep">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-deep/65">
                  {pillar.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
