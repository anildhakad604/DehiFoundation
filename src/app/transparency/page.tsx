import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Transparency } from "@/components/Transparency";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Transparency | Dehi Foundation",
  description:
    "How Dehi Foundation allocates donor funds across food, education, animal welfare and environment programmes, and how to request our annual reports.",
};

export default function TransparencyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-20">
        <Transparency />
      </main>
      <Footer />
    </>
  );
}
