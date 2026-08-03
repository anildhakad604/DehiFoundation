import { Reveal } from "./Reveal";
import { IconHeart } from "./icons";

const QUOTES = [
  {
    quote:
      "There were nights we had nothing to feed our children. Dehi Foundation's ration kits and warm meals meant my family never went to bed hungry again.",
    name: "Radha Devi",
    role: "Mother Supported Through Food Relief, Barabanki",
  },
  {
    quote:
      "After my father passed away, there was no money for books or fees. Dehi Foundation's scholarship let me stay in school — I want to become a teacher one day.",
    name: "Priya Sharma",
    role: "Scholarship Student, Class 10",
  },
  {
    quote:
      "We found her abandoned by the roadside, injured and starving. Dehi Foundation's rescue team treated her, and today she runs free and healthy in our shelter.",
    name: "Sr. Kavita Joshi",
    role: "Animal Rescue Partner",
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
