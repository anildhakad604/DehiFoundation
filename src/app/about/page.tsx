import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Story | Dehi Foundation",
  description:
    "How Dehi Foundation grew from a single weekly community kitchen into five key areas of service — food, education, animal welfare, environment and community development.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-20">
        <About />
      </main>
      <Footer />
    </>
  );
}
