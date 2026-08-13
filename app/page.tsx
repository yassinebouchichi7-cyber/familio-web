import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import TheFirst from "@/components/TheFirst";
import Screenshots from "@/components/Screenshots";
import Features from "@/components/Features";
import Download from "@/components/Download";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <TheFirst />
        <Screenshots />
        <Features />
        <Download />
      </main>
    </>
  );
}