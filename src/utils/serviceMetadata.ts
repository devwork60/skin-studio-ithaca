import type { Metadata } from "next";
import type { ServicePageData } from "@/constant/servicePages/types";
import { SITE_URL } from "@/constant/site";

// SEO metadata for a service page layout, derived from the page's data.
export function buildServiceMetadata(data: ServicePageData): Metadata {
  return {
    title: data.seo.title,
    description: data.seo.description,
    alternates: { canonical: `${SITE_URL}/services/${data.slug}` },
  };
}
