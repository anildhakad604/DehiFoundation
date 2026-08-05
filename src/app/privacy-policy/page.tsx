import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { PrivacyPolicy } from "@/components/PrivacyPolicy";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Dehi Foundation",
  description:
    "How Dehi Foundation collects, uses and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-20">
        <PrivacyPolicy />
      </main>
      <Footer />
    </>
  );
}
