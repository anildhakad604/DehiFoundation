import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Terms } from "@/components/Terms";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Dehi Foundation",
  description:
    "The terms governing use of the Dehi Foundation website, donations, volunteering and event sign-ups.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-20">
        <Terms />
      </main>
      <Footer />
    </>
  );
}
