import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constant/site";

const mainRoutes = [
  "",
  "/about",
  "/team",
  "/offers",
  "/contact",
  "/book",
  "/cancellation-policy",
  "/services",
  "/services/facial-treatments",
  "/services/micro-infusion-facial",
  "/services/photo-facial",
  "/services/laser-hair-removal",
  "/services/lash-services",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return mainRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
