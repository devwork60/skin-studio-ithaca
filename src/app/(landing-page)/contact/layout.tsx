import type { Metadata } from "next";
import { CONTACT_PAGE_SEO } from "@/constant/contactPageData";
import { SITE_URL } from "@/constant/site";

export const metadata: Metadata = {
  ...CONTACT_PAGE_SEO,
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
