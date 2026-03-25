import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Process from "@/components/Process";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <Services />
      <CaseStudies />
      <Process />
      <FinalCTA />
    </>
  );
}
