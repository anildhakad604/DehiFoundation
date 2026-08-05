import { Reveal } from "./Reveal";
import { IconBowl, IconGraduationCap, IconPaw, IconTree } from "./icons";

const ALLOCATION = [
  { icon: IconBowl, label: "Food, Clothing & Shelter", percent: 35, color: "bg-brown" },
  { icon: IconGraduationCap, label: "Education (Shiksha Seva)", percent: 25, color: "bg-navy" },
  { icon: IconPaw, label: "Animal & Bird Rescue", percent: 20, color: "bg-gold" },
  { icon: IconTree, label: "Environment (Green Earth Drive)", percent: 15, color: "bg-forest" },
  { icon: IconBowl, label: "Operations & Administration", percent: 5, color: "bg-navy-deep" },
];

const REPORTS = [
  { year: "FY 2024–25", status: "Available on request" },
  { year: "FY 2023–24", status: "Available on request" },
  { year: "FY 2022–23", status: "Available on request" },
];

export function Transparency() {
  return (
    <section className="bg-cream py-28 lg:py-36">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Transparency
          </span>
          <h1 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-navy-deep">
            Where every rupee goes
          </h1>
          <p className="mt-4 text-base leading-relaxed text-navy-deep/70">
            We believe donors deserve to know exactly how their contribution
            is used. Here is how funds are allocated across our programmes,
            and how to request our audited annual reports.
          </p>
        </Reveal>

        <Reveal delay={0.05} className="mt-16">
          <h2 className="font-serif text-2xl font-bold text-navy-deep">
            Fund Allocation
          </h2>
          <div className="mt-8 space-y-6">
            {ALLOCATION.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-sm font-medium text-navy-deep">
                    <item.icon className="h-5 w-5 text-brown" />
                    {item.label}
                  </span>
                  <span className="text-sm font-semibold text-navy-deep">
                    {item.percent}%
                  </span>
                </div>
                <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-brown/10">
                  <div
                    className={`h-full rounded-full ${item.color}`}
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs leading-relaxed text-navy-deep/50">
            Figures are illustrative of our typical programme allocation and
            are reviewed annually as part of our audit.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-16">
          <h2 className="font-serif text-2xl font-bold text-navy-deep">
            Annual Reports
          </h2>
          <div className="mt-8 divide-y divide-brown/10 rounded-2xl border border-brown/10 bg-white/70">
            {REPORTS.map((report) => (
              <div
                key={report.year}
                className="flex items-center justify-between gap-4 px-6 py-4"
              >
                <span className="font-serif text-base font-semibold text-navy-deep">
                  {report.year}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wide text-gold">
                  {report.status}
                </span>
              </div>
            ))}
          </div>
          <a
            href="mailto:hello@dehifoundation.org?subject=Annual%20Report%20Request"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-2.5 text-sm font-semibold text-cream hover:bg-forest-deep transition-colors"
          >
            Request a Copy
          </a>
        </Reveal>
      </div>
    </section>
  );
}
