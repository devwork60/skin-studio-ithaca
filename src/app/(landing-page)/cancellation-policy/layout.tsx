import type { Metadata } from "next";
import { CANCELLATION_SEO } from "@/constant/cancellationPolicyData";
import { SITE_URL } from "@/constant/site";

export const metadata: Metadata = {
  ...CANCELLATION_SEO,
  alternates: { canonical: `${SITE_URL}/cancellation-policy` },
};

export default function CancellationPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
