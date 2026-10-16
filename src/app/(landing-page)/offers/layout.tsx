import type { Metadata } from "next";
import { OFFERS_PAGE_SEO } from "@/constant/offersPageData";
import { SITE_URL } from "@/constant/site";

export const metadata: Metadata = {
  ...OFFERS_PAGE_SEO,
  alternates: { canonical: `${SITE_URL}/offers` },
};

export default function OffersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
