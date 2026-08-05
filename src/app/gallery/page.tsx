import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gallery | Dehi Foundation",
  description:
    "Photos from Dehi Foundation's food, environment, animal welfare and community programmes — moments from the field.",
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-20">
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
