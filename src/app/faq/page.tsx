import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "FAQ | Dehi Foundation",
  description:
    "Answers to common questions about donating, volunteering and partnering with Dehi Foundation.",
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-20">
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
