import Link from "next/link";
import { Reveal } from "./Reveal";
import { IconBowl, IconGraduationCap, IconPaw, IconTree } from "./icons";

const PILLARS = [
  {
    icon: IconBowl,
    tag: "Anna, Vastra & Awas Seva",
    title: "Food, clothing and shelter for families in need",
    desc: "Our kitchens, ration drives and relief camps deliver meals, clothing, blankets and emergency shelter to families who struggle to meet their most basic needs.",
    activities: [
      "Weekly community kitchens serving hot, nutritious meals",
      "Emergency ration kits for families facing hardship",
      "Clothing and blanket distribution drives each winter",
      "Free medical camps and basic health check-ups",
    ],
    stat: "1,20,000+ meals & essentials delivered",
    gradient: "from-brown to-brown-deep",
  },
  {
    icon: IconGraduationCap,
    tag: "Shiksha Seva",
    title: "Opening classroom doors for underprivileged students",
    desc: "School fees, books, uniforms and after-school mentoring help talented children from economically weaker families stay in school and pursue the education they deserve.",
    activities: [
      "School fee sponsorships for children from weak economic backgrounds",
      "Books, uniforms and stationery kits every academic year",
      "After-school mentoring and tuition support",
      "Merit scholarships for students who excel despite hardship",
    ],
    stat: "850+ students supported",
    gradient: "from-navy to-navy-deep",
  },
  {
    icon: IconPaw,
    tag: "Prani Raksha",
    title: "Rescuing and healing voiceless lives",
    desc: "Our rescue teams and veterinary partners treat injured strays, abandoned pets and wounded birds, then nurse them back to health in safe shelters until they can be rehomed or released.",
    activities: [
      "Round-the-clock rescue response for injured strays and birds",
      "Veterinary treatment and in-shelter rehabilitation",
      "Sterilisation and vaccination drives to protect street animals",
      "Adoption and rehoming support once animals recover",
    ],
    stat: "3,200+ animals & birds rescued",
    gradient: "from-gold to-brown",
  },
  {
    icon: IconTree,
    tag: "Prakriti Raksha",
    title: "Protecting wildlife and the planet we share",
    desc: "Native tree plantation, habitat restoration and clean-up drives protect the wild spaces that animals, birds and future generations depend on.",
    activities: [
      "Native tree plantation drives across degraded land",
      "Habitat restoration for local wildlife and birds",
      "Community clean-up campaigns in parks and water bodies",
      "Environmental awareness workshops in schools",
    ],
    stat: "8,500+ trees planted",
    gradient: "from-forest to-forest-deep",
  },
];

export function WhatWeDo() {
  return (
    <>
      <section className="bg-cream py-28 lg:py-36">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              What We Do
            </span>
            <h1 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-navy-deep">
              Four pillars, one mission of service
            </h1>
            <p className="mt-5 text-base leading-relaxed text-navy-deep/70">
              Everything we do falls under four seva pillars — food, clothing
              &amp; shelter, education, animal &amp; bird rescue, and the
              environment. Here is what each looks like on the ground.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-deep pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="space-y-6">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.tag} delay={i * 0.08}>
                <div
                  className={`flex flex-col ${
                    i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                  } items-stretch gap-0 overflow-hidden rounded-3xl border border-brown/10 bg-white/70 shadow-sm hover:shadow-xl hover:shadow-brown/10 transition-shadow`}
                >
                  <div
                    className={`relative flex w-full shrink-0 items-center justify-center bg-gradient-to-br ${pillar.gradient} p-10 lg:w-72`}
                  >
                    <div className="absolute inset-0 opacity-15 texture-overlay" />
                    <pillar.icon className="relative h-20 w-20 text-cream" />
                  </div>
                  <div className="flex flex-1 flex-col justify-center gap-3 p-8 lg:p-10">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                      {pillar.tag}
                    </span>
                    <h2 className="font-serif text-2xl font-bold text-navy-deep">
                      {pillar.title}
                    </h2>
                    <p className="max-w-2xl text-sm leading-relaxed text-navy-deep/70">
                      {pillar.desc}
                    </p>
                    <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                      {pillar.activities.map((activity) => (
                        <li
                          key={activity}
                          className="flex items-start gap-2 text-sm text-navy-deep/70"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-2 inline-flex w-fit items-center rounded-full bg-forest/10 px-4 py-1.5 text-xs font-semibold text-forest-deep">
                      {pillar.stat}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest-deep py-20 lg:py-24">
        <div className="pointer-events-none absolute -left-32 -bottom-32 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(224,138,62,0.2)_0%,transparent_70%)]" />
        <div className="relative mx-auto max-w-2xl px-6 lg:px-10 text-center">
          <Reveal>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-cream">
              Want to be part of one of these pillars?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-cream/70">
              Whether you give, volunteer or partner with us, your support
              carries every pillar of our work forward.
            </p>
            <Link
              href="/#donate"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3 text-sm font-semibold text-navy-deep hover:bg-gold-light transition-colors"
            >
              Get Involved
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
