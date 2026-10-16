import type { Metadata } from "next";
import { ABOUT_PAGE_SEO } from "@/constant/aboutPageData";
import { SITE_URL } from "@/constant/site";

export const metadata: Metadata = {
  ...ABOUT_PAGE_SEO,
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
