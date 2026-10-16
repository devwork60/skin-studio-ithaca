import type { ReactNode } from "react";

export interface ServiceResultItem {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  aspectRatio?: string; // defaults to 4/3
  maxWidthClass?: string; // cap the width for low-resolution photos
  caption?: string;
}

export interface ServiceOffering {
  tagline: string;
  title: string;
  description: string;
  cta: { text: string; url: string };
}

// Everything a service detail page needs; each page file only supplies one of these.
export interface ServicePageData {
  slug: string;
  seo: { title: string; description: string };
  hero: {
    image: { src: string; alt: string };
    breadcrumbLabel: string;
    title: ReactNode;
    description: string;
  };
  detail: {
    image: { src: string; alt: string };
    eyebrow: string;
    heading: ReactNode;
    paragraphs: string[];
    highlights: string[];
    tags: string[];
    primaryCta: { text: string; url: string; external?: boolean };
  };
  results: ServiceResultItem[];
  /** Optional grid of sub-services shown after the results (e.g. lash & brow options). */
  offerings?: { eyebrow: string; heading: ReactNode; items: ServiceOffering[] };
}
