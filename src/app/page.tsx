import { CinematicLoader } from "@/components/layout/CinematicLoader";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { SkillsSection } from "@/components/sections/Skills";
import { ProjectsSection } from "@/components/sections/Projects";
import { ExperienceSection } from "@/components/sections/Experience";
import { ApproachSection } from "@/components/sections/Approach";
import { ContactSection } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <CinematicLoader />
      <Navbar />
      <main className="flex-1 w-full bg-heist-black">
        <Hero />
        <About />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ApproachSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
