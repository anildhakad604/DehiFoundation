import Image from "next/image";
import { Reveal } from "./Reveal";

const GALLERY_ITEMS = [
  {
    src: "/images/gallery-planting.jpg",
    alt: "Two pairs of hands planting a young sapling in the soil",
    caption: "Green Earth Drive — native tree plantation",
    tag: "Environment",
    span: "lg:col-span-2",
  },
  {
    src: "/images/gallery-meal-serving.jpg",
    alt: "Volunteers serving rice and dal from large vessels at an outdoor meal",
    caption: "Anna Seva — meals for all",
    tag: "Food",
    span: "",
  },
  {
    src: "/images/gallery-dog-feeding.jpg",
    alt: "A hand feeding a street dog on the roadside",
    caption: "Feeding street animals",
    tag: "Animal Seva",
    span: "",
  },
  {
    src: "/images/slide-annadaan.jpg",
    alt: "Volunteers cooking and serving fresh meals at a community kitchen",
    caption: "Annadaan — cooking & serving meals",
    tag: "Food",
    span: "lg:col-span-2",
  },
  {
    src: "/images/gallery-gau-seva.jpg",
    alt: "A woman standing with cows under the trees",
    caption: "Gau Seva — caring for cows",
    tag: "Animal Seva",
    span: "",
  },
  {
    src: "/images/gallery-pigeons-water.jpg",
    alt: "Pigeons drinking from a clay water bowl",
    caption: "Water bowls for birds",
    tag: "Birds",
    span: "",
  },
  {
    src: "/images/gallery-street-dog.jpg",
    alt: "A street dog resting on the ground",
    caption: "Care for street dogs",
    tag: "Animal Seva",
    span: "lg:col-span-2",
  },
  {
    src: "/images/gallery-squirrel.jpg",
    alt: "A palm squirrel (gilhari) eating on a stone wall",
    caption: "Food for squirrels (gilhari)",
    tag: "Animal Seva",
    span: "",
  },
  {
    src: "/images/gallery-puppy.jpg",
    alt: "A street puppy sitting on the dirt",
    caption: "Every life matters",
    tag: "Animal Seva",
    span: "",
  },
  {
    src: "/images/gallery-pigeons-grain.jpg",
    alt: "Pigeons eating grain scattered on a wall",
    caption: "Daana for birds",
    tag: "Birds",
    span: "lg:col-span-2",
  },
  {
    src: "/images/gallery-squirrel-palm.jpg",
    alt: "A palm squirrel perched on a palm leaf",
    caption: "Protecting small creatures",
    tag: "Animal Seva",
    span: "",
  },
  {
    src: "/images/slide-birds.jpg",
    alt: "A hand feeding grains to a pigeon, with a flock gathered behind",
    caption: "Feeding birds every day",
    tag: "Birds",
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
