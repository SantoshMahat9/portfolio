import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { About } from "@/components/sections/About";
import { EducationCertifications } from "@/components/sections/EducationCertifications";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "About Me — Santosh Sanjeev Mahato",
  description: "Computer Engineering student at St. John College of Engineering and Management (University of Mumbai). Engineering philosophy, background, and academic credentials.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="pt-28 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono-code text-brand-orange hover:text-brand-yellow transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Overview</span>
        </Link>
      </div>
      <About />
      <EducationCertifications />
      <Footer />
    </>
  );
}
