import { Reveal } from "./Reveal";

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
    title: "Compassion",
    desc: "We believe every act of kindness has the potential to create positive change.",
  },
  {
    title: "Dignity",
    desc: "We respect every person and every living being we serve.",
  },
  {
    title: "Integrity",
    desc: "We strive to maintain honesty, accountability, and transparency in our activities.",
  },
  {
    title: "Service",
    desc: "We are committed to serving society without discrimination.",
  },
  {
    title: "Responsibility",
    desc: "We believe social welfare is a shared responsibility.",
  },
  {
    title: "Sustainability",
    desc: "We aim to create initiatives that generate meaningful and lasting impact.",
  },
];

export function About() {
  return (
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
          <div className="mt-10 space-y-5 text-base leading-relaxed text-navy-deep/75">
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

        <Reveal delay={0.1} className="mt-16">
          <h2 className="font-serif text-2xl font-bold text-navy-deep">
            Our Vision
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-deep/75">
            To build a compassionate and responsible society where{" "}
            <em>
              people, animals, and the environment are treated with care,
              dignity, and respect.
            </em>
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-16">
          <h2 className="font-serif text-2xl font-bold text-navy-deep">
            Our Mission
          </h2>
          <ul className="mt-5 space-y-3">
            {MISSION_POINTS.map((point) => (
              <li
                key={point}
                className="flex gap-3 text-sm leading-relaxed text-navy-deep/75"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="mt-16">
          <h2 className="font-serif text-2xl font-bold text-navy-deep">
            Our Values
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {VALUES.map((value) => (
              <div key={value.title}>
                <h3 className="font-serif text-lg font-semibold text-forest-deep">
                  {value.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-deep/70">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-16">
          <h2 className="font-serif text-2xl font-bold text-navy-deep">
            Our Approach
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-navy-deep/75">
            <p>
              DEHI FOUNDATION believes that charity is not only about giving;
              it is about{" "}
              <em>
                creating dignity, opportunity, awareness, and lasting
                positive change.
              </em>
            </p>
            <p>
              We therefore focus on responsible implementation of social
              initiatives, community participation, volunteer involvement,
              and transparent utilization of resources.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
