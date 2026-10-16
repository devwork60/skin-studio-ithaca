import type { Metadata } from "next";
import { FACIAL_TREATMENTS } from "@/constant/servicePages/facialTreatmentsData";
import { buildServiceMetadata } from "@/utils/serviceMetadata";

export const metadata: Metadata = buildServiceMetadata(FACIAL_TREATMENTS);

export default function FacialTreatmentsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
