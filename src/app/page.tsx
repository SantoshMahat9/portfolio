import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ExperienceSection } from "@/components/sections/Experience";
import { ProjectsSection } from "@/components/sections/Projects";
import { SkillsSection } from "@/components/sections/Skills";
import { EducationCertifications } from "@/components/sections/EducationCertifications";
import { ContactSection } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationCertifications />
      <ContactSection />
    </>
  );
}
