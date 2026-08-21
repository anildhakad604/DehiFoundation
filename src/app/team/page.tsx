import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Team } from "@/components/Team";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Founder's Message & Our Team | Dehi Foundation",
  description:
    "In loving memory of Late Shri Hira Lal Dhingra, and the trustees, advisors and coordinators carrying his legacy forward through Dehi Foundation's work.",
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
