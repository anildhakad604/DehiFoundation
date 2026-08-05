import { Reveal } from "./Reveal";

const FAQ_ITEMS = [
  {
    question: "How is my donation used?",
    answer:
      "Every donation funds our four pillars directly — meals and ration kits, school fees and books, veterinary care for rescued animals, and native tree plantation. We publish programme-wise spending in our annual report.",
  },
  {
    question: "Is my donation tax-deductible?",
    answer:
      "Yes. Dehi Foundation is a registered nonprofit and donations are eligible for tax exemption under applicable sections. A receipt is issued for every contribution — reach out via the contact form if you need one reissued.",
  },
  {
    question: "Can I choose which programme my donation supports?",
    answer:
      "Yes. When you donate, you can direct your contribution toward food relief, education, animal welfare, or environment work — or leave it undesignated so we can allocate it where it's needed most.",
  },
  {
    question: "How can I volunteer with Dehi Foundation?",
    answer:
      "Use the Volunteer option in the Get Involved section or the Contact form to tell us your city and interests. We'll connect you with the next food distribution drive, plantation weekend, or animal rescue camp near you.",
  },
  {
    question: "Do you accept in-kind donations like food, clothes or books?",
    answer:
      "Yes, we accept ration, clothing, books and school supplies in good condition. Contact us before dropping off items so we can coordinate collection and make sure they reach the right programme.",
  },
  {
    question: "How can my organisation partner with Dehi Foundation?",
    answer:
      "We welcome partnerships with businesses, schools and other nonprofits to expand our food, education and animal rescue programmes. Reach out through the Partner option in Get Involved and our team will follow up.",
  },
];

export function FAQ() {
  return (
    <section className="bg-cream py-28 lg:py-36">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            FAQ
          </span>
          <h1 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-navy-deep">
            Frequently asked questions
          </h1>
          <p className="mt-4 text-base leading-relaxed text-navy-deep/70">
            Answers to what donors, volunteers and partners ask us most.
            Can&apos;t find what you&apos;re looking for? Reach out through
            our contact form.
          </p>
        </Reveal>

        <div className="mt-16 space-y-4">
          {FAQ_ITEMS.map((item, i) => (
            <Reveal key={item.question} delay={i * 0.06}>
              <details className="group rounded-2xl border border-brown/10 bg-white/70 px-6 py-5 open:shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-base font-semibold text-navy-deep marker:content-none">
                  {item.question}
                  <span className="shrink-0 text-xl leading-none text-gold transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-navy-deep/70">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
