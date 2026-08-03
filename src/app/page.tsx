import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Impact } from "@/components/Impact";
import { Programs } from "@/components/Programs";
import { Testimonials } from "@/components/Testimonials";
import { GetInvolved } from "@/components/GetInvolved";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Mission />
        <Impact />
        <Programs />
        <Testimonials />
        <GetInvolved />
      </main>
      <Footer />
    </>
  );
}
