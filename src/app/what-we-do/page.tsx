import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { WhatWeDo } from "@/components/WhatWeDo";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "What We Do | Dehi Foundation",
  description:
    "A closer look at Dehi Foundation's four seva pillars — food, clothing & shelter, education, animal & bird rescue, and environment.",
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
