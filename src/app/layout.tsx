import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { profileData } from "@/data/profile";

export const metadata: Metadata = {
  metadataBase: new URL("https://santosh-portfolio.vercel.app"),
  title: `${profileData.displayName} — ${profileData.role} | 3D Creative Portfolio`,
  description: `${profileData.shortIntro} Explore projects, experience at Kantascrypt, certifications, and technical toolkit.`,
  keywords: [
    "Santosh Mahato",
    "Santosh Sanjeev Mahato",
    "Full Stack Developer",
    "Creative Developer",
    "3D Web Developer",
    "Computer Engineering",
    "St. John College of Engineering and Management",
    "Portfolio",
    "React",
    "Next.js",
    "Three.js",
    "Python",
    ".NET",
    "WhatsApp API",
  ],
  authors: [{ name: profileData.fullName, url: profileData.links.linkedin }],
  creator: profileData.fullName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://santosh-portfolio.vercel.app",
    title: `${profileData.displayName} — ${profileData.role}`,
    description: profileData.tagline + " " + profileData.secondaryHeadline,
    siteName: `${profileData.brandName} Portfolio`,
    images: [
      {
        url: "/images/profile/santosh-portrait.png",
        width: 1200,
        height: 1200,
        alt: `${profileData.fullName} — 3D Character Identity`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.displayName} — ${profileData.role}`,
    description: profileData.secondaryHeadline,
    images: ["/images/profile/santosh-portrait.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profileData.fullName,
    alternateName: profileData.displayName,
    jobTitle: profileData.role,
    description: profileData.shortIntro,
    email: profileData.email,
    telephone: profileData.formattedPhone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Boisar",
      addressRegion: "Maharashtra",
      addressCountry: "India",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "St. John College of Engineering and Management, Palghar (University of Mumbai)",
    },
    sameAs: [
      profileData.links.github,
      profileData.links.linkedin,
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-brand-dark text-white antialiased selection:bg-brand-orange selection:text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
