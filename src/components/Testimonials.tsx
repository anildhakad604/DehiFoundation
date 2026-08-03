import { Reveal } from "./Reveal";
import { IconHeart } from "./icons";

const QUOTES = [
  {
    quote:
      "When the volunteers arrived with food, they didn't just feed us — they sat and spoke with my grandmother like family. That warmth stays with you.",
    name: "Radha Devi",
    role: "Community Member, Barabanki",
  },
  {
    quote:
      "I've planted saplings with Dehi Foundation for two years now. Watching the first grove finally give shade felt like watching a promise kept.",
    name: "Arjun Mehta",
    role: "Volunteer, Green Earth Drive",
  },
  {
    quote:
      "Our shelter partners with them for the winter feeding drives. The dogs and cows in our lane are healthier than they've ever been.",
    name: "Sr. Kavita Joshi",
    role: "Animal Welfare Partner",
  },
];

export function Testimonials() {
  return (
    <section id="stories" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Voices from the Field
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-navy-deep">
            Stories that keep us going
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {QUOTES.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-2xl border border-gold/20 bg-white/60 p-8 shadow-sm">
                <IconHeart className="h-8 w-8 text-gold" />
                <blockquote className="mt-6 flex-1 text-sm leading-relaxed text-navy-deep/75">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-brown/10 pt-4">
                  <p className="font-serif text-base font-semibold text-navy-deep">
                    {t.name}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-brown">
                    {t.role}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
