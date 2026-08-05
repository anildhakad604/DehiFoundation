import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Events } from "@/components/Events";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Events | Dehi Foundation",
  description:
    "Upcoming and past food, education, animal welfare and environment events from Dehi Foundation — join a drive near you.",
};

export default function EventsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-20">
        <Events />
      </main>
      <Footer />
    </>
  );
}
