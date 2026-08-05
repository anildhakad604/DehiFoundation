import { Reveal } from "./Reveal";

const TEAM_MEMBERS = [
  {
    name: "Founder Name",
    role: "Founder & Managing Trustee",
    bio: "Leads the foundation's overall vision and oversees all four seva pillars — food, education, animal welfare and environment.",
    initials: "FN",
    gradient: "from-forest to-forest-deep",
  },
  {
    name: "Trustee Name",
    role: "Trustee — Programs",
    bio: "Oversees ration drives, relief camps and the scholarship programme, working directly with field volunteers.",
    initials: "TN",
    gradient: "from-navy to-navy-deep",
  },
  {
    name: "Trustee Name",
    role: "Trustee — Finance & Compliance",
    bio: "Manages funds, audits and regulatory compliance to keep every donation transparent and accountable.",
    initials: "TN",
    gradient: "from-brown to-brown-deep",
  },
  {
    name: "Coordinator Name",
    role: "Volunteer & Outreach Coordinator",
    bio: "Recruits and coordinates volunteers for plantation drives, food distribution and rescue operations.",
    initials: "CN",
    gradient: "from-gold to-brown",
  },
  {
    name: "Advisor Name",
    role: "Advisory Member — Animal Welfare",
    bio: "Guides rescue protocols and veterinary partnerships for the Prani Raksha animal & bird rescue programme.",
    initials: "AN",
    gradient: "from-forest to-forest-deep",
  },
  {
    name: "Advisor Name",
    role: "Advisory Member — Environment",
    bio: "Advises on native species selection and habitat restoration for the Green Earth Drive programme.",
    initials: "AN",
    gradient: "from-navy to-navy-deep",
  },
];

export function Team() {
  return (
    <section className="bg-cream py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Our Team
          </span>
          <h1 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-navy-deep">
            The trustees behind the mission
          </h1>
          <p className="mt-4 text-base leading-relaxed text-navy-deep/70">
            A small team of trustees, advisors and coordinators who guide
            Dehi Foundation&apos;s work across food, education, animal welfare
            and the environment.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM_MEMBERS.map((member, i) => (
            <Reveal key={member.role} delay={i * 0.08}>
              <div className="flex h-full flex-col items-center rounded-2xl border border-brown/10 bg-white/70 p-8 text-center shadow-sm transition-shadow hover:shadow-xl hover:shadow-brown/10">
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${member.gradient} font-serif text-2xl font-bold text-cream`}
                >
                  {member.initials}
                </div>
                <h3 className="mt-5 font-serif text-lg font-semibold text-navy-deep">
                  {member.name}
                </h3>
                <span className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-gold">
                  {member.role}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-navy-deep/70">
                  {member.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
