import type { Metadata } from "next";
import { SITE_URL } from "@/constant/site";
import { TEAM_PAGE_SEO } from "@/constant/teamPageData";

export const metadata: Metadata = {
  ...TEAM_PAGE_SEO,
  alternates: { canonical: `${SITE_URL}/team` },
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
