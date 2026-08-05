import { Reveal } from "./Reveal";

const LAST_UPDATED = "5 August 2026";

const SECTIONS = [
  {
    heading: "Acceptance of Terms",
    paragraphs: [
      "By using this website, you agree to these Terms of Service. If you do not agree, please do not use the site.",
    ],
  },
  {
    heading: "Use of the Website",
    paragraphs: [
      "This website is provided to share information about Dehi Foundation's programmes and to enable donations, volunteering and partnership enquiries. You agree to use it only for lawful purposes.",
    ],
  },
  {
    heading: "Donations",
    paragraphs: [
      "Donations made through this website support our food, education, animal welfare and environment programmes. Donations are voluntary and, except where required by law or agreed with our team, are non-refundable once processed.",
    ],
  },
  {
    heading: "Volunteering & Events",
    paragraphs: [
      "Signing up to volunteer or attend an event through this website does not guarantee a place — our team will confirm details directly with you. Participation in drives and camps is at your own discretion and risk.",
    ],
  },
  {
    heading: "Intellectual Property",
    paragraphs: [
      "All text, images and branding on this website belong to Dehi Foundation unless otherwise noted, and may not be reproduced without permission.",
    ],
  },
  {
    heading: "Limitation of Liability",
    paragraphs: [
      "Dehi Foundation makes reasonable efforts to keep this website accurate and available, but does not guarantee uninterrupted access and is not liable for indirect or incidental damages arising from its use.",
    ],
  },
  {
    heading: "Changes to These Terms",
    paragraphs: [
      "We may update these Terms from time to time. Continued use of the website after changes are posted constitutes acceptance of the revised Terms.",
    ],
  },
  {
    heading: "Governing Law",
    paragraphs: [
      "These Terms are governed by the laws of India, without regard to conflict-of-law principles.",
    ],
  },
  {
    heading: "Contact Us",
    paragraphs: [
      "For any questions about these Terms, write to us at hello@dehifoundation.org.",
    ],
  },
];

export function Terms() {
  return (
    <section className="bg-cream py-28 lg:py-36">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Legal
          </span>
          <h1 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-navy-deep">
            Terms of Service
          </h1>
          <p className="mt-3 text-xs uppercase tracking-wide text-brown">
            Last updated: {LAST_UPDATED}
          </p>
          <p className="mt-6 text-base leading-relaxed text-navy-deep/70">
            These Terms govern your use of the Dehi Foundation website,
            including donations, volunteering and event sign-ups.
          </p>
        </Reveal>

        <div className="mt-14 space-y-10">
          {SECTIONS.map((section, i) => (
            <Reveal key={section.heading} delay={Math.min(i * 0.05, 0.3)}>
              <h2 className="font-serif text-xl font-semibold text-navy-deep">
                {section.heading}
              </h2>
              {section.paragraphs.map((p) => (
                <p
                  key={p}
                  className="mt-3 text-sm leading-relaxed text-navy-deep/70"
                >
                  {p}
                </p>
              ))}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
