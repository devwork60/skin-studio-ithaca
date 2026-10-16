import type { Metadata } from "next";
import { BOOK_PAGE_SEO } from "@/constant/bookPageData";
import { SITE_URL } from "@/constant/site";

export const metadata: Metadata = {
  ...BOOK_PAGE_SEO,
  alternates: { canonical: `${SITE_URL}/book` },
};

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
