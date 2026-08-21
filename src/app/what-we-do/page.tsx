import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { WhatWeDo } from "@/components/WhatWeDo";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "What We Do | Dehi Foundation",
  description:
    "A closer look at Dehi Foundation's six seva pillars — bird & animal welfare, support for needy people, children & education, health & medical support, environment, and community service.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-20">
        <WhatWeDo />
      </main>
      <Footer />
    </>
  );
}
