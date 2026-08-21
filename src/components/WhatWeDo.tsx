import Link from "next/link";
import { Reveal } from "./Reveal";
import {
  IconBowl,
  IconGraduationCap,
  IconHands,
  IconHeart,
  IconPaw,
  IconTree,
} from "./icons";

const PILLARS = [
  {
    icon: IconPaw,
    tag: "Prani Raksha · Bird & Animal Welfare",
    title: "Caring for birds and animals in need",
    desc: "From feeding drives to summer water bowls, we support the health and wellbeing of birds and animals, and step in for those that are injured or abandoned.",
    activities: [
      "Food and water for birds",
      "Water bowls during summer",
      "Feeding initiatives",
      "Support for injured/abandoned animals",
      "Awareness about compassion towards animals",
    ],
    stat: "3,200+ animals & birds rescued",
    gradient: "from-gold to-brown",
  },
  {
    icon: IconBowl,
    tag: "Anna Seva · Support for Needy People",
    title: "Standing beside families in need",
    desc: "Food distribution, essential supplies and emergency assistance help economically weaker families meet their most basic needs.",
    activities: [
      "Food distribution",
      "Essential items",
      "Support to economically weaker families",
      "Assistance during emergencies",
      "Community welfare activities",
    ],
    stat: "1,20,000+ meals & essentials delivered",
    gradient: "from-brown to-brown-deep",
  },
  {
    icon: IconGraduationCap,
    tag: "Shiksha Seva · Children & Education",
    title: "Opening doors to learning for children",
    desc: "School fees, books and mentoring help children from underprivileged backgrounds stay in school and build a brighter future.",
    activities: [
      "Educational support for needy children",
      "Books, stationery and school supplies",
      "Educational awareness",
      "Mentoring and guidance",
    ],
    stat: "850+ students supported",
    gradient: "from-navy to-navy-deep",
  },
  {
    icon: IconHeart,
    tag: "Arogya Seva · Health & Medical Support",
    title: "Bringing healthcare within reach",
    desc: "We support needy individuals with medical assistance, run health awareness camps, and work alongside hospitals and medical professionals where possible.",
    activities: [
      "Assistance to needy individuals for medical needs",
      "Health awareness camps",
      "Basic health-support initiatives",
      "Collaboration with hospitals/medical professionals where appropriate",
    ],
    stat: "40+ health camps conducted",
    gradient: "from-forest to-navy-deep",
  },
  {
    icon: IconTree,
    tag: "Prakriti Raksha · Environment",
    title: "Protecting the planet we share",
    desc: "Tree plantation, cleanliness drives and water conservation efforts build a cleaner, greener and more responsible community.",
    activities: [
      "Tree plantation",
      "Cleanliness drives",
      "Water conservation",
      "Environmental awareness",
      "Responsible community practices",
    ],
    stat: "8,500+ trees planted",
    gradient: "from-forest to-forest-deep",
  },
  {
    icon: IconHands,
    tag: "Samaj Seva · Community Service",
    title: "Bringing people together for good",
    desc: "Through volunteering, awareness programmes and disaster support, we bring communities and organisations together for lasting impact.",
    activities: [
      "Volunteer activities",
      "Community awareness programmes",
      "Support during emergencies/disasters",
      "Collaboration with other genuine social organizations",
    ],
    stat: "120+ community initiatives led",
    gradient: "from-ember to-brown-deep",
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
              Six pillars, one mission of service
            </h1>
            <p className="mt-5 text-base leading-relaxed text-navy-deep/70">
              Everything we do falls under six seva pillars — bird &amp;
              animal welfare, support for needy people, children &amp;
              education, health &amp; medical support, environment, and
              community service. Here is what each looks like on the ground.
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
