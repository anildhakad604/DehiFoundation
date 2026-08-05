import Image from "next/image";
import { Reveal } from "./Reveal";

const GALLERY_ITEMS = [
  {
    src: "/SliderBanner1.png",
    alt: "Volunteers planting saplings during a tree plantation drive",
    caption: "Green Earth Drive — native tree plantation",
    tag: "Environment",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "/SliderBanner2.png",
    alt: "Families and volunteers gathered during a ration distribution",
    caption: "Anna Seva — meals & ration distribution",
    tag: "Food",
    span: "",
  },
  {
    src: "/SliderBanner4.png",
    alt: "Volunteers serving the community during a foundation outreach event",
    caption: "Community outreach in action",
    tag: "Community",
    span: "",
  },
  {
    src: "/SliderBanner3.png",
    alt: "Foundation volunteers supporting food, education, healthcare and animal welfare programmes",
    caption: "Food, education, healthcare & animal welfare",
    tag: "Programs",
    span: "lg:col-span-2",
  },
  {
    src: "/SliderBanner5.png",
    alt: "Community members empowered through Dehi Foundation programmes",
    caption: "Empowering communities together",
    tag: "Community",
    span: "",
  },
];

export function Gallery() {
  return (
    <section className="bg-cream py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Gallery
          </span>
          <h1 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-navy-deep">
            Moments from the field
          </h1>
          <p className="mt-4 text-base leading-relaxed text-navy-deep/70">
            A glimpse into the drives, meals, plantations and rescues made
            possible by our volunteers, donors and partners.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[220px]">
          {GALLERY_ITEMS.map((item, i) => (
            <Reveal
              key={item.src + item.caption}
              delay={i * 0.08}
              className={`group relative overflow-hidden rounded-3xl border border-brown/10 shadow-sm ${item.span}`}
            >
              <div className="relative h-56 w-full lg:h-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/10 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-forest-deep">
                  {item.tag}
                </span>
                <p className="absolute inset-x-4 bottom-4 font-serif text-base font-semibold text-cream">
                  {item.caption}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
