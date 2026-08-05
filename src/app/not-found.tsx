import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { NotFound } from "@/components/NotFound";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found | Dehi Foundation",
  description: "The page you're looking for doesn't exist or may have moved.",
};

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-20">
        <NotFound />
      </main>
      <Footer />
    </>
  );
}
