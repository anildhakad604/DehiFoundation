import { Reveal } from "./Reveal";
import {
  IconBowl,
  IconGraduationCap,
  IconHands,
  IconPaw,
  IconTree,
} from "./icons";

const PILLARS = [
  {
    icon: IconPaw,
    title: "Bird & Animal Welfare",
    desc: "We promote care and compassion towards birds and animals through providing food and drinking water, supporting animal welfare activities, and creating awareness about responsible treatment of animals.",
  },
  {
    icon: IconBowl,
    title: "Support for the Needy",
    desc: "We assist people facing financial or social difficulties by supporting initiatives related to food, essential requirements, education, healthcare and other basic needs.",
  },
  {
    icon: IconTree,
    title: "Environment & Sustainability",
    desc: "We encourage environmentally responsible practices and community participation in activities that contribute towards a cleaner, greener and healthier environment.",
  },
  {
    icon: IconHands,
    title: "Community Development",
    desc: "We work towards bringing people together for meaningful social initiatives and encouraging a culture of volunteering, giving and community participation.",
  },
  {
    icon: IconGraduationCap,
    title: "Education & Awareness",
    desc: "We support awareness initiatives that encourage education, responsible citizenship, compassion, environmental consciousness and social responsibility.",
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
            Every programme we run rests on five key areas of work.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
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
