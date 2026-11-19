import Image from "next/image";
import { Reveal } from "./Reveal";

type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  tag: string;
  /** Grid span classes for the lg 4-column layout (portrait photos use lg:row-span-2). */
  span: string;
  /** Optional object-position class to keep the subject in frame when cropped. */
  position?: string;
};

const GALLERY_ITEMS: GalleryItem[] = [
  // Foundation's own field photos (shared by the client)
  {
    src: "/images/gallery-park-dogs.jpg",
    alt: "Two street dogs eating on the grass in a park",
    caption: "Daily feeding for park dogs",
    tag: "Animal Seva",
    span: "lg:row-span-2",
    position: "object-[50%_45%]",
  },
  {
    src: "/images/gallery-black-dog.jpg",
    alt: "A black street dog licking its lips after a meal in the park",
    caption: "A full stomach, a happy face",
    tag: "Animal Seva",
    span: "lg:row-span-2",
    position: "object-[60%_25%]",
  },
  {
    src: "/images/gallery-dog-resting.jpg",
    alt: "A ginger street dog resting on the grass",
    caption: "Rest and safety for street dogs",
    tag: "Animal Seva",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "/images/gallery-dog-meal.jpg",
    alt: "A street dog sitting on the grass eating its meal",
    caption: "Food and care for every dog",
    tag: "Animal Seva",
    span: "lg:row-span-2",
    position: "object-[50%_55%]",
  },
  {
    src: "/images/gallery-bread-offering.jpg",
    alt: "Bread pieces left out for small creatures at the roots of an old tree",
    caption: "Food for the smallest creatures",
    tag: "Animal Seva",
    span: "lg:row-span-2",
    position: "object-[50%_35%]",
  },
  // Frames captured from the foundation's own field videos (shared by the client)
  {
    src: "/images/gallery-video-ginger-dog-park.jpg",
    alt: "A ginger street dog eating its meal on the grass in a tree-lined park",
    caption: "Morning feeding in the park",
    tag: "Animal Seva",
    span: "lg:row-span-2",
    position: "object-[35%_70%]",
  },
  {
    src: "/images/gallery-video-black-dog-eating.jpg",
    alt: "A black street dog eating food from the grass",
    caption: "Nourishing our street companions",
    tag: "Animal Seva",
    span: "lg:row-span-2",
    position: "object-[60%_60%]",
  },
  {
    src: "/images/gallery-video-ginger-dog-eating.jpg",
    alt: "Close-up of a ginger street dog eating from the ground",
    caption: "Every meal served with love",
    tag: "Animal Seva",
    span: "lg:row-span-2",
    position: "object-[50%_40%]",
  },
  {
    src: "/images/gallery-video-dog-closeup.jpg",
    alt: "Close-up of a black street dog resting with treats between its paws",
    caption: "Small kindness, big gratitude",
    tag: "Animal Seva",
    span: "lg:row-span-2",
    position: "object-[50%_25%]",
  },
  {
    src: "/images/gallery-video-dog-treat.jpg",
    alt: "A black street dog lying on the grass chewing a treat",
    caption: "A treat after a long day",
    tag: "Animal Seva",
    span: "lg:col-span-2 lg:row-span-2",
    position: "object-[50%_35%]",
  },
  // Gau Seva & birds — frames captured from the foundation's field videos (19 Nov 2026)
  {
    src: "/images/gallery-video-cow-bread.jpg",
    alt: "A cow standing over a pile of bread slices on the roadside, with a crow beside it",
    caption: "Bread for the cows on our route",
    tag: "Gau Seva",
    span: "lg:row-span-2",
    position: "object-[50%_45%]",
  },
  {
    src: "/images/gallery-video-cow-eating.jpg",
    alt: "A cow eating bread from a pile on the ground",
    caption: "Gau Seva — a meal for every cow",
    tag: "Gau Seva",
    span: "lg:row-span-2",
    position: "object-[50%_60%]",
  },
  {
    src: "/images/gallery-video-peacock-feeding.jpg",
    alt: "A peacock foraging on the grass in a park",
    caption: "Peacocks foraging in the park",
    tag: "Birds",
    span: "lg:col-span-2 lg:row-span-2",
    position: "object-[50%_35%]",
  },
  {
    src: "/images/gallery-video-peacock-leaves.jpg",
    alt: "A peacock pecking among fallen yellow leaves on the grass",
    caption: "Protecting birds and their habitat",
    tag: "Birds",
    span: "lg:col-span-2 lg:row-span-2",
    position: "object-[50%_30%]",
  },
  {
    src: "/images/gallery-video-peacock-facing.jpg",
    alt: "A peacock standing on the grass, looking towards the camera",
    caption: "Our national bird, cared for",
    tag: "Birds",
    span: "lg:col-span-2 lg:row-span-2",
    position: "object-[50%_35%]",
  },
  // Annadaan & monkeys — frames from the foundation's field videos (client confirmed filming & consent)
  {
    src: "/images/gallery-video-child-meal.jpg",
    alt: "A young child holding a plate of freshly served food",
    caption: "Annadaan — a warm plate for every child",
    tag: "Annadaan",
    span: "lg:row-span-2",
    position: "object-[50%_40%]",
  },
  {
    src: "/images/gallery-video-meal-seated.jpg",
    alt: "Elderly women seated on the roadside with their meals",
    caption: "Meals for our elders",
    tag: "Annadaan",
    span: "lg:row-span-2",
    position: "object-[35%_50%]",
  },
  {
    src: "/images/gallery-video-monkey-mother.jpg",
    alt: "A mother monkey holding her baby while eating a banana",
    caption: "Bananas for the monkeys",
    tag: "Animal Seva",
    span: "lg:row-span-2",
    position: "object-[50%_35%]",
  },
  {
    src: "/images/gallery-video-monkey-troop.jpg",
    alt: "A troop of monkeys eating bananas by a stone wall",
    caption: "Feeding the whole troop",
    tag: "Animal Seva",
    span: "lg:row-span-2",
    position: "object-[50%_40%]",
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
            A glimpse into our daily feeding rounds — meals for people in need
            and care for street animals, cows, monkeys and birds — made
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
                  className={`object-cover ${item.position ?? ""} transition-transform duration-700 group-hover:scale-105`}
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
