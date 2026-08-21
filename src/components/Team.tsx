import Image from "next/image";
import { Reveal } from "./Reveal";

const TEAM_MEMBERS: {
  name: string;
  role: string;
  bio: string;
  initials: string;
  gradient: string;
  image?: string;
}[] = [
  {
    name: "CA Kishore Dhingra",
    role: "Trustee & Managing Force Behind DEHI FOUNDATION",
    bio: "A Chartered Accountant of 15+ years, he established DEHI FOUNDATION to carry forward his father's legacy of kindness and service, and oversees all five seva pillars — food, education, animal welfare, environment and community development.",
    initials: "KD",
    gradient: "from-forest to-forest-deep",
    image: "/KISHORE DHINGRA.jpeg",
  },
  {
    name: "CA Kunal Dhingra",
    role: "Trustee",
    bio: "A Chartered Accountant of nearly 10 years, he practices alongside his elder brother CA Kishore Dhingra and serves as Trustee, carrying forward their father's legacy of kindness and service.",
    initials: "KD",
    gradient: "from-brown to-brown-deep",
    image: "/KUNAL DHINGRA IMAGE.jpeg",
  },
  
  
 
];

export function Team() {
  return (
    <>
      <section className="bg-cream-deep py-28 lg:py-36">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Reveal className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Founder&apos;s Message
            </span>
            <div className="relative mx-auto mt-6 h-36 w-36 overflow-hidden rounded-full ring-2 ring-gold/40 shadow-lg">
              <Image
                src="/SHREE HIRA LAL DHINGRA.jpeg"
                alt="Late Shri Hira Lal Dhingra"
                fill
                sizes="144px"
                className="object-cover object-top"
                priority
              />
            </div>
            <h1 className="mt-6 font-serif text-3xl sm:text-4xl font-bold text-navy-deep">
              In Loving Memory of Late Shri Hira Lal Dhingra
            </h1>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-10 space-y-5 text-base leading-relaxed text-navy-deep/75">
              <p>
                DEHI FOUNDATION is founded in the loving memory of{" "}
                <em>
                  Late Shri Hira Lal Dhingra, a man whose greatest wealth was
                  never measured in money, but in the{" "}
                  <strong>
                    good wishes, blessings, respect, and love he earned
                    throughout his life
                  </strong>
                  .
                </em>
              </p>
              <p>
                He was a simple, humble, and deeply compassionate person. He
                ran a departmental store and lived a modest life, but
                whenever he saw someone in greater need than himself, his
                heart always guided him to help.
              </p>
              <p>
                He had a rare quality —{" "}
                <em>
                  he never measured his kindness by what he could afford to
                  give. He measured it by what the other person needed.
                </em>
              </p>
              <p>
                There were many occasions when he himself had very little,
                yet if someone came to him seeking help, he would still find
                a way to support them. His thinking was simple: if someone is
                standing before me asking for help, perhaps their need is
                greater than mine.
              </p>
              <p>
                This was not something he taught through words.{" "}
                <em>He taught it through the way he lived.</em>
              </p>
              <p>
                He had a special affection for children and was always
                willing to guide, encourage, and support them. People from
                different walks of life remember him for his helpful nature,
                his warmth, and his willingness to stand beside others during
                difficult times.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-14">
            <h2 className="font-serif text-2xl font-bold text-navy-deep">
              A Father Who Gave More Than Wealth
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-navy-deep/75">
              <p>
                As a father, he was a constant source of guidance and
                strength to his sons, <em>Kishore Dhingra and Kunal
                Dhingra</em>.
              </p>
              <p>
                He taught them that earning money is important, but{" "}
                <em>
                  earning the trust, respect, and blessings of people is far
                  more valuable
                </em>
                .
              </p>
              <p>
                He did not focus on creating a large financial fortune for
                his family. Instead, he invested in something much more
                precious —{" "}
                <em>
                  good values, honesty, hard work, humility, and compassion
                </em>
                .
              </p>
              <p>
                The success and stability that his sons have achieved in
                their lives are, in many ways, a reflection of the values and
                blessings he gave them.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-14">
            <h2 className="font-serif text-2xl font-bold text-navy-deep">
              His Greatest Wealth — Good Wishes
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-navy-deep/75">
              <p>
                Late Shri Hira Lal Dhingra believed that a person&apos;s true
                wealth is not what they leave behind in a bank account, but{" "}
                <em>the number of hearts that remember them with gratitude</em>
                .
              </p>
              <p>He earned those blessings throughout his life.</p>
              <p>
                He passed away at the age of <em>59</em>, after being
                diagnosed with blood cancer. His illness progressed rapidly,
                and within approximately three months of his diagnosis, he
                left this world.
              </p>
              <p>His journey was short, but the impact of his life was lasting.</p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-14">
            <h2 className="font-serif text-2xl font-bold text-navy-deep">
              Continuing His Legacy
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-navy-deep/75">
              <p>
                DEHI FOUNDATION is our humble effort to carry forward the
                values he lived by.
              </p>
              <p>
                Through this Foundation, we want to continue his spirit of{" "}
                <em>
                  helping people, supporting children, caring for birds and
                  animals, serving the community, and extending a helping
                  hand to those who need it most.
                </em>
              </p>
              <p>
                We believe that every act of kindness, however small, has the
                power to create a lasting impact.
              </p>
              <p>
                Our goal is not simply to remember him.{" "}
                <em>Our goal is to live by the values he taught us.</em>
              </p>
              <p>
                He may not have left behind a great financial fortune, but he
                left behind something far greater:
              </p>
              <p className="font-semibold text-navy-deep">
                A legacy of kindness.
                <br />
                A legacy of humanity.
                <br />
                A legacy of blessings.
                <br />A legacy that continues through his family and through
                every good deed done in his name.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="mt-16 border-l-2 border-gold/40 pl-6">
            <blockquote className="font-serif text-xl italic leading-relaxed text-navy-deep">
              &ldquo;Some people leave behind wealth. Some leave behind
              memories. A rare few leave behind values that continue to
              inspire generations.&rdquo;
            </blockquote>
            <p className="mt-5 text-sm italic text-navy-deep/70">
              Late Shri Hira Lal Dhingra
              <br />
              Founder – DEHI FOUNDATION
            </p>
            <p className="mt-2 text-sm font-semibold text-gold">
              Forever in our hearts. Forever in our actions.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-28 lg:py-36">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Reveal className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              About the Trustee
            </span>
            <div className="relative mx-auto mt-6 h-32 w-32 overflow-hidden rounded-full ring-2 ring-gold/40 shadow-lg">
              <Image
                src="/KISHORE DHINGRA.jpeg"
                alt="CA Kishore Dhingra"
                fill
                sizes="128px"
                className="object-cover object-top"
              />
            </div>
            <h2 className="mt-6 font-serif text-3xl sm:text-4xl font-bold text-navy-deep">
              CA Kishore Dhingra
            </h2>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.15em] text-forest-deep">
              Trustee &amp; Managing Force Behind DEHI FOUNDATION
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-navy-deep/75">
              <p>
                CA Kishore Dhingra is a Chartered Accountant and has been in
                professional practice for more than 15 years.
              </p>
              <p>
                He has built his professional journey around the principles
                of integrity, discipline, professional excellence, and
                service — values that were deeply influenced by his father,
                Late Shri Hira Lal Dhingra.
              </p>
              <p>
                After his father&apos;s passing, Kishore decided to give a
                meaningful direction to his father&apos;s legacy by
                establishing DEHI FOUNDATION and creating a platform through
                which his father&apos;s values of kindness and service could
                continue.
              </p>
              <p>
                While his professional life is dedicated to helping
                individuals and businesses through his Chartered Accountancy
                practice, his personal mission through DEHI FOUNDATION is to
                serve society and help those who may need a helping hand.
              </p>
              <p>
                For him, the Foundation is not about creating a legacy of
                his own. <em>It is about preserving the legacy of his
                father.</em>
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-14 border-l-2 border-gold/40 pl-6">
            <h3 className="font-serif text-xl font-bold text-navy-deep">
              His Philosophy
            </h3>
            <blockquote className="mt-4 font-serif text-xl italic leading-relaxed text-navy-deep">
              &ldquo;Success is not only about what we achieve for ourselves.
              It is also about what we are able to give back to
              society.&rdquo;
            </blockquote>
            <p className="mt-4 text-base leading-relaxed text-navy-deep/75">
              CA Kishore Dhingra believes that the best way to remember his
              father is to continue doing the good work his father believed
              in — helping people, supporting those in need, caring for
              animals and birds, and spreading kindness wherever possible.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-14">
            <h3 className="font-serif text-xl font-bold text-navy-deep">
              From Father&apos;s Values to a Foundation
            </h3>
            <p className="mt-5 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 rounded-2xl border border-gold/25 bg-cream-deep px-6 py-5 text-center text-sm font-semibold text-forest-deep">
              <span>Late Shri Hira Lal Dhingra</span>
              <span className="text-gold">→</span>
              <span>Values</span>
              <span className="text-gold">→</span>
              <span>CA Kishore Dhingra</span>
              <span className="text-gold">→</span>
              <span>DEHI FOUNDATION</span>
              <span className="text-gold">→</span>
              <span>Service to Society</span>
            </p>
            <div className="mt-5 space-y-2 text-base leading-relaxed text-navy-deep/75">
              <p>This is the journey behind DEHI FOUNDATION.</p>
              <p>A father&apos;s values became a son&apos;s responsibility.</p>
              <p>A son&apos;s responsibility became a Foundation.</p>
              <p>
                And the Foundation will carry that legacy forward for
                generations.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-14">
            <h3 className="font-serif text-xl font-bold text-navy-deep">
              Our Promise
            </h3>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-navy-deep/75">
              <p>
                We may never be able to repay everything our parents give us.
              </p>
              <p>
                But we can honour them by living the values they taught us
                and making their goodness live beyond their lifetime.
              </p>
              <p className="font-semibold text-navy-deep">
                DEHI FOUNDATION is our humble promise to do exactly that.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-deep py-28 lg:py-36">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Reveal className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              About the Trustee
            </span>
            <div className="relative mx-auto mt-6 h-32 w-32 overflow-hidden rounded-full ring-2 ring-gold/40 shadow-lg">
              <Image
                src="/KUNAL DHINGRA IMAGE.jpeg"
                alt="CA Kunal Dhingra"
                fill
                sizes="128px"
                className="object-cover object-top"
              />
            </div>
            <h2 className="mt-6 font-serif text-3xl sm:text-4xl font-bold text-navy-deep">
              CA Kunal Dhingra
            </h2>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.15em] text-forest-deep">
              Trustee | DEHI FOUNDATION
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-navy-deep/75">
              <p>
                <em>
                  CA Kunal Dhingra, the younger son of Late Shri Hira Lal
                  Dhingra, became a{" "}
                  <strong>
                    Chartered Accountant approximately 10 years ago
                  </strong>
                </em>{" "}
                and has since been practicing alongside his elder brother,{" "}
                <em>CA Kishore Dhingra</em>.
              </p>
              <p>
                Over the years, Kunal has built his professional journey on
                the values instilled in him by his father —{" "}
                <em>
                  honesty, integrity, hard work, discipline, humility, and
                  helping others
                </em>
                .
              </p>
              <p>
                As a <em>Trustee of DEHI FOUNDATION</em>, Kunal is committed
                to carrying forward his father&apos;s values and contributing
                towards meaningful social welfare initiatives.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-14">
            <h3 className="font-serif text-xl font-bold text-navy-deep">
              Carrying Forward His Father&apos;s Legacy
            </h3>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-navy-deep/75">
              <p>
                For Kunal, DEHI FOUNDATION is not simply a social
                organization. It is a{" "}
                <em>
                  personal connection to his father and the values he stood
                  for
                </em>
                .
              </p>
              <p>
                Late Shri Hira Lal Dhingra believed that a person&apos;s
                greatest achievement is not the wealth they accumulate, but
                the{" "}
                <em>
                  good wishes, respect, and blessings they earn through their
                  actions
                </em>
                .
              </p>
              <p>
                Kunal grew up seeing these values in his father&apos;s
                everyday life. Today, together with his elder brother, he
                wants to transform those teachings into meaningful service
                to society.
              </p>
              <p>
                As a Trustee, Kunal supports the Foundation&apos;s vision of
                helping people in need, supporting children, caring for
                birds and animals, and undertaking initiatives that promote
                compassion and community welfare.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-14 border-l-2 border-gold/40 pl-6">
            <h3 className="font-serif text-xl font-bold text-navy-deep">
              A Shared Family Mission
            </h3>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-navy-deep/75">
              <p>
                Kunal and his elder brother, <em>CA Kishore Dhingra</em>,
                share a common purpose — to ensure that their father&apos;s
                values continue to live on through their actions.
              </p>
            </div>
            <blockquote className="mt-4 font-serif text-xl italic leading-relaxed text-navy-deep">
              &ldquo;Our father left us many memories, but his greatest gift
              was the values he gave us. We want those values to continue
              serving society.&rdquo;
            </blockquote>
            <p className="mt-4 text-base leading-relaxed text-navy-deep/75">
              For Kunal, every initiative undertaken through DEHI FOUNDATION
              is a small step towards keeping his father&apos;s memory
              alive.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-14 text-center">
            <p className="text-sm italic text-navy-deep/70">
              CA Kunal Dhingra
              <br />
              Trustee – DEHI FOUNDATION
            </p>
            <p className="mt-2 text-sm font-semibold text-gold">
              Continuing a legacy of kindness, compassion and service.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Our Team
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-navy-deep">
              The trustees behind the mission
            </h2>
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
                  {member.image ? (
                    <div className="relative h-20 w-20 overflow-hidden rounded-full ring-1 ring-gold/30">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="80px"
                        className="object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div
                      className={`flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${member.gradient} font-serif text-2xl font-bold text-cream`}
                    >
                      {member.initials}
                    </div>
                  )}
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
    </>
  );
}
