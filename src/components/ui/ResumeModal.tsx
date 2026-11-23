"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heistAudio } from "@/lib/audioEngine";
import {
  FileText,
  Download,
  ExternalLink,
  X,
  ShieldCheck,
  Check,
  Copy,
  Printer,
} from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [activeTab, setActiveTab] = useState<"formatted" | "plain">("formatted");
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    heistAudio.playClick();
    const resumeText = `SANTOSH SANJEEV MAHATO
8329224214 | santoshkumarmahato284@gmail.com | Boisar, Maharashtra
linkedin.com/in/santoshmah | github.com/SantoshMahat9

CAREER OBJECTIVE
Final-year Computer Engineering student (B.Tech, 2023–2027) with hands-on experience in full-stack web development using Angular, .NET, SQL, and MongoDB. Experienced in working in small teams with code reviews and iterative, incremental delivery, with a basic understanding of Agile and Scrum practices. Seeking a full-stack developer internship or entry-level role to build real-world web applications and grow as an engineer.

TECHNICAL SKILLS
• Frontend: HTML, CSS, JavaScript, Angular
• Backend & Database: .NET, Node.js, MongoDB, SQL / MySQL
• Languages: C, C++, Python
• Tools & Concepts: Git / GitHub, REST APIs, Debugging, Code Review
• Methodologies: Basic understanding of Agile and Scrum (sprints, daily stand-ups, backlog, sprint review), iterative development, team collaboration

EXPERIENCE
Intern Developer | Kantascrypt (Onsite) | Mar – Apr 2024
• Collaborated in a team of interns to build a Personal Expense Tracker web application, working in short iterations with shared tasks and regular progress check-ins.
• Designed and managed the SQL database for personal finance data.
• Developed backend logic in .NET to process user data.
• Took part in debugging and peer code reviews to improve application performance and code quality.
Tech: .NET, SQL

PROJECTS
API Integration & Automation — WhatsApp Chatbot | Personal Project | 2025
• Designed and built an automated WhatsApp chatbot using the WhatsApp Business API and Python, replacing manual message handling with automated responses.
• Integrated REST APIs to route incoming messages and trigger responses, reducing response time for repetitive queries.
• Built and improved the bot incrementally, adding features in small iterations.
Tech: WhatsApp Business API, Python, REST APIs

Personal Expense Tracker | .NET, SQL, HTML, CSS | 2024
• Built a web application to log, categorize, and track daily income and expenses.
• Implemented backend logic and data storage using .NET and SQL.

Web Development Projects (In Progress) | HTML, CSS, JavaScript, MongoDB | 2024 – Present
• Building mini full-stack projects using MongoDB and Node.js, delivered in small, working increments.
• Practising RESTful API design and integration.

CERTIFICATIONS
• LLM for Young Developers (Foundational) | AICTE, INDIAai, Meta, Nasscom FutureSkills Prime | Feb 2026
• Angular API Development | SJCEM × Kantascrypt | Nov 2025
• Metaverse Training | SJCEM × IOFT | Nov 2025
• Metaverse Workshop | IOFT, Ministry of MSME | Nov 2025
• Database and SQL | Infosys Springboard | Oct 2024
• Technical Paper Presentation, Anveshnam 2024 | SJCEM | Mar 2024
• AI Skills Passport | EY & Microsoft

EDUCATION
B.Tech, Computer Engineering | St. John College of Engineering and Management, Palghar | 2023 – 2027
• University of Mumbai | Current CGPA: 6.5

ADDITIONAL INFORMATION
• Strengths: Teamwork, Problem Solving, Eagerness to Learn, Collaborating in Agile-style teams`;

    navigator.clipboard.writeText(resumeText).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="bg-[#0f0f13] border border-heist-red/40 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_35px_rgba(229,9,20,0.25)] overflow-hidden font-mono-code relative"
          >
            {/* Modal Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 sm:p-5 border-b border-white/10 bg-[#14141a]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-heist-red/20 border border-heist-red/40 flex items-center justify-center text-heist-red">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bebas text-2xl text-white tracking-wide">
                      OFFICIAL RESUME DOSSIER
                    </h3>
                    <span className="hidden sm:inline-flex items-center gap-1 text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded font-bold">
                      <ShieldCheck className="w-3 h-3" /> VERIFIED
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400 font-technical">
                    Santosh Sanjeev Mahato • B.Tech Computer Engineering (2023–2027)
                  </p>
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="flex items-center flex-wrap gap-2 w-full sm:w-auto justify-end">
                {/* Download PDF button */}
                <a
                  href="/resume/Santosh_Mahato_Resume.pdf"
                  download="Santosh_Mahato_Resume.pdf"
                  onClick={() => heistAudio.playClick()}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-heist-red hover:bg-[#ff1a26] text-white text-xs font-bold shadow-[0_0_15px_rgba(229,9,20,0.4)] transition-all cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>DOWNLOAD PDF</span>
                </a>

                {/* Open in new tab */}
                <a
                  href="/resume/Santosh_Mahato_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => heistAudio.playClick()}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 transition-colors"
                  title="Open PDF in new tab"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {/* Copy Text */}
                <button
                  onClick={handleCopy}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
                  title="Copy resume text"
                >
                  {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>

                {/* Close Button */}
                <button
                  onClick={() => {
                    heistAudio.playClick();
                    onClose();
                  }}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 transition-colors cursor-pointer ml-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body / Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#0a0a0d] space-y-6 text-sm text-neutral-200">
              
              {/* Paper-styled Resume Container */}
              <div className="bg-white text-[#111111] p-6 sm:p-10 rounded-xl shadow-2xl max-w-3xl mx-auto font-sans leading-relaxed select-text border border-neutral-300">
                {/* Header */}
                <div className="text-center pb-4 mb-4 border-b border-neutral-900">
                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide uppercase text-black">
                    SANTOSH SANJEEV MAHATO
                  </h1>
                  <p className="text-xs sm:text-sm text-neutral-700 font-medium mt-1">
                    8329224214 &nbsp;|&nbsp; santoshkumarmahato284@gmail.com &nbsp;|&nbsp; Boisar, Maharashtra
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-800 font-medium mt-0.5">
                    <a href="https://linkedin.com/in/santoshmah" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-800">
                      linkedin.com/in/santoshmah
                    </a>
                    &nbsp;|&nbsp;
                    <a href="https://github.com/SantoshMahat9" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-800">
                      github.com/SantoshMahat9
                    </a>
                  </p>
                </div>

                {/* Career Objective */}
                <div className="mb-5">
                  <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2">
                    CAREER OBJECTIVE
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-800 leading-normal text-justify">
                    Final-year Computer Engineering student (B.Tech, 2023–2027) with hands-on experience in full-stack web development using Angular, .NET, SQL, and MongoDB. Experienced in working in small teams with code reviews and iterative, incremental delivery, with a basic understanding of Agile and Scrum practices. Seeking a full-stack developer internship or entry-level role to build real-world web applications and grow as an engineer.
                  </p>
                </div>

                {/* Technical Skills */}
                <div className="mb-5">
                  <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2">
                    TECHNICAL SKILLS
                  </h2>
                  <ul className="list-disc pl-5 text-xs sm:text-sm text-neutral-800 space-y-1">
                    <li><strong className="text-black">Frontend:</strong> HTML, CSS, JavaScript, Angular</li>
                    <li><strong className="text-black">Backend &amp; Database:</strong> .NET, Node.js, MongoDB, SQL / MySQL</li>
                    <li><strong className="text-black">Languages:</strong> C, C++, Python</li>
                    <li><strong className="text-black">Tools &amp; Concepts:</strong> Git / GitHub, REST APIs, Debugging, Code Review</li>
                    <li><strong className="text-black">Methodologies:</strong> Basic understanding of Agile and Scrum (sprints, daily stand-ups, backlog, sprint review), iterative development, team collaboration</li>
                  </ul>
                </div>

                {/* Experience */}
                <div className="mb-5">
                  <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2">
                    EXPERIENCE
                  </h2>
                  <div className="flex justify-between items-baseline font-bold text-xs sm:text-sm text-black">
                    <span>Intern Developer | Kantascrypt (Onsite)</span>
                    <span className="font-normal text-neutral-700">Mar – Apr 2024</span>
                  </div>
                  <ul className="list-disc pl-5 text-xs sm:text-sm text-neutral-800 space-y-1 mt-1">
                    <li>Collaborated in a team of interns to build a Personal Expense Tracker web application, working in short iterations with shared tasks and regular progress check-ins.</li>
                    <li>Designed and managed the SQL database for personal finance data.</li>
                    <li>Developed backend logic in .NET to process user data.</li>
                    <li>Took part in debugging and peer code reviews to improve application performance and code quality.</li>
                  </ul>
                  <p className="text-xs text-neutral-700 pl-5 mt-1 font-medium">
                    <strong className="text-black">Tech:</strong> .NET, SQL
                  </p>
                </div>

                {/* Projects */}
                <div className="mb-5">
                  <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2">
                    PROJECTS
                  </h2>
                  
                  {/* WhatsApp Bot */}
                  <div className="mb-3">
                    <div className="flex justify-between items-baseline font-bold text-xs sm:text-sm text-black">
                      <span>API Integration &amp; Automation — WhatsApp Chatbot | Personal Project</span>
                      <span className="font-normal text-neutral-700">2025</span>
                    </div>
                    <ul className="list-disc pl-5 text-xs sm:text-sm text-neutral-800 space-y-1 mt-1">
                      <li>Designed and built an automated WhatsApp chatbot using the WhatsApp Business API and Python, replacing manual message handling with automated responses.</li>
                      <li>Integrated REST APIs to route incoming messages and trigger responses, reducing response time for repetitive queries.</li>
                      <li>Built and improved the bot incrementally, adding features in small iterations.</li>
                    </ul>
                    <p className="text-xs text-neutral-700 pl-5 mt-1 font-medium">
                      <strong className="text-black">Tech:</strong> WhatsApp Business API, Python, REST APIs
                    </p>
                  </div>

                  {/* Expense Tracker */}
                  <div className="mb-3">
                    <div className="flex justify-between items-baseline font-bold text-xs sm:text-sm text-black">
                      <span>Personal Expense Tracker | .NET, SQL, HTML, CSS</span>
                      <span className="font-normal text-neutral-700">2024</span>
                    </div>
                    <ul className="list-disc pl-5 text-xs sm:text-sm text-neutral-800 space-y-1 mt-1">
                      <li>Built a web application to log, categorize, and track daily income and expenses.</li>
                      <li>Implemented backend logic and data storage using .NET and SQL.</li>
                    </ul>
                  </div>

                  {/* Web Dev Lab */}
                  <div>
                    <div className="flex justify-between items-baseline font-bold text-xs sm:text-sm text-black">
                      <span>Web Development Projects (In Progress) | HTML, CSS, JavaScript, MongoDB</span>
                      <span className="font-normal text-neutral-700">2024 – Present</span>
                    </div>
                    <ul className="list-disc pl-5 text-xs sm:text-sm text-neutral-800 space-y-1 mt-1">
                      <li>Building mini full-stack projects using MongoDB and Node.js, delivered in small, working increments.</li>
                      <li>Practising RESTful API design and integration.</li>
                    </ul>
                  </div>
                </div>

                {/* Certifications */}
                <div className="mb-5">
                  <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2">
                    CERTIFICATIONS
                  </h2>
                  <ul className="list-disc pl-5 text-xs sm:text-sm text-neutral-800 space-y-1">
                    <li>LLM for Young Developers (Foundational) | AICTE, INDIAai, Meta, Nasscom FutureSkills Prime | Feb 2026</li>
                    <li>Angular API Development | SJCEM × Kantascrypt | Nov 2025</li>
                    <li>Metaverse Training | SJCEM × IOFT | Nov 2025</li>
                    <li>Metaverse Workshop | IOFT, Ministry of MSME | Nov 2025</li>
                    <li>Database and SQL | Infosys Springboard | Oct 2024</li>
                    <li>Technical Paper Presentation, Anveshnam 2024 | SJCEM | Mar 2024</li>
                    <li>AI Skills Passport | EY &amp; Microsoft</li>
                  </ul>
                </div>

                {/* Education */}
                <div className="mb-5">
                  <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2">
                    EDUCATION
                  </h2>
                  <div className="flex justify-between items-baseline font-bold text-xs sm:text-sm text-black">
                    <span>B.Tech, Computer Engineering | St. John College of Engineering and Management, Palghar</span>
                    <span className="font-normal text-neutral-700">2023 – 2027</span>
                  </div>
                  <ul className="list-disc pl-5 text-xs sm:text-sm text-neutral-800 space-y-1 mt-1">
                    <li>University of Mumbai | Current CGPA: 6.5</li>
                  </ul>
                </div>

                {/* Additional Information */}
                <div>
                  <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2">
                    ADDITIONAL INFORMATION
                  </h2>
                  <ul className="list-disc pl-5 text-xs sm:text-sm text-neutral-800 space-y-1">
                    <li><strong className="text-black">Strengths:</strong> Teamwork, Problem Solving, Eagerness to Learn, Collaborating in Agile-style teams</li>
                  </ul>
                </div>

              </div>

            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between p-3 sm:p-4 border-t border-white/10 bg-[#14141a] text-[11px] text-neutral-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-heist-red animate-pulse" />
                <span>OPERATIVE DOSSIER ACCREDITED</span>
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="/resume/Santosh_Mahato_Resume.txt"
                  download="Santosh_Mahato_Resume.txt"
                  className="hover:text-heist-red transition-colors"
                >
                  Raw .TXT Format
                </a>
                <span>•</span>
                <a
                  href="/resume/Santosh_Mahato_Resume.pdf"
                  download="Santosh_Mahato_Resume.pdf"
                  className="text-heist-red font-bold hover:underline"
                >
                  Official .PDF (94.5 KB)
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
