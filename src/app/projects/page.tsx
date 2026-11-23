import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProjectsSection } from "@/components/sections/Projects";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Selected Projects — Santosh Sanjeev Mahato",
  description: "Case studies: WhatsApp Chatbot Automation, Personal Expense Tracker, and Web Development API Lab.",
};

export default function ProjectsPage() {
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
      <ProjectsSection />
      <Footer />
    </>
  );
}
