import { Reveal } from "./Reveal";

const MILESTONES = [
  {
    year: "2018",
    title: "A single weekly kitchen",
    desc: "Dehi Foundation began in Barabanki, Uttar Pradesh, with one weekly community kitchen serving 40 families.",
  },
  {
    year: "2019",
    title: "Shiksha Seva begins",
    desc: "Our first scholarship cohort — 25 students — received school fees, books and mentoring to stay in school.",
  },
  {
    year: "2020",
    title: "Prani Raksha launches",
    desc: "We opened our first shelter and began rescuing injured strays, abandoned pets and wounded birds.",
  },
  {
    year: "2021",
    title: "Green Earth Drive takes root",
    desc: "Volunteers planted our first 1,000 native saplings, starting what has grown into an ongoing restoration effort.",
  },
  {
    year: "2023",
    title: "A six-figure milestone",
    desc: "We crossed 1,00,000 meals and essentials delivered to families across the region.",
  },
  {
    year: "2026",
    title: "Four pillars, one mission",
    desc: "Today, our food, education, animal welfare and environment programmes serve thousands of families, students and animals every year.",
  },
];

export function About() {
  return (
    <section className="bg-cream py-28 lg:py-36">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Our Story
          </span>
          <h1 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-navy-deep">
            From one meal to a movement
          </h1>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-10 space-y-5 text-base leading-relaxed text-navy-deep/75">
            <p>
              Dehi Foundation was born from a simple observation: in the same
              neighbourhoods where children went to bed hungry, stray animals
              went unfed and unwell, and talented students dropped out for
              want of a few thousand rupees in fees. We started with what we
              could do that week — cook, serve, and show up again the next
              week.
            </p>
            <p>
              That single act of service grew into four pillars —
              food, education, animal welfare and the environment — because
              we came to believe that <em>dehi</em>, the soul within, deserves
              care whether it belongs to a person, a child with a dream, or a
              creature with no one to speak for it.
            </p>
            <p>
              Every meal served, every scholarship granted, every animal
              rescued and every tree planted since has been possible because
              volunteers, donors and partners kept choosing to show up — the
              same way we did on that first day.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-16">
          <h2 className="font-serif text-2xl font-bold text-navy-deep">
            Our Journey
          </h2>
        </Reveal>

        <div className="mt-8 space-y-8 border-l-2 border-gold/25 pl-8">
          {MILESTONES.map((milestone, i) => (
            <Reveal key={milestone.year} delay={0.05 + i * 0.06}>
              <div className="relative">
                <span className="absolute -left-[38px] top-1 h-3 w-3 rounded-full bg-gold ring-4 ring-cream" />
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">
                  {milestone.year}
                </span>
                <h3 className="mt-1 font-serif text-lg font-semibold text-navy-deep">
                  {milestone.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-deep/70">
                  {milestone.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
