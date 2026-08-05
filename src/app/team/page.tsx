import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Team } from "@/components/Team";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Team | Dehi Foundation",
  description:
    "Meet the trustees, advisors and coordinators guiding Dehi Foundation's food, education, animal welfare and environment programmes.",
};

export default function TeamPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-20">
        <Team />
      </main>
      <Footer />
    </>
  );
}
