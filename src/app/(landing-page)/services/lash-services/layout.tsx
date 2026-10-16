import type { Metadata } from "next";
import { LASH_SERVICES } from "@/constant/servicePages/lashServicesData";
import { buildServiceMetadata } from "@/utils/serviceMetadata";

export const metadata: Metadata = buildServiceMetadata(LASH_SERVICES);

export default function LashServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
