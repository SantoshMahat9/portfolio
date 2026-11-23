import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://santosh-portfolio.vercel.app";
  const routes = [
    "",
    "/about",
    "/skills",
    "/experience",
    "/projects",
    "/contact",
    "/concept-b",
    "/concept-c",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
