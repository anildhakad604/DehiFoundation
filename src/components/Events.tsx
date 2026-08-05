import { Reveal } from "./Reveal";
import { IconBowl, IconGraduationCap, IconPaw, IconTree } from "./icons";

const UPCOMING_EVENTS = [
  {
    icon: IconBowl,
    title: "Annadaan Community Kitchen Drive",
    date: "20 August 2026",
    location: "Barabanki, Uttar Pradesh",
    desc: "A day-long community kitchen serving warm meals and ration kits to families across the district.",
    gradient: "from-brown to-brown-deep",
  },
  {
    icon: IconTree,
    title: "Green Earth Plantation Weekend",
    date: "5 September 2026",
    location: "Lucknow, Uttar Pradesh",
    desc: "Volunteers gather to plant native saplings as part of the ongoing Green Earth Drive restoration effort.",
    gradient: "from-forest to-forest-deep",
  },
  {
    icon: IconPaw,
    title: "Animal Welfare Vaccination Camp",
    date: "12 October 2026",
    location: "Barabanki, Uttar Pradesh",
    desc: "Free vaccination and health checkups for stray dogs, cattle and rescued animals, with veterinary partners.",
    gradient: "from-gold to-brown",
  },
];

const PAST_EVENTS = [
  {
    icon: IconGraduationCap,
    title: "Scholarship Distribution Ceremony",
    date: "15 June 2026",
    location: "Lucknow, Uttar Pradesh",
    desc: "Scholarship kits, books and uniforms handed out to 200+ students supported through Shiksha Seva.",
    gradient: "from-navy to-navy-deep",
  },
  {
    icon: IconBowl,
    title: "Summer Ration Relief Camp",
    date: "22 April 2026",
    location: "Barabanki, Uttar Pradesh",
    desc: "Emergency ration and clothing distribution for families affected by the summer heatwave.",
    gradient: "from-brown to-brown-deep",
  },
  {
    icon: IconTree,
    title: "Tree Plantation Drive",
    date: "10 February 2026",
    location: "Lucknow, Uttar Pradesh",
    desc: "8,500+ native saplings planted with local schools and volunteer groups.",
    gradient: "from-forest to-forest-deep",
  },
];

function EventCard({
  event,
  status,
}: {
  event: (typeof UPCOMING_EVENTS)[number];
  status: "Upcoming" | "Completed";
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-brown/10 bg-white/70 p-8 shadow-sm transition-shadow hover:shadow-xl hover:shadow-brown/10">
      <div className="flex items-start justify-between gap-4">
        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${event.gradient}`}
        >
          <event.icon className="h-7 w-7 text-cream" />
        </div>
        <span
          className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] ${
            status === "Upcoming"
              ? "bg-forest/10 text-forest-deep"
              : "bg-navy-deep/5 text-navy-deep/50"
          }`}
        >
          {status}
        </span>
      </div>
      <h3 className="mt-5 font-serif text-lg font-semibold text-navy-deep">
        {event.title}
      </h3>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-gold">
        {event.date} &middot; {event.location}
      </p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-navy-deep/70">
        {event.desc}
      </p>
    </div>
  );
}

export function Events() {
  return (
    <section className="bg-cream py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Events
          </span>
          <h1 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-navy-deep">
            Where we&apos;re showing up next
          </h1>
          <p className="mt-4 text-base leading-relaxed text-navy-deep/70">
            Join a drive, camp or ceremony near you — or see what our
            volunteers and partners made possible recently.
          </p>
        </Reveal>

        <div className="mt-16">
          <Reveal>
            <h2 className="font-serif text-2xl font-bold text-navy-deep">
              Upcoming Events
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {UPCOMING_EVENTS.map((event, i) => (
              <Reveal key={event.title} delay={i * 0.08}>
                <EventCard event={event} status="Upcoming" />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <Reveal>
            <h2 className="font-serif text-2xl font-bold text-navy-deep">
              Past Events
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PAST_EVENTS.map((event, i) => (
              <Reveal key={event.title} delay={i * 0.08}>
                <EventCard event={event} status="Completed" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
