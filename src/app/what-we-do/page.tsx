import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { WhatWeDo } from "@/components/WhatWeDo";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "What We Do | Dehi Foundation",
  description:
    "A closer look at Dehi Foundation's five seva pillars — animal & bird rescue, food, clothing & shelter, environment, community development, and education.",
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
