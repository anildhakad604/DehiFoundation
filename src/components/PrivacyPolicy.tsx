import { Reveal } from "./Reveal";

const LAST_UPDATED = "5 August 2026";

const SECTIONS = [
  {
    heading: "Information We Collect",
    paragraphs: [
      "We collect information you provide directly to us — such as your name, email address and phone number — when you donate, subscribe to our newsletter, volunteer, or contact us through the website.",
    ],
  },
  {
    heading: "How We Use Your Information",
    paragraphs: [
      "We use the information you share to process donations, respond to enquiries, coordinate volunteering and events, and send updates about our food, education, animal welfare and environment programmes if you have opted in.",
    ],
  },
  {
    heading: "Newsletter & Communications",
    paragraphs: [
      "If you subscribe to our newsletter, we use your email solely to send programme updates and event announcements. You can unsubscribe at any time using the link in any email we send, or by contacting us directly.",
    ],
  },
  {
    heading: "Donations & Payment Information",
    paragraphs: [
      "Payment details submitted for donations are processed by our payment partners and are not stored on our servers. We retain only the transaction record needed to issue a donation receipt.",
    ],
  },
  {
    heading: "Cookies & Analytics",
    paragraphs: [
      "This website may use basic, privacy-respecting analytics to understand how visitors use our pages, so we can improve the experience. No personal data collected this way is sold or shared with third parties for advertising.",
    ],
  },
  {
    heading: "Data Sharing",
    paragraphs: [
      "We do not sell or rent your personal information. We may share limited information with trusted service providers (such as payment processors) solely to carry out the services you have requested.",
    ],
  },
  {
    heading: "Your Rights",
    paragraphs: [
      "You may request access to, correction of, or deletion of your personal information held by us at any time by contacting us through the details below.",
    ],
  },
  {
    heading: "Contact Us",
    paragraphs: [
      "For any questions about this Privacy Policy or how your data is handled, write to us at hello@dehifoundation.org.",
    ],
  },
];

export function PrivacyPolicy() {
  return (
    <section className="bg-cream py-28 lg:py-36">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Legal
          </span>
          <h1 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-navy-deep">
            Privacy Policy
          </h1>
          <p className="mt-3 text-xs uppercase tracking-wide text-brown">
            Last updated: {LAST_UPDATED}
          </p>
          <p className="mt-6 text-base leading-relaxed text-navy-deep/70">
            Dehi Foundation respects your privacy. This policy explains what
            information we collect, how we use it, and the choices you have.
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
