import type { Metadata } from "next";
import { SITE_URL } from "@/constant/site";

export const metadata: Metadata = {
  title: "Our Treatments | Skin Studio Ithaca",
  description:
    "Custom facials, micro-infusion, BBL photofacials, laser hair removal and lash services in Ithaca, NY — every treatment tailored to your unique skin goals.",
  alternates: { canonical: `${SITE_URL}/services` },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
