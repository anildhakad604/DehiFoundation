import { Reveal } from "./Reveal";
import { IconCheck, IconHeart } from "./icons";

const MISSION_POINTS = [
  "Support underprivileged, needy, and vulnerable individuals.",
  "Provide food, water, and care for birds and animals.",
  "Promote kindness and compassion towards animals and nature.",
  "Undertake community welfare and charitable initiatives.",
  "Promote awareness about environmental responsibility.",
  "Encourage individuals and communities to participate in social service.",
  "Support initiatives that contribute to education, health, livelihood, and social well-being.",
  "Develop sustainable programs that create long-term community impact.",
];

const VALUES = [
  {
    number: "01",
    title: "Compassion",
    desc: "We believe every act of kindness has the potential to create positive change.",
  },
  {
    number: "02",
    title: "Dignity",
    desc: "We respect every person and every living being we serve.",
  },
  {
    number: "03",
    title: "Integrity",
    desc: "We strive to maintain honesty, accountability, and transparency in our activities.",
  },
  {
    number: "04",
    title: "Service",
    desc: "We are committed to serving society without discrimination.",
  },
  {
    number: "05",
    title: "Responsibility",
    desc: "We believe social welfare is a shared responsibility.",
  },
  {
    number: "06",
    title: "Sustainability",
    desc: "We aim to create initiatives that generate meaningful and lasting impact.",
  },
];

export function About() {
  return (
    <>
      <section className="bg-cream py-28 lg:py-36">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Reveal className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              About Us
            </span>
            <h1 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-navy-deep">
              Compassion, Dignity and Responsibility
            </h1>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-10 space-y-5 text-base leading-relaxed text-navy-deep/75 text-justify">
              <p>
                DEHI FOUNDATION was established with a simple vision —{" "}
                <em>
                  to serve society with compassion, dignity, and
                  responsibility.
                </em>
              </p>
              <p>
                Our work focuses on areas where small interventions can create
                meaningful impact. From providing food and water to birds and
                animals to supporting underprivileged and needy individuals, we
                work to build a culture of care and social responsibility.
              </p>
              <p>
                We believe that every individual, regardless of their
                circumstances, deserves dignity, compassion, and an
                opportunity to live a better life.
              </p>
              <p>
                Our approach is based on{" "}
                <em>service, transparency, participation, and sustainability</em>.
                We seek to work with volunteers, donors, professionals,
                organizations, and members of the community who share our
                commitment to creating positive change.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-deep py-24 lg:py-28">
        <div className="mx-auto max-w-2xl px-6 lg:px-10 text-center">
          <Reveal>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest/10 text-forest-deep">
              <IconHeart className="h-7 w-7" />
            </div>
            <span className="mt-5 block text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Our Vision
            </span>
            <p className="mt-5 font-serif text-2xl italic leading-snug text-navy-deep sm:text-3xl">
              To build a compassionate and responsible society where people,
              animals, and the environment are treated with care, dignity,
              and respect.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-24 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Our Mission
            </span>
            <h2 className="mt-4 font-serif text-2xl sm:text-3xl font-bold text-navy-deep">
              What we set out to do
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {MISSION_POINTS.map((point, i) => (
              <Reveal key={point} delay={i * 0.05}>
                <div className="flex h-full items-start gap-3 rounded-xl border border-brown/10 bg-white/60 p-5 shadow-sm">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest-deep">
                    <IconCheck className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm leading-relaxed text-navy-deep/75">
                    {point}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-deep py-24 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Our Values
            </span>
            <h2 className="mt-4 font-serif text-2xl sm:text-3xl font-bold text-navy-deep">
              What guides everything we do
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-brown/10 bg-white/60 p-8 shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-xl hover:shadow-gold/10 hover:border-gold/30">
                  <span className="font-serif text-3xl font-bold text-gold">
                    {value.number}
                  </span>
                  <h3 className="mt-3 font-serif text-lg font-semibold text-navy-deep">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-deep/65">
                    {value.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest-deep py-24 lg:py-28">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(224,138,62,0.2)_0%,transparent_70%)]" />
        <div className="relative mx-auto max-w-2xl px-6 lg:px-10 text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">
              Our Approach
            </span>
            <h2 className="mt-4 font-serif text-2xl sm:text-3xl font-bold text-cream">
              Charity is not only about giving
            </h2>
            <p className="mt-5 text-base leading-relaxed text-cream/75">
              DEHI FOUNDATION believes it is about{" "}
              <em>
                creating dignity, opportunity, awareness, and lasting
                positive change.
              </em>{" "}
              We therefore focus on responsible implementation of social
              initiatives, community participation, volunteer involvement,
              and transparent utilization of resources.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
