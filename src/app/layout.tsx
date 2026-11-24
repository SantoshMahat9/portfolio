import type { Metadata } from "next";
import "./globals.css";
import { profileData } from "@/data/profile";

export const metadata: Metadata = {
  metadataBase: new URL("https://santosh-portfolio.vercel.app"),
  title: `${profileData.brandName} — ${profileData.role} | Cinematic Portfolio`,
  description: `${profileData.heroSupporting} Explore engineering missions at Kantascrypt, technical arsenal, and full-stack projects.`,
  keywords: [
    "Santosh Mahato",
    "Full Stack Developer",
    "Creative Developer",
    "Money Heist Portfolio",
    "Computer Engineering",
    "St. John College of Engineering",
    "React",
    "Next.js",
    "Three.js",
    ".NET",
    "SQL",
    "Node.js",
  ],
  authors: [{ name: profileData.fullName, url: profileData.links.linkedin }],
  creator: profileData.fullName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://santosh-portfolio.vercel.app",
    title: `${profileData.brandName} — ${profileData.role}`,
    description: profileData.tagline,
    siteName: `${profileData.brandName} Portfolio`,
    images: [
      {
        url: "/images/profile/santosh-heist-poster.jpg",
        width: 825,
        height: 1024,
        alt: `${profileData.fullName} — Money Heist Developer Profile`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.brandName} — ${profileData.role}`,
    description: profileData.tagline,
    images: ["/images/profile/santosh-heist-poster.jpg"],
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
    alternateName: profileData.brandName,
    jobTitle: profileData.role,
    description: profileData.heroSupporting,
    email: profileData.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Boisar",
      addressRegion: "Maharashtra",
      addressCountry: "India",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: profileData.education.institution,
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
      <body className="bg-heist-black text-heist-text antialiased selection:bg-heist-red selection:text-white min-h-screen flex flex-col font-sans-body">
        {children}
      </body>
    </html>
  );
}
